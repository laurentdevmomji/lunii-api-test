import { getRepository } from 'typeorm';

import { ShortUrl } from '../models';
import HttpError from '../utils/HttpError'

import { validateOriginalUrl } from '../validators/validators'
import {generateShortURL} from '../helpers/app.helpers'

export interface IShortUrlPayload {
  originalUrl: string;
  shortUrl: string;
}

export const getShortUrls = async (): Promise<Array<ShortUrl>> => {
  const repository = getRepository(ShortUrl);
  return repository.find();
};

export const createShortUrl = async (payload: IShortUrlPayload): Promise<ShortUrl> => {
  const repository = getRepository(ShortUrl);
  const shortUrl = new ShortUrl();

  // -- validation
  if (!validateOriginalUrl(payload.originalUrl)){
    throw new HttpError(400, `${payload.originalUrl} is not a valid url !`)
  }

  // -- create shortUrl
  // TODO : add 'salt' (concat next available id with originalUrl)
  payload.shortUrl = generateShortURL(payload.originalUrl)

  return repository.save({
    ...shortUrl,
    ...payload,
  });
};

export const getShortUrl = async (id: number): Promise<ShortUrl | null> => {
  const repository = getRepository(ShortUrl);
  const shortUrl = await repository.findOne({ id: id });
  if (!shortUrl){
    return null;
  } 
  return shortUrl;
};

export const getShortUrlAnalytics = async (): Promise<Array<ShortUrl>> => {
  const repository = getRepository(ShortUrl);
  return repository.find();
};
