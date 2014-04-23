module.exports = function(str) {
  if (str) {
    return str.replace(/[^\w]/g, ' ').trim().replace(/\s+/g, '-').toLowerCase();
  }

  return str;
};