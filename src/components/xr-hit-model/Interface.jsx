import React, { useState, useRef, useEffect } from 'react';

function Interface({ setModel }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const menuRef = useRef(null);

// ...existing code...
const dishes = [
  {
    name: 'Korean Wing',
    price: '$12',
    description: 'Spicy Korean-style chicken wings.',
    model: 'koreanwinggltf',
  },
  {
    name: 'Ramen',
    price: '$10',
    description: 'Traditional Japanese noodle soup.',
    model: 'ramenemb',
  },
  {
    name: 'Dish 3',
    price: '$8',
    description: 'A delightful dish.',
    model: 'pizzaWebCompressgltfEmb2',
  },
  {
    name: 'Sushi Platter',
    price: '$15',
    description: 'Assorted fresh sushi rolls.',
    model: 'sushigltf',
  },
  {
    name: 'Steak',
    price: '$20',
    description: 'Grilled to perfection.',
    model: 'steakgltf',
  },
  {
    name: 'Caesar Salad',
    price: '$9',
    description: 'Crisp romaine lettuce with Caesar dressing.',
    model: 'saladgltf',
  },
];
// ...existing code...

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setSelectedDish(null);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setSelectedDish(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id="overlay-content">
      <div className="dom-container">
        {isMenuOpen ? (
          <div ref={menuRef} className="menu-box">
            {selectedDish === null ? (
              <div id="menu">
                <div className="dish-list">
                  {dishes.map((dish, index) => (
                    <div key={index} className="dish-item">
                      <div
                        onClick={() => {
                          setSelectedDish(dish);
                          setModel(dish.model);
                        }}
                        className="dish-name-price"
                      >
                        <div className="dish-name">{dish.name}</div>
                        <div className="dish-price">{dish.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div id="dish-detail">
                <button onClick={(e) => {setSelectedDish(null); e.stopPropagation()}} className="back-button">
                  ←
                </button>
                <h3>{selectedDish.name}</h3>
                <p>{selectedDish.price}</p>
                <p>{selectedDish.description}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="button-container">
            <button onClick={toggleMenu} className="buttons">
              Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Interface;