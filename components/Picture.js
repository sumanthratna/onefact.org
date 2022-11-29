import React from 'react';
import Image from 'next/image';
// import Jaan from '../public/images/jaan.jpg';
import dynamic from 'next/dynamic';

// usage: {% picture src="/images/jaan.jpg" alt="jaan" width=400 height=800 /%}
// following https://nextjs.org/docs/api-reference/next/image

export function Picture(props) {
    return (
      <div>
        <Image
          {...props}
        />
        {/* <style jsx>
          {`
            iframe {
              aspect-ratio: 16 / 9;
              margin: var(--default-vertical-spacing) 0;
              border-radius: 4px;
              border: 1px solid var(--code-border);
            }
          `}
        </style> */}
      </div>
    );
  }