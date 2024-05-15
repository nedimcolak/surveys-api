import { Injectable } from '@nestjs/common';
import QRCode from 'qrcode';

@Injectable()
export class QrcodeService {
  async getQRCodeDataURL(data: string) {
    try {
      return await QRCode.toDataURL(data);
    } catch (e) {
      throw e;
    }
  }
}
