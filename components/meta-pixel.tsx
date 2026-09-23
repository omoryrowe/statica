"use client";

import { Suspense, useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const PIXEL_ID = "1092700856504407";

function PixelPageviews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mounted = useRef(false);

  useEffect(() => {
    // The init script below already fires the first PageView; only track
    // subsequent client-side (App Router) navigations here.
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <Suspense fallback={null}>
        <PixelPageviews />
      </Suspense>
    </>
  );
}
