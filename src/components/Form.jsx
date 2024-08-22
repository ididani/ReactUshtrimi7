import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.message
    ) {
      setSuccess(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name*:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name*:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email Address*:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Enter Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && <p>Message sent! Thank you for contacting us {formData.firstName}!</p>}
    </div>
  );
};

export default Form;
