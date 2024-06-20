import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.fullName) tempErrors.fullName = "Full Name is required.";
    if (!values.email) tempErrors.email = "Email is required.";
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) tempErrors.email = "Email is invalid.";
    if (!values.surveyTopic) tempErrors.surveyTopic = "Survey Topic is required.";
    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteProgrammingLanguage) tempErrors.favoriteProgrammingLanguage = "Favorite Programming Language is required.";
      if (!values.yearsOfExperience) tempErrors.yearsOfExperience = "Years of Experience is required.";
    }
    if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) tempErrors.exerciseFrequency = "Exercise Frequency is required.";
      if (!values.dietPreference) tempErrors.dietPreference = "Diet Preference is required.";
    }
    if (values.surveyTopic === 'Education') {
      if (!values.highestQualification) tempErrors.highestQualification = "Highest Qualification is required.";
      if (!values.fieldOfStudy) tempErrors.fieldOfStudy = "Field of Study is required.";
    }
    if (!values.feedback) tempErrors.feedback = "Feedback is required.";
    if (values.feedback && values.feedback.length < 50) tempErrors.feedback = "Feedback must be at least 50 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      let apiURL = '';
      switch (values.surveyTopic) {
        case 'Technology':
          apiURL = 'https://run.mocky.io/v3/acb00d86-d6e7-425b-8fa2-1cfc6e790249';
          break;
        case 'Health':
          apiURL = 'https://run.mocky.io/v3/7269c764-2723-42f3-ab9a-62005c199eea';
          break;
        case 'Education':
          apiURL = 'https://run.mocky.io/v3/015d1930-aca3-4257-8a93-b72dc391ce1d';
          break;
        default:
          apiURL = '';
      }
      if (apiURL) {
        const response = await fetch(apiURL);
        const data = await response.json();
        setAdditionalQuestions(data.questions);
      }
      setSubmittedData(values);
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    additionalQuestions,
    submittedData,
  };
};

export default useForm;
