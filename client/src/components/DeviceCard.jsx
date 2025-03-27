import React from "react";

const DeviceCard = ({ device }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-3">
      <h3 className="text-lg font-bold">{device.name}</h3>
      <p>IP: {device.ip}</p>
      <p>Status: <span className={`font-semibold ${device.status === "Online" ? "text-green-600" : device.status === "Warning" ? "text-yellow-600" : "text-red-600"}`}>{device.status}</span></p>
      <p>Uptime: {device.uptime}</p>
      <p>Signal: {device.signalStrength}%</p>
    </div>
  );
};

export default DeviceCard;
