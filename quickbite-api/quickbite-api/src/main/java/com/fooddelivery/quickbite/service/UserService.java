package com.fooddelivery.quickbite.service;

import com.fooddelivery.quickbite.io.UserRequest;
import com.fooddelivery.quickbite.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);

    String findByUserId();

}
