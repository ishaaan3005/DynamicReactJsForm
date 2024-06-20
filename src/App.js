import React from 'react';
import './App.css';
import TechnologySection from './components/TechnologySection';
import HealthSection from './components/HealthSection';
import EducationSection from './components/EducationSection';
import useForm from './components/useForm';

const App = () => {
  const { handleChange, handleSubmit, values, errors, additionalQuestions, submittedData } = useForm();

  const renderSummary = (data) => (
    <div className="submitted-data">
      <h2>Summary of Your Data</h2>
      <table>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            value && (
              <tr key={key}>
                <td><strong>{key}</strong></td>
                <td>{value}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Survey Form</h1>

        <label>
          Full Name:
          <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </label>

        <label>
          Email:
          <input type="email" name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          Survey Topic:
          <select name="surveyTopic" value={values.surveyTopic} onChange={handleChange}>
            <option value="">Select a topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
        </label>

        {values.surveyTopic === 'Technology' && <TechnologySection values={values} handleChange={handleChange} errors={errors} />}
        {values.surveyTopic === 'Health' && <HealthSection values={values} handleChange={handleChange} errors={errors} />}
        {values.surveyTopic === 'Education' && <EducationSection values={values} handleChange={handleChange} errors={errors} />}

        <label>
          Feedback:
          <textarea name="feedback" value={values.feedback} onChange={handleChange} />
          {errors.feedback && <p className="error">{errors.feedback}</p>}
        </label>

        <button type="submit">Submit</button>
      </form>

      {submittedData && renderSummary(submittedData)}

      {additionalQuestions.length > 0 && (
        <div className="additional-questions">
          <h2>Additional Questions</h2>
          {additionalQuestions.map((question, index) => (
            <div key={index}>
              <label>
                {question.title}
                <input type="text" name={`additionalQuestion${index}`} onChange={handleChange} />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
