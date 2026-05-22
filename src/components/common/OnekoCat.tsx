'use client';

import { catConfig } from '@/config/Cat';
import Script from 'next/script';
import React from 'react';
import { useEffect, useState } from 'react';

export default function OnekoCat() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const updateViewport = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);

    return () => {
      mediaQuery.removeEventListener('change', updateViewport);
    };
  }, []);

  if (!catConfig.enabled) {
    return null;
  }

  if (!isDesktop) {
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
