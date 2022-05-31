import {Html, Head, Main, NextScript} from 'next/document'

export default function Document(){
    return(
        <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@0;1&display=swap" rel="stylesheet" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html> 
    );
}