import React, { useState } from 'react';

export default function BackgroundColor() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <center>
        <div style={{ height: "100vh", width: "100vw", border: "2px solid black", backgroundColor: `${inputValue}`, filter: "blur(0.7px)" }}>
        <h1>background color changer</h1>

          <input
            onChange={handleInputChange}
            value={inputValue}
            style={{ height: "50px", width: "400px", marginTop: "10%", marginLeft: "0%", backgroundColor: "white", borderRadius: "10px", fontSize: "30px", filter: "none",zIndex:"" }}
          />
                  <h1>this is  {inputValue} colour</h1>

        </div>
      </center>
    </div>
  );
}
