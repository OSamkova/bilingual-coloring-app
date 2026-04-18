interface AnimalSVGProps {
  nameEn: string;
  nameRu: string;
}

export function CatSVG({ nameEn, nameRu }: AnimalSVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g stroke="black" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round">
        {/* Head */}
        <circle cx="256" cy="200" r="120"/>

        {/* Ears */}
        <path d="M160 120 L120 40 L220 100 Z"/>
        <path d="M352 120 L392 40 L292 100 Z"/>

        {/* Eyes */}
        <circle cx="210" cy="190" r="12" fill="black"/>
        <circle cx="302" cy="190" r="12" fill="black"/>

        {/* Nose */}
        <circle cx="256" cy="220" r="6"/>

        {/* Mouth */}
        <path d="M256 226 Q240 240 226 226"/>
        <path d="M256 226 Q272 240 286 226"/>

        {/* Whiskers */}
        <path d="M140 210 L200 210"/>
        <path d="M140 230 L200 225"/>
        <path d="M372 210 L312 210"/>
        <path d="M372 230 L312 225"/>

        {/* Body */}
        <path d="M180 320 Q256 380 332 320"/>

        {/* Paws */}
        <path d="M210 320 Q210 350 190 350"/>
        <path d="M302 320 Q302 350 322 350"/>

        {/* Tail */}
        <path d="M332 320 Q420 340 360 400 Q300 420 260 380"/>
      </g>
    </svg>
  );
}

export function DogSVG({ nameEn, nameRu }: AnimalSVGProps) {
  return (
    <svg width="100%" viewBox="0 0 680 820" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fffdf8' }}>
      <rect x="20" y="20" width="640" height="780" rx="16" fill="none" stroke="#a0d080" strokeWidth="4" strokeDasharray="16,7"/>
      <text x="340" y="62" fontFamily="Arial" fontSize="24" fontWeight="700" fill="#222" textAnchor="middle">Color me! / Раскрась меня!</text>
      <text x="80" y="64" fontSize="22" fill="#a0d080">★</text>
      <text x="580" y="64" fontSize="22" fill="#a0d080">★</text>
      {/* Body */}
      <ellipse cx="340" cy="390" rx="120" ry="110" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Head */}
      <circle cx="340" cy="240" r="95" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Floppy ears */}
      <path d="M255,195 Q210,170 215,280 Q220,310 260,300 Q280,260 265,210 Z" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M425,195 Q470,170 465,280 Q460,310 420,300 Q400,260 415,210 Z" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Eyes */}
      <circle cx="308" cy="225" r="20" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="372" cy="225" r="20" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="308" cy="225" r="10" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="372" cy="225" r="10" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="315" cy="218" r="4" fill="#fff" stroke="none"/>
      <circle cx="379" cy="218" r="4" fill="#fff" stroke="none"/>
      {/* Nose */}
      <ellipse cx="340" cy="265" rx="22" ry="16" fill="none" stroke="#222" strokeWidth="4"/>
      <ellipse cx="332" cy="268" rx="5" ry="4" fill="none" stroke="#222" strokeWidth="2.5"/>
      <ellipse cx="348" cy="268" rx="5" ry="4" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Mouth */}
      <path d="M320,278 Q340,296 360,278" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Tail */}
      <path d="M460,420 Q540,380 530,320 Q520,280 480,290" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round"/>
      {/* Front legs */}
      <rect x="268" y="470" width="50" height="80" rx="20" fill="none" stroke="#222" strokeWidth="4"/>
      <rect x="362" y="470" width="50" height="80" rx="20" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Collar */}
      <path d="M252,330 Q340,360 428,330" fill="none" stroke="#222" strokeWidth="7"/>
      <circle cx="340" cy="348" r="10" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Belly spot */}
      <ellipse cx="340" cy="400" rx="50" ry="55" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Labels */}
      <text x="340" y="580" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#e05a2b" textAnchor="middle">{nameEn}</text>
      <text x="340" y="630" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#3a7abf" textAnchor="middle">{nameRu}</text>
      <text x="340" y="680" fontFamily="Arial" fontSize="15" fill="#888" textAnchor="middle">Trace the words! / Обведи слова!</text>
    </svg>
  );
}

