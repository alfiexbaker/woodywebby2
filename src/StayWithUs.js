import React from 'react';

const StayWithUs = () => {
    const currentHour = new Date().getHours();
    const isOpeningHours = currentHour >= 15 && currentHour < 23; // 3pm to 11pm

    const handleCallClick = () => {
        if (isOpeningHours) {
            window.location.href = 'tel:01433623093';
        } else {
            window.location.href = 'tel:07921627483';
        }
    };

    return (
        <div id="stay-section" className="woodroffe-section">
            <div className="woodroffe-description">
                <h1>Stay With Us</h1>
                <p>
                    Experience the charm of the Peak District with a stay in one of our comfortable en-suite rooms.
                    Each room is designed with traditional British charm, offering a peaceful retreat after a day
                    of exploring the stunning landscapes surrounding Hope.
                </p>
                <p>
                    Our rooms feature modern amenities while maintaining the warm, inviting atmosphere that The Woodroffe Arms
                    is known for. Wake up to breathtaking views and join us for a hearty breakfast to start your day right.
                </p>
                <div className="book-table-section">
                    <h3>For the best room rates book direct:</h3>
                    <p>
                        <strong>Call:</strong> <a href="tel:01433623093">01433 623093</a> (3pm to 11pm)
                        <br />
                        <strong>Text:</strong> <a href="tel:07921627483">07921 627483</a> (24hrs)
                    </p>
                    <button onClick={handleCallClick} className="book-now-button">
                        Book Now - {isOpeningHours ? 'Call Pub' : 'Text Mobile'}
                    </button>
                </div>
            </div>
            <img className="woodroffe-image" src="/hotel-room.jpg" alt="The Woodroffe Arms Hotel Room" />
        </div>
    );
}

export default StayWithUs;