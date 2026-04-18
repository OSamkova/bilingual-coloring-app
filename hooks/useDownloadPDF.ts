'use client';

import { useCallback, useState } from 'react';
import { animals } from '@/data/animals';

export function useDownloadPDF() {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = useCallback(async () => {
    setIsGenerating(true);
    try {
      const { default: jsPDF } = await import('jspdf');
      const { default: html2canvas } = await import('html2canvas');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [680, 820],
      });

      for (let i = 0; i < animals.length; i++) {
        const el = document.getElementById(`animal-page-${animals[i].id}`);
        if (!el) continue;

        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#fffdf8',
        });

        const imgData = canvas.toDataURL('image/png');
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, 680, 820);
      }

      pdf.save('bilingual-coloring-pack.pdf');
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return { downloadPDF, isGenerating };
}
