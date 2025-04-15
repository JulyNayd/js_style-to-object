'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const getArrayFromString = sourceString.split(';');

  const formateString = getArrayFromString
    .filter((arrString) => arrString.trim().length > 0)
    .map((arrString) => {
      const [key, value] = arrString.split(':').map((part) => part.trim());

      return {
        [key]: value
          .split(', ')
          .map((v) => v.trim())
          .join(','),
      };
    });
  const outPutObj = Object.assign({}, ...formateString);

  return outPutObj;
}
module.exports = convertToObject;
