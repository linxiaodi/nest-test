import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';

import { Cat } from './cat.entity';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(
    @Inject(CatService) private readonly catService: CatService,
  ) { }
}
