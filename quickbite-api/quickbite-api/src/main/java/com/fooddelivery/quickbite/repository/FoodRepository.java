package com.fooddelivery.quickbite.repository;

import com.fooddelivery.quickbite.entity.FoodEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<FoodEntity, String> {
}
