import { catConfig } from '@/config/Cat';
import Script from 'next/script';
import React from 'react';

export default function OnekoCat() {
  if (!catConfig.enabled) {
    return null;
  }

  return (
    <>
      <style>
        {`
          #oneko {
            filter: hue-rotate(-20deg) saturate(2) brightness(1.1);
          }
        `}
      </style>
      <Script src="./oneko/oneko.js" data-cat="./oneko/oneko.gif" />
    </>
  );
}
