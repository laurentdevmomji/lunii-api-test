import { Get, Route, Tags, Post as PostMethod, Body, Path } from 'tsoa';
import { ShortUrl } from '../models';
import {
  createShortUrl,
  getShortUrls,
  IShortUrlPayload,
  getShortUrl,
} from '../repositories/shorturl.repository';

@Route('shorturls')
@Tags('ShortUrl')
export default class ShortUrlController {
  @Get('/')
  public async getShortUrls(): Promise<Array<ShortUrl>> {
    return getShortUrls();
  }

  @PostMethod('/')
  public async createShortUrl(@Body() body: IShortUrlPayload): Promise<ShortUrl> {
    return createShortUrl(body);
  }

  @Get('/:id')
  public async getShortUrl(@Path() id: string): Promise<ShortUrl | null> {
    return getShortUrl(Number(id));
  }
}
