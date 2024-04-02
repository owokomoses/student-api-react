import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudentForm = () => {
const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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
        first_name: '',
        last_name: '',
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
        <label htmlFor="first_name">First Name:</label>
        <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
        />
        </div>
        <div className="form-group">
        <label htmlFor="last_name">Last Name:</label>
        <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
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
