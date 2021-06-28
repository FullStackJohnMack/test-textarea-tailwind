import React, { useState } from "react";
import './App.css';

function App() {

  const INITIAL_STATE = {
    narrative: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  //handles changes to controlled form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col">
      <textarea
        rows="4"
        name="narrative"
        id="narrative"
        value={formData.narrative}
        onChange={handleChange}
        required
        placeholder="e.g. This amazing hike takes you by two different waterfalls but the trailhead can be hard to find. The parking area is..."
      />
    </div>
  );
}

export default App;
