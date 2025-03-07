import React from 'react';
import roomImage from './room.jpg'; // Add your room image to the project

const StayWithUs = () => {
  return (
      <div id="stay" className="woodroffe-section">
        <div className="woodroffe-description">
          <h1>Stay With Us</h1>
          <p>
            Escape to the tranquility of the Peak District with a stay at The Woodroffe Arms. Our charming
            en-suite rooms offer the perfect blend of traditional character and modern comfort, ensuring a
            restful night's sleep after a day of exploring the stunning surroundings.
          </p>
          <p>
            Each room is individually designed with attention to detail, featuring premium bedding, modern
            amenities, and complimentary tea and coffee facilities. Wake up to a delicious full English
            breakfast prepared with locally-sourced ingredients to fuel your day's adventures.
          </p>
          <div className="book-table-section">
            <a href="tel:01433623093" className="book-table-button">
              <button>Book a Room</button>
            </a>
          </div>
        </div>
        <img src={roomImage} alt="Room at The Woodroffe Arms" className="woodroffe-image" />
      </div>
  );
};

export default StayWithUs;