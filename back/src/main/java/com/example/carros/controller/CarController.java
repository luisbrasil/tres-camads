package com.example.carros.controller;

import com.example.carros.car.Car;
import com.example.carros.car.CarReponseDTO;
import com.example.carros.car.CarRepository;
import com.example.carros.car.CarRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("car")
public class CarController {
    @Autowired
    private CarRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveCar(@RequestBody CarRequestDTO data){
        Car carData = new Car(data);
        repository.save(carData);
        return;

    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CarReponseDTO> getAll(){

        List<CarReponseDTO> carList = repository.findAll().stream().map(CarReponseDTO::new).toList();
        return carList;
    }


}
