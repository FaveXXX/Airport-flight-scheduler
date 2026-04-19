package com.airport.flightscheduler.controller;

import com.airport.flightscheduler.model.Flight;
import com.airport.flightscheduler.model.Passenger;
import com.airport.flightscheduler.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @PostMapping("/flights")
    public ResponseEntity<Flight> scheduleFlight(@RequestBody Flight flight) {
        Flight scheduledFlight = flightService.scheduleFlight(flight);
        return ResponseEntity.ok(scheduledFlight);
    }

    @GetMapping("/flights/{id}")
    public ResponseEntity<Flight> getFlight(@PathVariable String id) {
        Flight flight = flightService.getFlightById(id);
        if (flight == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(flight);
    }

    @GetMapping("/flights")
    public ResponseEntity<List<Flight>> getAllFlights() {
        return ResponseEntity.ok(flightService.getAllFlights());
    }

    @PutMapping("/flights/delay/{id}")
    public ResponseEntity<Flight> delayFlight(@PathVariable String id, @RequestParam int newPriority) {
        Flight delayedFlight = flightService.handleDelay(id, newPriority);
        if (delayedFlight == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(delayedFlight);
    }
    
    @PutMapping("/flights/{id}/status")
    public ResponseEntity<Flight> updateStatus(@PathVariable String id, @RequestParam String status) {
        Flight updatedFlight = flightService.updateFlightStatus(id, status);
        if (updatedFlight == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedFlight);
    }

    @GetMapping("/routes")
    public ResponseEntity<Map<String, Object>> getShortestRoute(@RequestParam String source, @RequestParam String dest) {
        Map<String, Object> result = flightService.getShortestRoute(source, dest);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/bookings")
    public ResponseEntity<Passenger> bookFlight(@RequestBody Passenger passenger) {
        return ResponseEntity.ok(flightService.bookFlight(passenger));
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<Passenger>> getAllBookings() {
        return ResponseEntity.ok(flightService.getAllBookings());
    }
}
