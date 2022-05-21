/**
 * RFC 7230 url sheme
 */
const RFC7230_URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

/**
 * Validate originalUrl 
 * @param {String} firstName
 * @returns {Boolean}
 */
 const validateOriginalUrl = (originalUrl: string): boolean => {
    // console.log('[DEBUG] (validateOriginalUrl)', originalUrl);

    return RFC7230_URL_REGEX.test(originalUrl);
}

export {
    validateOriginalUrl
}