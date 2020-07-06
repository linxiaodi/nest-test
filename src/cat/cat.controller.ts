import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Cat } from './cat.entity'
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(@Inject(CatService) private readonly catService: CatService) {
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return { code: 200, message: '查询成功', data: id };
  }

  @Post()
  async createCat(@Body() cat: Cat) {
    await this.catService.createCat(cat);
    return { code: 200, message: '创建成功' };
  }
}
