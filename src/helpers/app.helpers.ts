import crypto from 'crypto';

/**
 * Generate Short URL
 * @param {String} longURL
 * @param {String} startIndex
 * @param {Number} endIndex
 * @returns {String}
 */
const generateShortURL = (longURL: string, startIndex: number, endIndex: number): string => {
    const hash = crypto.createHash('md5').update(longURL).digest('base64');
    return hash.substring(startIndex, endIndex + 1);
};

export {
    generateShortURL
}