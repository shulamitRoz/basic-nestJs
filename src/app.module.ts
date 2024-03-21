// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars/cars.controller';
import { DatabaseModule } from './data-base/database.module';
import {Car, CarSchema } from './data-base/car.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])
  ],
  controllers: [CarsController],
})
export class AppModule {}
