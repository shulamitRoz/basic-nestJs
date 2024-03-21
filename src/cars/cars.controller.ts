// src/vehicle/vehicle.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from '../data-base/car.schema';

@Controller('cars')
export class CarsController {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  @Post()
  async create(@Body() car: Car): Promise<Car> {
    const createdCar = new this.carModel(car);
    return createdCar.save();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedCar: Car): Promise<Car> {
    return this.carModel.findOneAndUpdate({ _id: id }, updatedCar, { new: true }).exec();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Car> {
    return this.carModel.findOneAndDelete({ _id: id }).exec();
  }
  
}
