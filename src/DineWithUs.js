import React from 'react';
import diningImage from './dining-room.jpg'; // Add your dining image to the project

const DineWithUs = () => {
    return (
        <div className="woodroffe-section">
            <img src={diningImage} alt="Dining at The Woodroffe Arms" className="woodroffe-image woodroffe-image-reduced" />
            <div className="woodroffe-description">
                <h1>Dine With Us</h1>
                <p>
                    Experience culinary excellence at The Woodroffe Arms, where our passionate chefs craft traditional
                    British fare with a contemporary twist. Using only the finest locally-sourced ingredients, our
                    seasonal menu celebrates the rich flavors of the Peak District.
                </p>
                <p>
                    From hearty Sunday roasts to delectable desserts, each dish is prepared with care and attention
                    to detail. Complement your meal with a selection from our extensive wine list or sample one of
                    our cask ales from local breweries.
                </p>
                <div className="book-table-section">
                    <a href="tel:01433623093" className="book-table-button">
                        <button>Book a Table</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DineWithUs;