export function ElephantSVG({ nameEn, nameRu }: AnimalSVGProps) {
  return (
    <svg width="100%" viewBox="0 0 680 820" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fffdf8' }}>
      <rect x="20" y="20" width="640" height="780" rx="16" fill="none" stroke="#b09de0" strokeWidth="4" strokeDasharray="16,7"/>
      <text x="340" y="62" fontFamily="Arial" fontSize="24" fontWeight="700" fill="#222" textAnchor="middle">Color me! / Раскрась меня!</text>
      <text x="80" y="64" fontSize="22" fill="#b09de0">★</text>
      <text x="580" y="64" fontSize="22" fill="#b09de0">★</text>
      {/* Body */}
      <ellipse cx="340" cy="520" rx="145" ry="115" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Head */}
      <circle cx="300" cy="290" r="105" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Big ear */}
      <ellipse cx="175" cy="300" rx="75" ry="95" fill="none" stroke="#222" strokeWidth="4"/>
      <ellipse cx="185" cy="300" rx="50" ry="68" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Trunk */}
      <path d="M245,350 Q190,380 185,430 Q180,470 210,480 Q235,485 240,460 Q245,435 260,420 Q275,405 270,380" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round"/>
      {/* Eye */}
      <circle cx="320" cy="260" r="18" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="320" cy="260" r="9" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="326" cy="254" r="3" fill="#fff" stroke="none"/>
      {/* Legs */}
      <rect x="210" y="600" width="65" height="90" rx="25" fill="none" stroke="#222" strokeWidth="4"/>
      <rect x="290" y="610" width="65" height="80" rx="25" fill="none" stroke="#222" strokeWidth="4"/>
      <rect x="375" y="610" width="65" height="80" rx="25" fill="none" stroke="#222" strokeWidth="4"/>
      <rect x="450" y="600" width="65" height="90" rx="25" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Tail */}
      <path d="M485,520 Q520,500 515,470 Q512,450 505,460" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round"/>
      {/* Labels */}
      <text x="340" y="720" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#e05a2b" textAnchor="middle">{nameEn}</text>
      <text x="340" y="766" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#3a7abf" textAnchor="middle">{nameRu}</text>
      <text x="340" y="800" fontFamily="Arial" fontSize="15" fill="#888" textAnchor="middle">Trace the words! / Обведи слова!</text>
    </svg>
  );
}

export function BunnySVG({ nameEn, nameRu }: AnimalSVGProps) {
  return (
    <svg width="100%" viewBox="0 0 680 820" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fffdf8' }}>
      <rect x="20" y="20" width="640" height="780" rx="16" fill="none" stroke="#f0a0c0" strokeWidth="4" strokeDasharray="16,7"/>
      <text x="340" y="62" fontFamily="Arial" fontSize="24" fontWeight="700" fill="#222" textAnchor="middle">Color me! / Раскрась меня!</text>
      <text x="80" y="64" fontSize="22" fill="#f0a0c0">★</text>
      <text x="580" y="64" fontSize="22" fill="#f0a0c0">★</text>
      {/* Body */}
      <ellipse cx="340" cy="530" rx="105" ry="125" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Head */}
      <circle cx="340" cy="320" r="90" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Tall ears */}
      <path d="M295,255 Q280,150 300,110 Q315,85 330,110 Q345,150 330,255 Z" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M350,255 Q360,150 375,110 Q388,85 402,110 Q415,150 395,255 Z" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M300,250 Q288,160 306,125 Q316,105 328,125 Q340,158 328,250 Z" fill="none" stroke="#222" strokeWidth="2.5"/>
      <path d="M356,250 Q364,160 378,125 Q388,105 399,125 Q408,156 392,250 Z" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Eyes */}
      <circle cx="312" cy="302" r="18" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="368" cy="302" r="18" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="312" cy="302" r="9" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="368" cy="302" r="9" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="318" cy="296" r="4" fill="#fff" stroke="none"/>
      <circle cx="374" cy="296" r="4" fill="#fff" stroke="none"/>
      {/* Nose */}
      <ellipse cx="340" cy="340" rx="10" ry="8" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Mouth */}
      <path d="M330,346 Q340,358 350,346" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Whiskers */}
      <line x1="260" y1="338" x2="328" y2="342" stroke="#222" strokeWidth="2.5"/>
      <line x1="258" y1="350" x2="328" y2="350" stroke="#222" strokeWidth="2.5"/>
      <line x1="352" y1="342" x2="420" y2="338" stroke="#222" strokeWidth="2.5"/>
      <line x1="352" y1="350" x2="422" y2="350" stroke="#222" strokeWidth="2.5"/>
      {/* Paws */}
      <ellipse cx="282" cy="635" rx="40" ry="28" fill="none" stroke="#222" strokeWidth="4"/>
      <ellipse cx="398" cy="635" rx="40" ry="28" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Belly */}
      <ellipse cx="340" cy="530" rx="52" ry="65" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Fluffy tail */}
      <circle cx="445" cy="570" r="28" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="445" cy="570" r="18" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Labels */}
      <text x="340" y="700" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#e05a2b" textAnchor="middle">{nameEn}</text>
      <text x="340" y="748" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#3a7abf" textAnchor="middle">{nameRu}</text>
      <text x="340" y="790" fontFamily="Arial" fontSize="15" fill="#888" textAnchor="middle">Trace the words! / Обведи слова!</text>
    </svg>
  );
}

