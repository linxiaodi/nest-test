import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat) private readonly catRepo: Repository<Cat>  // 使用泛型注入对应类型的存储库实例
  ) { }

  async createCat(cat: Cat): Promise<Cat> {
    delete cat.id;
    return this.catRepo.save(this.catRepo.create(cat));
  }
}

