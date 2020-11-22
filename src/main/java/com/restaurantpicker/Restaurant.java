package com.restaurantpicker;
import java.util.ArrayList;
import java.util.Collections;


public class Restaurant implements IRestaurant {

	public String restaurantName;
	public String restaurantURL;
	public String restaurantDescription;
	
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
		return restaurantName;
	}


	public void setName(String restaurantName) {
		this.restaurantName = restaurantName;
	}


	public String getURL() {
		return restaurantURL;
	}


	public void setURL(String restaurantURL) {
		restaurantURL = restaurantURL;
	}


	public void setDescription(String restaurantDescription) {
		this.restaurantDescription = restaurantDescription;
	}

}
