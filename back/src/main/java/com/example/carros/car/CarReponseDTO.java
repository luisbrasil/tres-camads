package com.example.carros.car;

public record CarReponseDTO(Long id, String title,String image,Integer price) {
    public CarReponseDTO(Car car){
        this(car.getId(), car.getTitle(), car.getImage(),car.getPrice());
    }
}
