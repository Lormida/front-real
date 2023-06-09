import React from 'react';

export const BookingPage = () => {
  const handleButtonClick = async () => {
    try {
      const myURL = process.env.REACT_APP_API_URL;
      console.log('myURL:', myURL);
      const response = await fetch(myURL as string);
      const data = await response.json();
      console.log(data); // do something with the response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>ready for anything (prod)</h1>
      <button onClick={handleButtonClick}>Get Times</button>
    </>
  );
};
