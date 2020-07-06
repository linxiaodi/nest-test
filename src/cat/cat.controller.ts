import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';

import { Cat } from './cat.entity';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/createCat.dto'

@Controller('cat')
export class CatController {
  constructor(
    @Inject(CatService) private readonly catService: CatService,
  ) {
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    await this.catService.createCat(createCatDto)
    return { ok: 1, message: '创建成功！' }
  }
}
