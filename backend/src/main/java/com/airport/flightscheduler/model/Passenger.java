package com.airport.flightscheduler.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Passenger {
    private String bookingId;
    private String flightId;
    private String name;
    private String email;
    private String seatType; // e.g. Economy, Business, First Class
    private LocalDateTime bookingTime;
}
