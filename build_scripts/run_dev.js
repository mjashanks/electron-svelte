const child_process = require('child_process');
const fs = require('fs');

const devPath = ".ipfs-develop";

let isWin = /^win/.test(process.platform);

let shell = (cmd, callback) => {
  let child = child_process.exec(cmd, callback);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
  process.stdin.pipe(child.stdin);
}

shell (`npm run start-dev-server`);
shell (`npm run start-main-dev`);






