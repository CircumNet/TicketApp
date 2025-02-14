import React from 'react';
import './TicketConfirmation.css'; // Import your CSS file
import qrCode from './qr-code.png'; // Import your QR code image
import barcode from './barcode.png'; // Import your barcode image
import placeholderImage from './placeholder-image.png'; // Import your placeholder image

const TicketConfirmation = () => {
  return (
    <div className="ticket-confirmation-container">
      <header>
        <div className="header-content">
          <div className="logo">Ready Events</div>
          <nav>
            <a href="#">Events</a>
            <a href="#">My Tickets</a>
            <a href="#">About Project</a>
          </nav>
          <button className="my-tickets-button">MY TICKETS</button>
        </div>
      </header>

      <main>
        <div className="confirmation-message">
          <h1>Your Ticket is Booked!</h1>
          <p>Check your email for a copy or you can download</p>
        </div>

        <div className="ticket-card">
          <div className="ticket-content">
            <div className="ticket-header">
              <h2>Techember Fest '25</h2>
            </div>
            <div className="ticket-body">
              <div className="left-content">
                <img src={qrCode} alt="QR Code" className="qr-code" />
              </div>
              <div className="right-content">
                <p>Axl Chawlu</p>
                <p>Useal@email.com</p>
                <p className="ticket-number">214567</p>
              </div>
            </div>
            <div className="ticket-image">
              <img src={placeholderImage} alt="Placeholder" />
              <p className="additional-info">
                NTA: 750k users will select only those entry in they got the
                mobile sports... More of the event here.
              </p>
            </div>
            <div className="ticket-footer">
              <img src={barcode} alt="Barcode" className="barcode" />
            </div>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="book-another-button">Book Another Ticket</button>
          <button className="download-ticket-button">Download Ticket</button>
        </div>
      </main>
    </div>
  );
};

export default TicketConfirmation;