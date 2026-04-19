# Airport Flight Scheduling System

A full-stack application demonstrating core Data Structures and Algorithms (DSA) through a flight scheduling system.

## Features & DSA Used
- **Priority Queue (Heap)**: Used to schedule flights based on priority or departure time.
- **HashMap**: Used for O(1) fast lookup of flights by flight ID.
- **Graph & Dijkstra's Algorithm**: Adjacency List representation of airports to find the shortest flight route (time) between two airports.
- **LinkedList / Queue**: Used to hold delayed flights in a waiting queue.

## Setup Instructions

### Prerequisites
- Java 17+
- Maven
- Node.js (v18+) & npm

### 1. Run the Backend (Spring Boot)
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the Spring Boot application using Maven:
   ```bash
   ./mvnw spring-boot:run
   ```
   *(Or run the `FlightSchedulerApplication` class from your IDE)*
3. The backend API will start on `http://localhost:8080`.

### 2. Run the Frontend (React Vite)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL (usually `http://localhost:5173`) in your browser.

## Design Aesthetic
The frontend uses a premium "old money" luxury aesthetic featuring:
- Deep Navy (`#0A1128`) and Charcoal (`#1F2933`) backgrounds
- Muted Gold (`#C5A880`) accents
- Playfair Display (Serif) and Inter (Sans-serif) typography
