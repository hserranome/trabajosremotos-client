import React from 'react';
import Head from 'next/head';

function Error({ statusCode }) {
  return (
    <div>
        <Head>
            <title>Trabajos Remotos | Error</title>
        </Head>

        <div className="anuncio">
            <div className="container">
                <p>Test</p>
            </div>
        </div>
        
    </div>
  )
}

export default Error;