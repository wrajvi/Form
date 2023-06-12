import React, { useState, useEffect } from 'react';
import Table from './Table';

const Form = () => {
  console.log("UP");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    city: '',
    state: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [data,setData]=useState([]);

  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setData(submissions);
  },[]);

  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    if (editIndex !== null) {
      setFormData(submissions[editIndex]);
    }
  }, [editIndex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (formData.firstName.length<2) {
      errors.firstName = 'Please Enter a Valid First Name';
    }
    if (formData.lastName.length<2) {
      errors.lastName = 'Please Enter a valid Last Name';
    }
    if (formData.phoneNumber.length<10) {
      errors.phoneNumber = 'Please Enter a valid Phone Number';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } 
    
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (formData.city.length<2) {
      errors.city = 'Please Enter a valid City';
    }
    if (formData.state.length<2) {
      errors.state = 'Please Enter a valid state';
    }
  
    return errors;
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

      console.log(submissions,"start");
      if (editIndex !== null) {
        submissions[editIndex] = formData;
         }
      else
        submissions.push(formData);

       setData(submissions);
      
      localStorage.setItem('submissions', JSON.stringify(submissions));

      setFormErrors({});
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        gender: '',
        dateOfBirth: '',
        city: '',
        state: '',
      });
      setEditIndex(null);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    
    <div >
    <div className="m-auto flex flex-col justify-center w-96" >
    <form onSubmit={handleSubmit} className='bg-pink-50 shadow-2xl m-2 p-2 flex flex-col  justify-center'>
      <div className='mx-3 my-2 flex flex-col p-2'>
        <label className='text-lg'>First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {formErrors.gender && <span className="error">{formErrors.gender}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.dateOfBirth && <span className="error">{formErrors.dateOfBirth}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.city && <span className="error">{formErrors.city}</span>}
      </div>

      <div className='mx-3 my-2 flex flex-col p-2'>
        <label>State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
          className='shadow-md border border-green-500 rounded-md bg-amber-50 text-pink-600'
        />
        {formErrors.state && <span className="error">{formErrors.state}</span>}
      </div>

      <div className='my-2 flex flex-col'> 
      <button type="submit" className='rounded-md bg-violet-400 '>{editIndex !== null ? 'Update' : 'Add Profile'}</button>
      </div>
    </form>
    </div>
    <div className='m-auto my-10 flex flex-col justify-center items-center'>
    <Table data={data} setData={setData} setEditIndex={setEditIndex}/>
    </div>

    </div>

  );
};

export default Form;
