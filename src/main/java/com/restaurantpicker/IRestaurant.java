package com.restaurantpicker;

import java.util.ArrayList;

public interface IRestaurant {
	public void getImage();
	public void getDescription();
	public ArrayList<Restaurant> selectRestaurant(ArrayList<Restaurant> restaurants);
}
