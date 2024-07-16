import Script from "next/script";
import React from "react";

export default function ScriptGoogle() {
  return (
    <div>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-JBEQLD25KV');
          `,
        }}
        src="https://www.googletagmanager.com/gtag/js?id=G-JBEQLD25KV"
      />
    </div>
  );
}
