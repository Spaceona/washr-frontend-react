import axios from "axios";

const BASE_URL = "https://api.spaceona.com/status/lafTest/"; 

export async function fetchMachineStatuses() {
    try {
        const response = await fetch("https://api.spaceona.com/status/lafTest/");
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Ensure data structure is correct
        if (!data.Statuses) {
            throw new Error("Invalid response format: Missing 'Statuses' key");
        }

        // Convert object to an array of machines
        const machinesArray = Object.values(data.Statuses).map(machine => ({
            id: machine.id,
            number: machine.number,
            type: machine.type.Valid ? machine.type.String : "Unknown",
            status: machine.status ? "In Use" : "Available",
            building: machine.building.Valid ? machine.building.String : "Unknown",
            client_name: machine.client_name.Valid ? machine.client_name.String : "Unknown"
        }));

        return machinesArray;
        
    } catch (error) {
        console.error("Error fetching machine status:", error);
        return [];
    }
}