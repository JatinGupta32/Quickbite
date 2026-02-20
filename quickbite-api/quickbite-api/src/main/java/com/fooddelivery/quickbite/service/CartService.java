package com.fooddelivery.quickbite.service;

import com.fooddelivery.quickbite.io.CartRequest;
import com.fooddelivery.quickbite.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removefromCart(CartRequest cartRequest);
}
