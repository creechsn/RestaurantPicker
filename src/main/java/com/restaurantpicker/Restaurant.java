package com.restaurantpicker;
import java.util.ArrayList;
import java.util.Collections;


public class Restaurant implements IRestaurant {

	public String name;
	public String URL;
	public String description;
	
	@Override
	public ArrayList<Restaurant> selectRestaurant(ArrayList<Restaurant> restaurants) {
		Collections.shuffle(restaurants);
		return restaurants;
		
	}


	@Override
	public void getDescription() {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void getImage() {
		// TODO Auto-generated method stub
		
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getURL() {
		return URL;
	}


	public void setURL(String uRL) {
		URL = uRL;
	}


	public void setDescription(String description) {
		this.description = description;
	}

}
