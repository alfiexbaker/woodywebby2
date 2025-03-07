import React from 'react';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Traditional Fish & Chips', description: 'Beer-battered cod served with chunky chips, mushy peas, and tartare sauce.', price: '£14.95' },
        { id: 2, name: 'Steak & Ale Pie', description: 'Tender chunks of beef slow-cooked in local ale, encased in shortcrust pastry, served with seasonal vegetables and gravy.', price: '£15.95' },
        { id: 3, name: 'Sunday Roast', description: 'Choice of roast beef, pork or chicken served with Yorkshire pudding, roast potatoes, seasonal vegetables and rich gravy.', price: '£16.95' },
        { id: 4, name: 'Vegetable Wellington', description: 'Seasonal vegetables and goat cheese wrapped in puff pastry, served with potatoes and a red wine reduction.', price: '£13.95' }
    ];

    return (
        <div id="menu" className="menu-section">
            <h1>Our Menu</h1>
            <table className="menu-table">
                <thead>
                <tr>
                    <th>Dish</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td className="menu-item-price">{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="book-table-section">
                <a href="tel:01433623093" className="book-table-button">
                    <button>Book a Table</button>
                </a>
            </div>
        </div>
    );
};

export default Menu;