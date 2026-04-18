import { Animal } from '@/data/animals';

interface ColoringPageProps {
  animal: Animal;
}

export function ColoringPage({ animal }: ColoringPageProps) {
  return (
    <div
      id={`animal-page-${animal.id}`}
      style={{
        background: '#fffdf8',
        border: '4px dashed #f0c060',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        aspectRatio: '1 / 1.2',
        position: 'relative',
      }}
    >
      {/* Header */}
      <p style={{ fontSize: '16px', fontWeight: 700, color: '#333', margin: '0 0 12px', textAlign: 'center' }}>
        Color me! / Раскрась меня! ★
      </p>

      {/* Animal image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={animal.image}
        alt={animal.nameEn}
        style={{
          width: '100%',
          flex: 1,
          objectFit: 'contain',
          maxHeight: '65%',
        }}
        crossOrigin="anonymous"
      />

      {/* Labels */}
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <p style={{ fontSize: '28px', fontWeight: 700, color: '#e05a2b', margin: '4px 0' }}>
          {animal.nameEn}
        </p>
        <p style={{ fontSize: '28px', fontWeight: 700, color: '#3a7abf', margin: '4px 0' }}>
          {animal.nameRu}
        </p>
        <p style={{ fontSize: '12px', color: '#aaa', margin: '6px 0 0' }}>
          Trace the words! / Обведи слова!
        </p>
      </div>
    </div>
  );
}
