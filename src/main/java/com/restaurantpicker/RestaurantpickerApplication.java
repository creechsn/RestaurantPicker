package com.restaurantpicker;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantpickerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantpickerApplication.class, args);
	}
	
	
	public static void FoodTypes(String[] args){
		
		List<String> FoodTypesList = Arrays.asList("American","Korean","Mexican","Japanese","Chinese","Italian","Indian");

		
	}

}
