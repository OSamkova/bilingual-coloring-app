'use client';

import { animals } from '@/data/animals';
import { CatSVG, DogSVG, ElephantSVG, BunnySVG, LionSVG } from '@/components/AnimalSVGs';
import { useDownloadPDF } from '@/hooks/useDownloadPDF';

const svgMap: Record<string, React.ComponentType<{ nameEn: string; nameRu: string }>> = {
  cat: CatSVG,
  dog: DogSVG,
  elephant: ElephantSVG,
  bunny: BunnySVG,
  lion: LionSVG,
};

export default function Home() {
  const { downloadPDF, isGenerating } = useDownloadPDF();

  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-yellow-100 to-amber-50">
        <div className="text-6xl mb-4">🎨</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Bilingual Coloring Pack
        </h1>
        <p className="text-xl text-gray-600 mb-2">English & Russian / Английский и Русский</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Fun coloring pages for preschoolers with animal names in both English and Russian. Print and color!
        </p>
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Generating PDF...
            </span>
          ) : (
            '⬇️ Download Free PDF Pack'
          )}
        </button>
        <p className="text-sm text-gray-400 mt-3">5 animals • Free to print • Preschool ages 4–5</p>
      </section>

      {/* Preview */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
          Preview the Pack / Предварительный просмотр
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => {
            const SVGComponent = svgMap[animal.id];
            return (
              <div
                key={animal.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div id={`animal-page-${animal.id}`} className="w-full">
                  <SVGComponent nameEn={animal.nameEn} nameRu={animal.nameRu} />
                </div>
                <div className="p-3 text-center border-t border-gray-100">
                  <span className="text-orange-500 font-semibold">{animal.nameEn}</span>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-blue-500 font-semibold">{animal.nameRu}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Download CTA */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Ready to print?</h2>
        <p className="text-gray-500 mb-6">Download all 5 pages as a single PDF — free!</p>
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
        >
          {isGenerating ? '⏳ Generating...' : '⬇️ Download PDF Pack'}
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm border-t border-amber-100">
        <p>Made with ❤️ for bilingual families 🇺🇸🇷🇺</p>
      </footer>
    </main>
  );
}
