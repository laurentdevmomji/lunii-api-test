import * as ShortUrlRepository from './shorturl.repository'
import {getRepository} from 'typeorm'
import { mocked } from 'jest-mock'
import {generateShortUrlsData, generateShortUrlPayload, generateShortUrlData} from '../../test/utils/generate'

jest.mock('typeorm');

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}))
beforeEach(() => {
  mockedGetRepo.find.mockClear()
  mockedGetRepo.findOne.mockClear()
  mockedGetRepo.save.mockClear()
})

describe("ShortUrlRepository", () => {
  describe("getShortUrls", () => {
    test("should return empty array", async () => {
      mockedGetRepo.find.mockResolvedValue([])
      const shortUrls = await ShortUrlRepository.getShortUrls();
      expect(shortUrls).toEqual([])
      expect(mockedGetRepo.find).toHaveBeenCalledWith()
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
    })

    test("should return shortUrls list", async () => {
      const shortUrlsData = generateShortUrlsData(2)
      mockedGetRepo.find.mockResolvedValue(shortUrlsData)
      const shortUrls = await ShortUrlRepository.getShortUrls();
      expect(shortUrls).toEqual(shortUrlsData)
      expect(mockedGetRepo.find).toHaveBeenCalledWith()
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
    })
  })

  describe("createShortUrl", () => {
    test("should add shortUrl to the database", async () => {
      const payload = generateShortUrlPayload();
      const shortUrlData = generateShortUrlData(payload);

      mockedGetRepo.save.mockResolvedValue(shortUrlData)
      const shortUrl = await ShortUrlRepository.createShortUrl(payload);
      shortUrl.shortUrl = payload.shortUrl;

      expect(shortUrl).toMatchObject(payload)
      expect(shortUrl).toEqual(shortUrlData)
      expect(mockedGetRepo.save).toHaveBeenCalledWith(payload)
      expect(mockedGetRepo.save).toHaveBeenCalledTimes(1)
    })
  })

  describe("getShortUrl", () => {
    test("should return shortUrl from the database", async () => {
      const id = 1
      const shortUrlData = generateShortUrlData({id})
      mockedGetRepo.findOne.mockResolvedValue(shortUrlData)
      const shortUrl = await ShortUrlRepository.getShortUrl(id);
      expect(shortUrl).toEqual(shortUrlData)
      expect(shortUrl?.id).toBe(id)
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({id})
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
    })

    test("should return null if shortUrl not found", async () => {
      const id = 1
      mockedGetRepo.findOne.mockResolvedValue(null)
      const shortUrl = await ShortUrlRepository.getShortUrl(id);
      expect(shortUrl).toBeNull()
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({id})
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
    })
  })

  describe("getShortUrlByShortUrl", () => {
    test("should return shortUrl from the database", async () => {
      const id = 1
      const shortUrlData = generateShortUrlData({id})
      // console.log('shortUrlData', shortUrlData)
      mockedGetRepo.findOne.mockResolvedValue(shortUrlData)
      const shortUrl = await ShortUrlRepository.getShortUrlByShortUrl(shortUrlData.shortUrl);
      // console.log('shortUrl', shortUrl)
      expect(shortUrl).toEqual(shortUrlData)
      expect(shortUrl?.id).toBe(id)
      // expect(mockedGetRepo.findOne).toHaveBeenCalledWith({shortUrl})
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
    })

    test("should return null if shortUrl not found", async () => {
      // const id = 1
      mockedGetRepo.findOne.mockResolvedValue(null)
      const shortUrl = await ShortUrlRepository.getShortUrlByShortUrl('');
      expect(shortUrl).toBeNull()
      // expect(mockedGetRepo.findOne).toHaveBeenCalledWith({id})
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
    })
  })

  describe("patchShortUrl", () => {
    test("should patch shortUrl to the database", async () => {
      
      // TODO

      // let shortUrlData;

      // const id = 1
      // shortUrlData = generateShortUrlData({id})
      // mockedGetRepo.findOne.mockResolvedValue(shortUrlData)

      // const shortUrl = await ShortUrlRepository.getShortUrl(id);
      // console.log('shortUrl/shortUrlData', shortUrl, shortUrlData)

      // const payload = generateShortUrlPayload();
      // shortUrlData = generateShortUrlData(payload);
      // console.log('shortUrlData', shortUrlData)

      // mockedGetRepo.save.mockResolvedValue(shortUrlData)
      // const patchedShortUrl = await ShortUrlRepository.patchShortUrl(shortUrl.id, payload);
      // // shortUrl.shortUrl = payload.shortUrl;
      // console.log('patchedShortUrl', patchedShortUrl)

      // expect(patchedShortUrl).toMatchObject(payload)
      // expect(patchedShortUrl).toEqual(shortUrlData)
      // expect(mockedGetRepo.save).toHaveBeenCalledWith(payload)
      // expect(mockedGetRepo.save).toHaveBeenCalledTimes(1)
    })
  })

  describe("nbClicksIncrement", () => {
    // TODO
  })

  describe("redirectToOriginalUrl", () => {
    // TODO
  })

})