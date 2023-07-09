'use client'
import { useEffect } from 'react';

export default function Download() {
  useEffect(() => {
    const downloadFile = async () => {
      try {
        const response = await fetch('/pack.zip');
        const blob = await response.blob();

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'pack.zip';
        link.click();

        URL.revokeObjectURL(url);
      } catch (error) {
        console.log('Ошибка при скачивании файла:', error);
      }
    };

    downloadFile();
  }, []);

  return <div></div>;
}





