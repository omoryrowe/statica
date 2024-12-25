import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder");

    if (!folder) {
        return NextResponse.json({ error: "Folder parameter is required" }, { status: 400 });
    }

    try {
        const folderPath = path.join(process.cwd(), "public", "images", folder);
        const files = fs
            .readdirSync(folderPath)
            .filter((file) => /\.(png|jpg|jpeg|gif|webp)$/i.test(file))
            .map((file) => `/images/${folder}/${file}`);
        return NextResponse.json({ files });
    } catch (error) {
        return NextResponse.json({ error: "Unable to load images" }, { status: 500 });
    }
}
