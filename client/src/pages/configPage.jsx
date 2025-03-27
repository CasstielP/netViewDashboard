import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfig, updateConfig } from "../features/config/configSlice";

const ConfigPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.config);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  useEffect(() => {
    const initialValues = {};
    list.forEach((item) => (initialValues[item.key] = item.value));
    setFormValues(initialValues);
  }, [list]);

  const handleChange = (key, val) => {
    setFormValues((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries(formValues).forEach(([key, value]) => {
      dispatch(updateConfig({ key, value }));
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Network Configuration</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {list.map((cfg) => (
          <div key={cfg.key}>
            <label className="block font-medium text-gray-700">
              {cfg.description || cfg.key}
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formValues[cfg.key] || ""}
              onChange={(e) => handleChange(cfg.key, e.target.value)}
            />
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ConfigPage;
