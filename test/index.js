"use strict";
const win32tojs = require("..");

describe("The library", function() {
  it("should instanciate", function() {
    win32tojs.constructor.name.should.eql("Converter")
  });

  it("should expose the methods", function() {
    win32tojs.toJS.should.be.instanceof(Function);
    win32tojs.toWin.should.be.instanceof(Function);
  });

  it("should convert win32 ts to JS Date object", function() {
    const jsTime = win32tojs.toJS(131200683015487129);
    jsTime.should.be.instanceof(Date);
    jsTime.getTime().should.eql(1475594701548);
  });

  it("should convert JS Date object to win32 ts", function() {
    const winTime = win32tojs.toWin(new Date(1475594701548));
    winTime.should.eql(131200683015480000);
  });
});
