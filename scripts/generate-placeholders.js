const fs = require('fs');
const path = require('path');

const colors = [
  ['#5c3a21', '#f6c46a'],
  ['#7a5230', '#8da399'],
  ['#2a1d17', '#e8a87c'],
  ['#5e7569', '#f4ecd8'],
];

const gColors = [
  ['#8da399', '#f4ecd8'],
  ['#e8a87c', '#5c3a21'],
  ['#f6c46a', '#7a5230'],
  ['#d8a0a0', '#2a1d17'],
  ['#a89b8c', '#fff8e7'],
  ['#5e7569', '#f6c46a'],
];

function writeSvg(dir, name, width, height, bg, fg, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="${width}" height="${height}" fill="${bg}"/>
    <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) * 0.22}" fill="${fg}" opacity="0.2"/>
    <text x="${width / 2}" y="${height / 2 + 10}" font-family="serif" font-size="28" fill="${fg}" text-anchor="middle">${label}</text>
  </svg>`;
  fs.writeFileSync(path.join(dir, name), svg);
}

const memDir = path.join(__dirname, '..', 'public', 'images', 'memories');
const galDir = path.join(__dirname, '..', 'public', 'images', 'gallery');

fs.mkdirSync(memDir, { recursive: true });
fs.mkdirSync(galDir, { recursive: true });

for (let i = 0; i < 4; i++) {
  const [bg, fg] = colors[i];
  writeSvg(memDir, `0${i + 1}.svg`, 400, 300, bg, fg, `Memory ${i + 1}`);
}

for (let i = 0; i < 6; i++) {
  const [bg, fg] = gColors[i];
  writeSvg(galDir, `0${i + 1}.svg`, 400, 400, bg, fg, `Photo ${i + 1}`);
}

console.log('SVG placeholders created');
