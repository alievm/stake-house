import React, { useContext, useEffect } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
    const { menu_list } = useContext(StoreContext);

    useEffect(() => {
        // Scroll to the section if the hash is #explore-menu
        const hash = window.location.hash;
        if (hash === '#explore-menu') {
            const section = document.getElementById('explore-menu');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="explore-menu" id="explore-menu">
            {/* Section Title */}
            <h1 className="text-4xl font-black">Explore our menu</h1>

            {/* Description */}
            <p className="explore-menu-text text-xl">
                Choose from a diverse menu featuring a delectable array of dishes.
                Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>

            {/* Menu Category List */}
            {menu_list && menu_list.length > 0 ? (
                <div className="explore-menu-list">
                    {menu_list.map((item, index) => (
                        <div
                            key={index}
                            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
                            onClick={() =>
                                setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
                            }
                        >
                            {/* Menu Image */}
                            <img
                                src={item.menu_image}
                                alt={`${item.menu_name} image`}
                                className={category === item.menu_name ? 'active' : ''}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    willChange: 'auto',
                                }}
                            />
                            {/* Menu Name */}
                            <p>{item.menu_name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="explore-menu-placeholder">Loading menu... Please wait.</p>
            )}

            {/* Divider */}
            <hr />
        </div>
    );
};

export default ExploreMenu;
