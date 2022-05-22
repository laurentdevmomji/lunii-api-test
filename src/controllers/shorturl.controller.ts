import { Get, Route, Tags, Post, Body, Path, Patch } from 'tsoa';
import { ShortUrl } from '../models';
import {
  createShortUrl,
  getShortUrls,
  IShortUrlPayload,
  getShortUrl,
  getShortUrlAnalytics,
  getShortUrlByShortUrl,
  patchShortUrl,
} from '../repositories/shorturl.repository';

@Route('shorturls')
@Tags('ShortUrl')
export default class ShortUrlController {
  @Get('/')
  public async getShortUrls(): Promise<Array<ShortUrl>> {
    return getShortUrls();
  }

  @Post('/')
  public async createShortUrl(@Body() body: IShortUrlPayload): Promise<ShortUrl> {
    return createShortUrl(body);
  }

  @Get('/:id')
  public async getShortUrl(@Path() id: number): Promise<ShortUrl | null> {
    return getShortUrl(Number(id));
  }

  // @Get('/:shortUrl')
  public async getShortUrlByShortUrl(@Path() shortUrl: string): Promise<ShortUrl | null> {
    return getShortUrlByShortUrl(shortUrl);
  }

  @Patch('/:id')
  public async patchShortUrl(@Path() id: number, @Body() body: IShortUrlPayload): Promise<ShortUrl | null> {
    return patchShortUrl(id, body);
  }

  // @Get('/:analytics')
  public async getShortUrlAnalytics(): Promise<Array<ShortUrl>> {
    return getShortUrlAnalytics();
  }
  
}
