import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../features/devices/deviceSlice";
import DeviceCard from "../components/DeviceCard";
import Spinner from "../components/Spinner";


const Dashboard = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.devices);

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Network Devices</h2>
      {loading && <Spinner />}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
