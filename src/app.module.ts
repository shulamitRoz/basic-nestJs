import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { Car } from './models/car.model'; // Import the Car entity if needed

@Module({
  imports: [],
  controllers: [ CarsController],
  providers: [],
})
export class AppModule {}
