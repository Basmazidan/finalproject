// ContactForm.js
import  { useState } from 'react';
import Validschema from '../vaildschema/Validschema';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Validschema.validate(formData, { abortEarly: false });
      console.log('Form data is valid:', formData);
      setErrors({});
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <div>
          <label className='Label-Contact' htmlFor="name">Your name</label>
          <input name="name" type="text" value={formData.name} onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label className='Label-Contact' htmlFor="email">Email address</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label className='Label-Contact' htmlFor="phone">Phone</label>
          <input name="phone" type="text" value={formData.phone} onChange={handleChange} />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
        <div>
          <label className='Label-Contact' htmlFor="subject">Subject</label>
          <input name="subject" type="text" value={formData.subject} onChange={handleChange} />
          {errors.subject && <div className="error">{errors.subject}</div>}
        </div>
        <div>
          <label className='Label-Contact' htmlFor="message">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <button className='btN-Submit' type="submit">Submit</button>
      </form>
    </div>
  );

};

export default ContactForm;

