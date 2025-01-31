import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { ISuperhero } from './superhero.interface';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humilityScore') humilityScore: number,
  ): ISuperhero[] {
    if (!name || !superpower || !humilityScore) {
      throw new BadRequestException('All fields are required.');
    }
    if (humilityScore < 1 || humilityScore > 10) {
      throw new BadRequestException('Humility score must be between 1 and 10.');
    }
    return this.superheroesService.addSuperhero(
      name,
      superpower,
      humilityScore,
    );
  }

  @Get()
  getAllSuperheroes(): ISuperhero[] {
    return this.superheroesService.getAllSuperheroes();
  }
}
