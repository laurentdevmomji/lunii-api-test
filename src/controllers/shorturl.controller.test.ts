import ShortUrlController from './shorturl.controller'
import * as ShortUrlRepository from '../repositories/shorturl.repository'
import {generateShortUrlsData, generateShortUrlPayload, generateShortUrlData} from '../../test/utils/generate'

afterEach(() => {
  jest.resetAllMocks()
})

describe("ShortUrlController", () => {
  describe("getShortUrls", () => {
    test("should return empty array", async () => {
      const spy = jest.spyOn(ShortUrlRepository, 'getShortUrls').mockResolvedValueOnce([])
      const controller = new ShortUrlController();
      const shortUrls = await controller.getShortUrls();
      expect(shortUrls).toEqual([])
      expect(spy).toHaveBeenCalledWith()
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return shortUrls list", async () => {
      const shortUrlsData = generateShortUrlsData(2)
      const spy = jest.spyOn(ShortUrlRepository, 'getShortUrls').mockResolvedValueOnce(shortUrlsData)
      const controller = new ShortUrlController();
      const shortUrls = await controller.getShortUrls();
      expect(shortUrls).toEqual(shortUrlsData)
      expect(spy).toHaveBeenCalledWith()
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("createShortUrl", () => {
    test("should add shortUrl to the database", async () => {
      
      const payload = generateShortUrlPayload()
      const shortUrlData = generateShortUrlData(payload)
      const spy = jest.spyOn(ShortUrlRepository, 'createShortUrl').mockResolvedValueOnce(shortUrlData)
      const controller = new ShortUrlController();
      const shortUrl = await controller.createShortUrl(payload);
      expect(shortUrl).toMatchObject(payload)
      expect(shortUrl).toEqual(shortUrlData)
      expect(spy).toHaveBeenCalledWith(payload)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("getShortUrl", () => {
    test("should return shortUrl from the database", async () => {
      const id = 1
      const shortUrlData = generateShortUrlData({id})
      const spy = jest.spyOn(ShortUrlRepository, 'getShortUrl').mockResolvedValueOnce(shortUrlData)
      const controller = new ShortUrlController();
      const shortUrl = await controller.getShortUrl(id.toString());
      expect(shortUrl).toEqual(shortUrlData)
      expect(shortUrl?.id).toBe(id)
      expect(spy).toHaveBeenCalledWith(id)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return null if shortUrl not found", async () => {
      const id = 1
      const spy = jest.spyOn(ShortUrlRepository, 'getShortUrl').mockResolvedValueOnce(null)
      const controller = new ShortUrlController();
      const shortUrl = await controller.getShortUrl(id.toString());
      expect(shortUrl).toBeNull()
      expect(spy).toHaveBeenCalledWith(id)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})