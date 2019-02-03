const path = require('path');
const pkg = require(path.resolve(__dirname, '../package.json'));
const fs = require('fs');

function increment(v) {
  const pieces = v.split('.');
  pieces[2] = String(Number(pieces[2]) + 1)
  return pieces.join('.');
}

pkg.version = increment(pkg.version);

fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(pkg, null, 2));
