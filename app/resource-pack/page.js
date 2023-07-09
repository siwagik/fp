'use client'

import { useEffect } from 'react';

export default function Download() {
  useEffect(() => {
    const ready = () => {
      var link = document.createElement('a');
      link.setAttribute('href', 'resource-pack');
      link.setAttribute('download', 'pack.zip');
      link.click();
    };
    ready()
  }, []);

  return <div></div>;
}