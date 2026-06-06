const resumeLines = [
  "Shivansh Shukla",
  "Android Developer | Software Engineer",
  "Kotlin, Jetpack Compose, Firebase, TypeScript, Three.js",
  "Selected work: FinSetu, MY JUET, MemeLang, Recipe App",
  "Contact: shivanshs673@gmail.com | 7987190176",
];

function escapeSvgText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function createResumeSvg() {
  const content = resumeLines
    .map((line, index) => `<text x="72" y="${168 + index * 54}" fill="#e2e8f0" font-family="Inter, Arial, sans-serif" font-size="28" letter-spacing="0.02em">${escapeSvgText(line)}</text>`)
    .join("");

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1240" height="1754" viewBox="0 0 1240 1754">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#020617" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="1240" height="1754" rx="52" fill="url(#bg)" />
      <rect x="52" y="52" width="1136" height="1650" rx="38" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
      <rect x="72" y="96" width="220" height="8" rx="4" fill="url(#accent)" />
      <text x="72" y="148" fill="#ffffff" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="56" font-weight="700">Shivansh Shukla</text>
      <text x="72" y="214" fill="#7dd3fc" font-family="Inter, Arial, sans-serif" font-size="30" letter-spacing="0.18em">ANDROID DEVELOPER · SOFTWARE ENGINEER</text>
      ${content}
      <rect x="72" y="1510" width="1096" height="140" rx="28" fill="rgba(8,15,32,0.8)" stroke="rgba(255,255,255,0.08)" />
      <text x="100" y="1570" fill="#e2e8f0" font-family="Inter, Arial, sans-serif" font-size="24">Open to internships, full-time engineering roles, and product-focused collaborations.</text>
      <text x="100" y="1620" fill="#94a3b8" font-family="Inter, Arial, sans-serif" font-size="20">Portfolio: shivansh-shukla.vercel.app</text>
    </svg>
  `.trim();
}

export function downloadResume(filename = "Shivansh_Shukla_Resume.svg") {
  const blob = new Blob([createResumeSvg()], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
