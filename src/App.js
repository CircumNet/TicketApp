import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    avatar: '',
  });
  const [errors, setErrors] = useState({});
  const [ticket, setTicket] = useState(null);
  const contentRef = React.useRef();
  

  
  // Load data from localStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  // Save data to localStorage on change
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on input change
  };

  const handleAvatarChange = (e) => {
    // Ideally, you'd integrate Cloudinary or similar here.
    // For this example, we'll just store the URL directly.
    const file = e.target.files[0];
    if (file) {
        // Simulate Cloudinary upload (replace with actual Cloudinary logic)
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, avatar: reader.result }); // Set the data URL
          setErrors({ ...errors, avatar: '' });
        }
        reader.readAsDataURL(file); // Or use Cloudinary URL
      }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.avatar) {
      newErrors.avatar = 'Avatar is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTicket({ ...formData, id: uuidv4() }); // Generate a unique ID for the ticket            
    }
  };

  return (
    <div className="container">
      <h1>Conference Ticket Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby="fullNameError"
          />
          {errors.fullName && <div className="error" id="fullNameError">{errors.fullName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby="emailError"
          />
          {errors.email && <div className="error" id="emailError">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="file" // Use type="file" for avatar upload
            id="avatar"
            name="avatar"
            onChange={handleAvatarChange}
            aria-invalid={!!errors.avatar}
            aria-describedby="avatarError"
            accept="image/*"
          />
          {errors.avatar && <div className="error" id="avatarError">{errors.avatar}</div>}
        </div>
        <button type="submit" >Generate Ticket</button>
      </form>

      {ticket && (
        <div className="ticket" ref={contentRef}>
          <h2>Your Conference Ticket</h2>
          <p><strong>ID:</strong> {ticket.id}</p> {/* Display the unique ID */}
          <p><strong>Full Name:</strong> {ticket.fullName}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <img src={ticket.avatar} alt="Avatar" className="avatar" />
        </div>
      )}
    </div>
  );
}

export default App;