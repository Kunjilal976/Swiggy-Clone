import React, { useState } from 'react';

const Menu = () => {
  const [data, setData] = useState(null);

  const handleClick = () => {
    fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="containerA">
      <img src="menu.webp" alt="" className="example-img" />
      <button onClick={handleClick} className="button">
        Fetch Data
      </button>
      {data && (
        <div className="data">
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  );
};

export default Menu;
