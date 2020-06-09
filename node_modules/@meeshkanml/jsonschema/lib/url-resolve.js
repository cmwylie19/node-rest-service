const urlJoin = require("./url-join");
const urlParse = require("url-parse");

function isAbsolute(url) {
  return url.indexOf("://") > 0;
}

module.exports = function(first, second) {
  if (typeof second === "undefined") {
    return first;
  }

  // Reverse engineering how url.resolve is supposed to work, this is brutal
  if (isAbsolute(first)) {
    if (isAbsolute(second)) {
      return second; // Second is also absolute
    }
    // First absolute, second not
    const joined = new urlParse(second, first).href;
    return joined;
  }
  if (isAbsolute(second)) {
    return second; // Second is absolute
  }
  // Neither absolute, combine somehow
  if (first.indexOf("/") === 0) {
    // HUGE HACK :D
    var fakeAbsoluteUrl = "https://example.com" + first;
    var joined = new urlParse(second, fakeAbsoluteUrl).href;
    return joined.replace(/^https:\/\/example.com/, "");
  }

  return first + second;
};
