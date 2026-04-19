package com.airport.flightscheduler.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Flight implements Comparable<Flight> {
    private String flightId;
    private String source;
    private String destination;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private int priority;
    private String status; // "ON_TIME", "DELAYED", "COMPLETED"

    @Override
    public int compareTo(Flight other) {
        // Higher priority number means it should be processed first.
        // If priorities are equal, the one with earlier departure time is processed first.
        if (this.priority != other.priority) {
            return Integer.compare(other.priority, this.priority); // descending order
        }
        if (this.departureTime != null && other.departureTime != null) {
            return this.departureTime.compareTo(other.departureTime); // ascending order
        }
        return 0;
    }
}
