import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  HttpException,
  HttpStatus,
  UseFilters
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from './forbidden.exception';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { JoiValidationPipe } from 'src/common/pipes/validation.pipe';
import { UsePipes } from '@nestjs/common'
import { ValidtionPipe } from 'src/common/pipes/validate.pipe'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Post('pipe')
  @UsePipes(new ValidtionPipe())
  async createPipe(@Body() createDto: CreateCatDto) {
      this.catsService.create(createDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('error')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('customError')
  async customError() {
    //   throw new HttpException({
    //       status: '134',
    //       message: 'this is a custom message'
    //   }, HttpStatus.FORBIDDEN)
    throw new ForbiddenException()
  }
}
