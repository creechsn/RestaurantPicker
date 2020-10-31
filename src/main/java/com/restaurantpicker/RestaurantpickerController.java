package com.restaurantpicker;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class RestaurantpickerController 
{

	// request mapping for home page
	@RequestMapping("/")
	public String start()
	{
		return "index";
	}
	
	//request mapping for restaurant choice page with different restaurants and ratings
	@RequestMapping("/choices")
	public String index()
	{
		return "restaurantchoice";
	}
}
