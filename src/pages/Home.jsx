import React, { useEffect, useState } from "react";
import { fetchMachineStatuses } from "../api";
import MachineStatus from "../components/MachineStatus.jsx";
import TopBar from "../components/TopBar.jsx";
import backgroundImage from "../assets/watson-hall.jpg";

const Home = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMachines = async () => {
      const data = await fetchMachineStatuses();
      setMachines(data);
      setLoading(false);
    };

    loadMachines();
    const interval = setInterval(loadMachines, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <TopBar /> {/* Top bar remains unchanged */}

      {/* Background Image + Machine List */}
            <div 
        className="machine-list-container" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div className="machine-list">
          {loading ? (
            <p>Loading...</p>
          ) : machines.length > 0 ? (
            machines.map((machine) => (
              <MachineStatus 
                key={machine.id} 
                number={machine.number} 
                type={machine.type} 
                status={machine.status} 
              />
            ))
          ) : (
            <p>No machines found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;