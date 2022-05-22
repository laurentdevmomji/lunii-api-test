import crypto from 'crypto';

/**
 * Generate Short URL
 * @param {String} longURL
 * @param {String} startIndex
 * @param {Number} endIndex
 * @returns {String}
 */
const generateShortURL = (longURL: string, startIndex = 0, endIndex = 10): string => {
    const hash = crypto.createHash('md5').update(longURL).digest('base64');
    return hash.substring(startIndex, endIndex + 1);
};

export {
    generateShortURL
}