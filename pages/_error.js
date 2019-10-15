import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import errorGif from '../static/images/error.gif';

function Error({ statusCode }) {
  return (
    <div>
        <Head>
            <title>Trabajos Remotos | Error</title>
        </Head>

        <div className="anuncio">
            <div className="container">
              <div className="content fullwidth center">
                <img src={errorGif} />
                <p>Psst! Parece que te has perdido, pero siempre puedes volver al <Link href="/"><a>inicio</a></Link> 👍</p>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Error;