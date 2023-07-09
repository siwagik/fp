'use client'

import { useEffect } from 'react';

export default function Download() {
  useEffect(() => {
    const ready = () => {
      var link = document.createElement('a');
      link.setAttribute('href', '/resource-pack.zip');
      link.setAttribute('download', 'resource-pack.zip');
      link.click();
    };
    ready()
  }, []);

  return <div>Download Page</div>;
}