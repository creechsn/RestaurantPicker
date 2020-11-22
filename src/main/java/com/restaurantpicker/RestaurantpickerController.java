package com.restaurantpicker;
import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class RestaurantPickerController
{
	@RequestMapping("/")
	public String start()
	{
		return "index";
	}
	
	@RequestMapping("/choices")
	public String index()
	{
		return "restaurantchoice";
	}
	
	
	@PostMapping("/restaurants")
	public String restaurants(@ModelAttribute("restaurants") ArrayList<String> restaurantNames)
	{
		ArrayList<Restaurant> restaurants = new ArrayList<>();
		for(int i = 0; i < restaurantNames.size(); i++)
		{
			Restaurant restaurant = new Restaurant();
			restaurant.setName(restaurantNames.get(i));
			restaurants.add(restaurant);
		}
		
		restaurants.get(0).selectRestaurant(restaurants);
		
		return "restaurantchoice";
		
	}
}
