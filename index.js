"use strict";
const winEpoc = new Date("01-01-1601 UTC").getTime();

module.exports = new Converter();
function Converter() {
  return Object.assign(this, {
    winEpoc,
    toJS,
    toWin,
  });
}

function toJS(winDate) {
  return new Date(winDate / 10000 + this.winEpoc);
}

function toWin(jsDate) {
  return ((new Date(jsDate)).getTime() - this.winEpoc) * 10000;
}
