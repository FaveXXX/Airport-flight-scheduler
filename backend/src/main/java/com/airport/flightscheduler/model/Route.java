package com.airport.flightscheduler.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Route {
    private String destination;
    private int weight; // e.g., distance or time in minutes
}
