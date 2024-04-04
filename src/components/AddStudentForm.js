import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudentForm = () => {
const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
    ...prevState,
    [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await axios.post('http://localhost:4000/api/student/addStudent', formData);
    toast.success('Student added successfully!');
    setFormData({
        firstname: '',
        lastname: '',
        gender: '',
    });
    } catch (error) {
    console.error('Error adding student:', error);
    toast.error('Failed to add student. Please try again.');
    }
};

return (
    <div className="student-form">
    <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form-group">
        <label htmlFor="firstname">First Name:</label>
        <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
        />
        </div>
        <div className="form-group">
        <label htmlFor="lastname">Last Name:</label>
        <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
        />
        </div>
        <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
        >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        </div>
        <button type="submit">Add Student</button>
    </form>
    <ToastContainer />
    </div>
);
};

export default AddStudentForm;
