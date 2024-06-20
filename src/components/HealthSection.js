import React from 'react';

const HealthSection = ({ values, handleChange, errors }) => {
  return (
    <div>
      <label>
        Exercise Frequency:
        <select name="exerciseFrequency" value={values.exerciseFrequency} onChange={handleChange}>
          <option value="">Select frequency</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Rarely">Rarely</option>
        </select>
        {errors.exerciseFrequency && <p className="error">{errors.exerciseFrequency}</p>}
      </label>

      <label>
        Diet Preference:
        <select name="dietPreference" value={values.dietPreference} onChange={handleChange}>
          <option value="">Select a diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
        {errors.dietPreference && <p className="error">{errors.dietPreference}</p>}
      </label>
    </div>
  );
};

export default HealthSection;
