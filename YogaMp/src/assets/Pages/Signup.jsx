import React, { useState } from 'react';
import './SignUp.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate(); // ✅ Add this here

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
    gender: '',
    photoUrl: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4201/data', formData);
      if (response.status === 201) {
        alert("Signup successful!");
        setFormData({
          name: '', username: '', password: '', confirmPassword: '', phone: '',
          email: '', gender: '', photoUrl: '', address: '',
        });
        navigate('/login'); // ✅ Redirect after signup
      }
    } catch (error) {
      alert("Signup failed.");
      console.error(error);
    }
  };
  return (
    <div className="video-bg-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/images/sign.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay">
        <div className="page">
          <div className="form-card">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="frm">
              <div className="field-group">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter Name"
                />
              </div>

              <div className="field-group">
                <label>Gender</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Male
                  </label>
                </div>
              </div>

              <div className="field-group">
                <label>Username</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="Enter Username"
                />
              </div>

              <div className="field-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter Password"
                />
              </div>

              <div className="field-group">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm Password"
                />
              </div>

              <div className="field-group">
                <label>Phone No</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter Phone no"
                />
              </div>

              <div className="field-group">
                <label>Photo URL</label>
                <input
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                  placeholder="Enter URL"
                />
              </div>

              <div className="field-group">
                <label>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter Email id"
                />
              </div>

              <div className="field-group">
                <label>Address</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter Address"
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;