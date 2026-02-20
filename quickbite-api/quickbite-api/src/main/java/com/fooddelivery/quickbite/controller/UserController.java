package com.fooddelivery.quickbite.controller;

import com.fooddelivery.quickbite.io.UserRequest;
import com.fooddelivery.quickbite.io.UserResponse;
import com.fooddelivery.quickbite.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request){
        return userService.registerUser(request);
    }
}
