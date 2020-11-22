package com.restaurantpicker;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RestaurantpickerController 
{
	@RequestMapping("/")
	public String start()
	{
		return "index";
	}
	
	@RequestMapping("/choices")
	public String choices()
	{
		return "restaurantChoice";
	}
}
