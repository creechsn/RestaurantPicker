package com.restaurantpicker;
import org.springframework.stereotype.Controller;
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
}
