import React from 'react';
import './App.css'; // Import styles if needed for consistent design

const TubtonBirthday = () => {
    return (
        <div className="woodroffe-section">
            <div className="woodroffe-description">
                <h1>Tubton and Brams 21st Bash</h1>
                <p>
                    On <strong>November 15th</strong>, two beasts tear through the night—Tubton and Brams. Two warriors, born of chaos, celebrating 21 years of conquering everything in their path.
                    <br /><br />
                    Known to most as Tubs, this brute is a walking earthquake—each step could bring the roof down. His laughter is a roar that shatters silence and ignites madness. And beside him is Brams—equal parts mayhem and majesty, a king of his own untamed kingdom, commanding chaos with just a glance.
                    <br /><br />
                    Tonight isn’t just a party; it’s a clash of titans. We gather not to celebrate, but to bear witness. Raise your glasses to Tubs and Brams—the beasts who don’t just conquer the world, but leave it trembling in their wake!
                </p>
            </div>
            <img
                src="/gallery/tubton-21.JPG"
                alt="Tubton and Brams celebrating their 21st Birthday Bash"
                className="woodroffe-image woodroffe-image-reduced"
            />
        </div>
    );
};

export default TubtonBirthday;
