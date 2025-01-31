import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should return an array of superheroes sorted by humility score', () => {
    service.addSuperhero('Hero1', 'Power1', 5);
    service.addSuperhero('Hero2', 'Power2', 10);
    const result = controller.getAllSuperheroes();
    expect(result[0].humilityScore).toBe(10);
  });
});
