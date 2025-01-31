import { Injectable } from '@nestjs/common';
import { ISuperhero } from './superhero.interface';

@Injectable()
export class SuperheroesService {
  private superheroes: ISuperhero[] = [];
  private nextId = 1;

  addSuperhero(
    name: string,
    superpower: string,
    humilityScore: number,
  ): ISuperhero[] {
    const newSuperhero: ISuperhero = {
      id: this.nextId++,
      name,
      superpower,
      humilityScore,
    };
    this.superheroes.push(newSuperhero);
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }

  getAllSuperheroes(): ISuperhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
