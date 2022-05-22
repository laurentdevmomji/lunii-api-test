import faker from 'faker'
import { generateShortURL } from '../../src/helpers/app.helpers';
// import { ShortUrl } from '../../src/models';


export function generateShortUrlData(overide = {}) {
  return {
    id: faker.datatype.number(),
    originalUrl: faker.internet.url(),
    shortUrl: generateShortURL(faker.internet.url(), 0, 10, Date.now().toString()),
    nbClicks: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide
  }
}

export function generateShortUrlsData(n = 1, overide = {}) {
  return Array.from({
    length: n
  }, (_, i) => {
    return generateShortUrlData(overide)
  });
}

export function generateShortUrlPayload() {
  return {
    originalUrl: faker.internet.url(),
    shortUrl: '',
    nbClicks: 0
  }
}