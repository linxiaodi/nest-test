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
    const res = await this.catService.createCat(createCatDto)
    return { ok: 1, message: '创建成功！', data: res }
  }

  @Get(':id')
  async getCat(@Param() id: number) {
    const res = await this.catService.findOneCat(id);
    return { ok: 1, data: res, message: '' };
  }

  @Delete(':id')
  async deleteCat(@Param() id: number) {
    const res = await this.catService.deleteCat(id);
    return { ok: 1, data: res, message: '删除成功' };
  }

  @Post(':id')
  async updateCat(@Param() id: number, @Body() cat: CreateCatDto) {
    const res = await this.catService.updateCat(id, cat);
    return { ok: 1, data: res, message: '更新成功' }
  }
}
