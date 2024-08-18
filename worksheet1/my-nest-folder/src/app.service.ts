import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is Q.10 of worksheet 1 showing the creation and running of the \'NEST\' application';
  }
}
