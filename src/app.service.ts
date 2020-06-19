import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const ret = 'hello world'
    const others = 'Michael'
    const name = 'lwk'
    return  `${ret} ${name} ${others}`;
  }
}
