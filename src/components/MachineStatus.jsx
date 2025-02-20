import React from "react";

const MachineStatus = ({ number, type, status }) => {
  const statusClass = status === "In Use" ? "status in-use" : "status available";

  return (
    <div className="machine-card">
      <h3>{type} {number}</h3>
      <p className={statusClass}>{status}</p>
    </div>
  );
};

export default MachineStatus;