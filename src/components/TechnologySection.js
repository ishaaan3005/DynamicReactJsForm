import React from 'react';

const TechnologySection = ({ values, handleChange, errors }) => {
  return (
    <div>
      <label>
        Favorite Programming Language:
        <select name="favoriteProgrammingLanguage" value={values.favoriteProgrammingLanguage} onChange={handleChange}>
          <option value="">Select a language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
        </select>
        {errors.favoriteProgrammingLanguage && <p className="error">{errors.favoriteProgrammingLanguage}</p>}
      </label>

      <label>
        Years of Experience:
        <input type="number" name="yearsOfExperience" value={values.yearsOfExperience} onChange={handleChange} />
        {errors.yearsOfExperience && <p className="error">{errors.yearsOfExperience}</p>}
      </label>
    </div>
  );
};

export default TechnologySection;
