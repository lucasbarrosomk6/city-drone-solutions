import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
   return (
      <>
         <Html>
            <Head>
               <link
                  href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400;500;600;700;800&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      </>
   );
};

export default MyDocument;