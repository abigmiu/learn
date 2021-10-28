import { Controller, Get, Post, Query, Body, Put, Param, Delete } from '@nestjs/common'

@Controller('cats')
export class CatsController {
    @Get('/cc')
    findAll(): string {
        return 'This action returns all cats'
    }

    @Post()
    create(): string {
        return 'This action adds a new cat'
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        return `This action returns a #${id} cat`
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `This action updates a ${id} cat`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes ${id} cat`
    }
}
