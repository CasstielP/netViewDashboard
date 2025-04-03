import React from "react";
import clsx from 'clsx'
const DeviceCard = ({ device }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-3">
      <h3 className="text-lg font-bold">{device.name}</h3>
      <p>IP: {device.ip}</p>
      <p>Status: <span className={clsx(
    "font-semibold",
    {
      "text-green-600": device.status === "Online",
      "text-yellow-600": device.status === "Warning",
      "text-red-600": device.status !== "Online" && device.status !== "Warning"
    }
  )}>{device.status}</span></p>
      <p>Uptime: {device.uptime}</p>
      <p>Signal: {device.signalStrength}%</p>
    </div>
  );
};

export default DeviceCard;
