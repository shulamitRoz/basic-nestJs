// src/vehicle/vehicle.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Car } from '../models/car.model';

@Controller('cars')
export class CarsController {
    private cars: Car[] = [
        { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, color: 'Blue' },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019, color: 'Red' },
        { id: 3, make: 'Ford', model: 'Fusion', year: 2021, color: 'White' },
    ];

    @Get()
    findAll(): Car[] {
        return this.cars;
    }

    @Get(':id')
    findOne(@Param('id') id: number): Car {
        return this.cars.find(car => car.id === id);
    }

    @Post()
    create(@Body() car: Car): Car {
        this.cars.push(car);
        return car;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatedCar: Car): Car {
        const index = this.cars.findIndex(car => car.id === id);
        if (index !== -1) {
            this.cars[index] = updatedCar;
            return updatedCar;
        }
        return null;
    }

    @Delete(':id')
    delete(@Param('id') id: number): Car {
        const index = this.cars.findIndex(car => car.id === id);
        if (index !== -1) {
            const deletedCar = this.cars[index];
            this.cars.splice(index, 1);
            return deletedCar;
        }
        return null;
    }
}
