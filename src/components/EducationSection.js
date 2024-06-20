import React from 'react';

const EducationSection = ({ values, handleChange, errors }) => {
  return (
    <div>
      <label>
        Highest Qualification:
        <select name="highestQualification" value={values.highestQualification} onChange={handleChange}>
          <option value="">Select a qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.highestQualification && <p className="error">{errors.highestQualification}</p>}
      </label>

      <label>
        Field of Study:
        <input type="text" name="fieldOfStudy" value={values.fieldOfStudy} onChange={handleChange} />
        {errors.fieldOfStudy && <p className="error">{errors.fieldOfStudy}</p>}
      </label>
    </div>
  );
};

export default EducationSection;
