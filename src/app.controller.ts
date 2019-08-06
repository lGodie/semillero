import { Controller, Get, Req, Post  } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id/:name')
  getHello2(@Req() request : Request): object {
    const data = request.params;
    const id = data.id;
    const name = data.name;
    return {id,name};
  }

  @Get('/:id/:name')
  getSaludo(@Req() request : Request): string {
    const data = request.params;
    const id = data.id;
    const name = data.name;
    return name;
  }

  @Post('/sumar/:num1/:num2')
  sumarNumeros(@Req() request : Request): number {

    const data = request.params;
    const num1 = data.num1;
    const num2 = data.num2;

    return  parseInt(num1) + parseInt(num2) 
  }

}
