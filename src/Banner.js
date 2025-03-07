import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    const hour = currentTime.getHours();
    const isOpeningHours = hour >= 15 && hour < 23; // 3pm to 11pm

    const handleCallClick = () => {
        if (isOpeningHours) {
            window.location.href = 'tel:01433623093';
        } else {
            window.location.href = 'tel:07921627483';
        }
    };

    return (
        <div className="booking-banner">
            <div className="banner-content">
                <h2>To get the best room rates book direct</h2>
                <div className="banner-contact">
                    <p>
                        <span className="contact-label">Call:</span>
                        <a href="tel:01433623093">01433 623093</a> (pub opening hours only)
                    </p>
                    <p>
                        <span className="contact-label">Text:</span>
                        <a href="tel:07921627483">07921 627483</a> (24hrs)
                    </p>
                </div>
                <button onClick={handleCallClick} className="banner-call-button">
                    Book Now - {isOpeningHours ? 'Call Pub' : 'Text Mobile'}
                </button>
            </div>
        </div>
    );
};

export default Banner;