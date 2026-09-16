#!/usr/bin/env node
// Local, server-side discovery tool: reads GHL credentials from the
// environment and lists pipelines for the configured location, looking for
// the "Statica Sales" pipeline and its "New Lead" stage.
//
// Usage (reads .env.local automatically via Node's --env-file flag):
//   node --env-file=.env.local scripts/ghl-discover-pipeline.mjs
//
// Requires GHL_PRIVATE_INTEGRATION_TOKEN and GHL_LOCATION_ID to be set.
// Never prints the token. Read-only: does not create or modify pipelines.

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

const TARGET_PIPELINE_NAME = "Statica Sales";
const TARGET_STAGE_NAME = "New Lead";

async function main() {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error(
      "Missing GHL_PRIVATE_INTEGRATION_TOKEN and/or GHL_LOCATION_ID in the environment."
    );
    console.error(
      "Run with: node --env-file=.env.local scripts/ghl-discover-pipeline.mjs"
    );
    process.exitCode = 1;
    return;
  }

  const url = new URL("/opportunities/pipelines", GHL_API_BASE);
  url.searchParams.set("locationId", locationId);

  let response;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: GHL_API_VERSION,
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(10000),
    });
  } catch (err) {
    console.error(`Request to GHL failed: ${err instanceof Error ? err.message : err}`);
    process.exitCode = 1;
    return;
  }

  if (!response.ok) {
    const bodyText = await response.text().catch(() => "");
    console.error(`GHL responded with HTTP ${response.status}.`);
    if (bodyText) console.error(bodyText.slice(0, 500));
    process.exitCode = 1;
    return;
  }

  const data = await response.json();
  const pipelines = data?.pipelines ?? [];

  if (pipelines.length === 0) {
    console.error("No pipelines returned for this location.");
    process.exitCode = 1;
    return;
  }

  console.log(`Found ${pipelines.length} pipeline(s) for location ${locationId}:`);
  for (const pipeline of pipelines) {
    console.log(`  - ${pipeline.name} (id: ${pipeline.id})`);
  }
  console.log("");

  const exactMatches = pipelines.filter((p) => p.name === TARGET_PIPELINE_NAME);
  const looseMatches = pipelines.filter(
    (p) =>
      p.name !== TARGET_PIPELINE_NAME &&
      p.name.trim().toLowerCase() === TARGET_PIPELINE_NAME.toLowerCase()
  );

  if (exactMatches.length === 0 && looseMatches.length === 0) {
    console.error(`No pipeline named "${TARGET_PIPELINE_NAME}" was found.`);
    process.exitCode = 1;
    return;
  }
  if (exactMatches.length > 1) {
    console.error(
      `Ambiguous: found ${exactMatches.length} pipelines named exactly "${TARGET_PIPELINE_NAME}". Rename them so the target is unique, then re-run.`
    );
    process.exitCode = 1;
    return;
  }
  if (exactMatches.length === 0 && looseMatches.length > 0) {
    console.error(
      `No exact match for "${TARGET_PIPELINE_NAME}", but found a case/whitespace-different match: ${looseMatches
        .map((p) => `"${p.name}"`)
        .join(", ")}. Not treating this as a match — rename the pipeline to match exactly, or update the discovery script's expected name.`
    );
    process.exitCode = 1;
    return;
  }

  const pipeline = exactMatches[0];
  const stages = pipeline.stages ?? [];
  const stageMatches = stages.filter((s) => s.name === TARGET_STAGE_NAME);

  console.log(`Pipeline "${pipeline.name}" — GHL_PIPELINE_ID=${pipeline.id}`);

  if (stageMatches.length === 0) {
    console.error(
      `  No stage named "${TARGET_STAGE_NAME}" found in this pipeline. Available stages: ${stages
        .map((s) => `"${s.name}"`)
        .join(", ") || "(none)"}`
    );
    process.exitCode = 1;
    return;
  }
  if (stageMatches.length > 1) {
    console.error(
      `  Ambiguous: found ${stageMatches.length} stages named exactly "${TARGET_STAGE_NAME}" in this pipeline.`
    );
    process.exitCode = 1;
    return;
  }

  console.log(`Stage "${TARGET_STAGE_NAME}" — GHL_NEW_LEAD_STAGE_ID=${stageMatches[0].id}`);
}

main();
