import { Module } from '@nestjs/common';

import { SuperheroesModule } from './superheroes/superheroes.module';

@Module({
  imports: [SuperheroesModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
