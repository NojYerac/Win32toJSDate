"use strict";
const winEpoch = new Date("01-01-1601 UTC").getTime();

module.exports = {
  /**
   * Convert a Win32 FILETIME to a JavaScript Date object
   * @param  {number} winDate number of 100 nanosecond intervals since the
   *                          windows epoch (1 January 1601 00:00:00 UTC)
   * @return {date}           the Date object representing the same timeout
   *                          (rounded to miliseconds)
   */
  toJS(winDate) {
    return new Date(winDate / 10000 + winEpoch);
  },
  /**
   * Convert a JavaScript Date object to a Win32 FILETIME
   * @param  {varies} jsDate anything which converts to a JS Date object
   * @return {number}        number of 100 nanosecond intervals since the
   *                         windows epoch (1 January 1601 00:00:00 UTC)
   */
  toWin(jsDate) {
    return ((new Date(jsDate)).getTime() - winEpoch) * 10000;
  }
};
