import React, { useState } from 'react';
import './TicketSelection.css';

const TicketSelection = () => {
  const [selectedTicketType, setSelectedTicketType] = useState('free');
  const [numTickets, setNumTickets] = useState(1);

  const ticketTypes = [
    { type: 'free', label: 'Free', price: 0, availability: 20 },
    { type: 'vip', label: 'VIP ACCESS', price: 150, availability: 20 },
    { type: 'vvip', label: 'VVIP ACCESS', price: 150, availability: 20 },
  ];

  const handleTicketTypeChange = (type) => {
    setSelectedTicketType(type);
  };

  const handleNumTicketsChange = (event) => {
    setNumTickets(parseInt(event.target.value, 10) || 1);
  };

  return (
    <div className="ticket-selection-container">
      <div className="header">
        <div className="logo">B tiez</div>
        <div className="nav">
          <span>Events</span>
          <span>My Tickets</span>
          <span>About Project</span>
        </div>
        <button className="my-tickets-button">MY TICKETS →</button>
      </div>

      <div className="content">
        <div className="ticket-selection-panel">
          <div className="steps">Ticket Selection <span className="step-count">Step 1/3</span></div>
          <div className="event-info">
            <div className="event-title">Techember Fest '25</div>
            <div className="event-description">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</div>
            <div className="event-details">
              <span>[Event Location]</span> || <span>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>

          <div className="ticket-types">
            {ticketTypes.map((ticket) => (
              <div
                key={ticket.type}
                className={`ticket-type ${selectedTicketType === ticket.type ? 'selected' : ''}`}
                onClick={() => handleTicketTypeChange(ticket.type)}
              >
                <div className="ticket-label">{ticket.label}</div>
                <div className="ticket-price">${ticket.price}</div>
                <div className="ticket-availability">{ticket.availability}/52</div>
              </div>
            ))}
          </div>

          <div className="number-of-tickets">
            <span>Number of Tickets</span>
            <select value={numTickets} onChange={handleNumTicketsChange}>
              {[...Array(10)].map((_, i) => ( // Generate options up to 10 (adjust as needed)
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="buttons">
            <button className="cancel-button">Cancel</button>
            <button className="next-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;