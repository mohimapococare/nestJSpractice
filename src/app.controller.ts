/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/pokemon')
export class AppController {
    constructor(
        private readonly appService: AppService,
    ) {}

    @Post('/create')
    async createIndexAndInsert(@Body() documents: any[]) {
        try{
          return await this.appService.bulkInsert(documents);
        }catch(err){
          console.log(err)
        }
    }

    @Get('search')
    async searchPokemonAbilities(@Query('q') q: string) {
        const results = await this.appService.searchIndex(q);
        return results;
    }
}