import React from 'react';
import pubImage from './pub-exterior.jpg'; // Add your pub image to the project

const OurPub = () => {
    return (
        <div id="home" className="woodroffe-section">
            <div className="woodroffe-description">
                <h1>Our Pub</h1>
                <p>
                    Nestled in the heart of the picturesque Peak District National Park in Hope, The Woodroffe Arms
                    stands as a beacon of traditional British hospitality. This iconic establishment has been the talk of
                    the town, consistently praised for its genuine, down-to-earth service complemented by a vast
                    selection of fine ales and beers. Beyond our inviting tavern, guests can indulge in the luxury of our
                    en-suite rooms, each designed with a touch of British charm to ensure a comfortable stay.
                </p>
                <p>
                    As a testament to our unwavering commitment to quality, many visitors have lauded our warm and
                    welcoming ambiance, making The Woodroffe Arms an essential destination for both locals and
                    travellers alike. Whether you're seeking a cosy weekend getaway, a memorable dining experience, or
                    just a pint in good company, we invite you to experience the legacy of The Woodroffe Arms.
                </p>
            </div>
            <img src={pubImage} alt="The Woodroffe Arms Exterior" className="woodroffe-image" />
        </div>
    );
};

export default OurPub;