export function LionSVG({ nameEn, nameRu }: AnimalSVGProps) {
  return (
    <svg width="100%" viewBox="0 0 680 820" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fffdf8' }}>
      <rect x="20" y="20" width="640" height="780" rx="16" fill="none" stroke="#f5c842" strokeWidth="4" strokeDasharray="16,7"/>
      <text x="340" y="62" fontFamily="Arial" fontSize="24" fontWeight="700" fill="#222" textAnchor="middle">Color me! / Раскрась меня!</text>
      <text x="80" y="64" fontSize="22" fill="#f5c842">★</text>
      <text x="580" y="64" fontSize="22" fill="#f5c842">★</text>
      {/* Mane */}
      <circle cx="340" cy="280" r="130" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Mane spikes */}
      <path d="M340,150 Q355,130 370,152" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M370,155 Q390,138 405,160" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M400,168 Q425,155 432,182" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M422,192 Q448,185 448,212" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M310,155 Q290,138 275,160" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M280,168 Q255,155 248,182" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M258,192 Q232,185 232,212" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Face */}
      <circle cx="340" cy="280" r="95" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Eyes */}
      <ellipse cx="308" cy="250" rx="20" ry="18" fill="none" stroke="#222" strokeWidth="4"/>
      <ellipse cx="372" cy="250" rx="20" ry="18" fill="none" stroke="#222" strokeWidth="4"/>
      <ellipse cx="308" cy="252" rx="10" ry="13" fill="none" stroke="#222" strokeWidth="2.5"/>
      <ellipse cx="372" cy="252" rx="10" ry="13" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="315" cy="244" r="4" fill="#fff" stroke="none"/>
      <circle cx="379" cy="244" r="4" fill="#fff" stroke="none"/>
      {/* Nose */}
      <path d="M322,285 Q340,278 358,285 Q352,300 340,302 Q328,300 322,285 Z" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Mouth */}
      <path d="M322,302 Q315,312 308,308" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M358,302 Q365,312 372,308" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M322,302 Q340,318 358,302" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Cheek dots */}
      <circle cx="290" cy="292" r="3" fill="#222"/>
      <circle cx="300" cy="288" r="3" fill="#222"/>
      <circle cx="290" cy="302" r="3" fill="#222"/>
      <circle cx="390" cy="292" r="3" fill="#222"/>
      <circle cx="380" cy="288" r="3" fill="#222"/>
      <circle cx="390" cy="302" r="3" fill="#222"/>
      {/* Ears */}
      <circle cx="268" cy="190" r="28" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="268" cy="190" r="16" fill="none" stroke="#222" strokeWidth="2.5"/>
      <circle cx="412" cy="190" r="28" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="412" cy="190" r="16" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Body */}
      <ellipse cx="340" cy="560" rx="110" ry="100" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Front paws */}
      <rect x="265" y="620" width="55" height="75" rx="22" fill="none" stroke="#222" strokeWidth="4"/>
      <rect x="360" y="620" width="55" height="75" rx="22" fill="none" stroke="#222" strokeWidth="4"/>
      {/* Tail with tuft */}
      <path d="M450,530 Q510,500 515,450 Q518,420 500,420" fill="none" stroke="#222" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="500" cy="412" r="20" fill="none" stroke="#222" strokeWidth="4"/>
      <circle cx="500" cy="412" r="12" fill="none" stroke="#222" strokeWidth="2.5"/>
      {/* Labels */}
      <text x="340" y="728" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#e05a2b" textAnchor="middle">{nameEn}</text>
      <text x="340" y="774" fontFamily="Arial Rounded MT Bold, Arial" fontSize="38" fontWeight="700" fill="#3a7abf" textAnchor="middle">{nameRu}</text>
      <text x="340" y="806" fontFamily="Arial" fontSize="15" fill="#888" textAnchor="middle">Trace the words! / Обведи слова!</text>
    </svg>
  );
}
