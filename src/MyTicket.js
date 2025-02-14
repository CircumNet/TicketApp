import React, { useState } from 'react';
import './MyTickets.css'; // Import your CSS file

const MyTickets = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('hello@avioflagos.io'); // Pre-filled email
  const [specialRequest, setSpecialRequest] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission here (e.g., API call)
    console.log('Form submitted:', { name, email, specialRequest, profilePhoto });
  };

  return (
    <div className="modal-overlay"> {/* Dimmed background overlay */}
      <div className="modal-content">
        <div className="header">
          <div className="nav">
            <div className="logo"> {/* Your logo here */} </div>
            <a href="#">Events</a>
            <a href="#">My Tickets</a>
            <a href="#">About Project</a>
          </div>
          <button className="my-tickets-btn">MY TICKETS</button>
        </div>

        <div className="content">
          <h2 className="title">Attendee Details</h2>
          <p className="step">Step 2/3</p>

          <div className="photo-upload">
            <div className="upload-area">
              <input type="file" id="profile-photo" onChange={handlePhotoUpload} style={{ display: 'none' }} />
              <label htmlFor="profile-photo" className="upload-label">
                <div className="upload-icon"> {/* Your upload icon here */} </div>
                Drag & drop or click to upload
              </label>
            </div>
          </div>

          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Special request?" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)}></textarea>

          <div className="button-group">
            <button className="back-btn">Back</button>
            <button className="submit-btn" onClick={handleSubmit}>Get My Fire T</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;