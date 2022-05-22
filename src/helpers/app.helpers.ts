import crypto from 'crypto';

/**
 * Generate Short URL
 * @param {String} longURL
 * @param {String} startIndex
 * @param {Number} endIndex
 * @param {String} salt
 * @returns {String}
 */
const generateShortURL = (longURL: string, startIndex = 0, endIndex = 10, salt = ''): string => {
    let hash = crypto.createHash('md5').update(`${salt}${longURL}`).digest('base64');

    // remove all "/"
    const searchRegExp = /\//g;
    const replaceWith = '';

    hash = hash.replace(searchRegExp, replaceWith);

    return hash.substring(startIndex, endIndex + 1);
};

export {
    generateShortURL
}