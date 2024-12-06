import { useEffect, useState } from "react";

function BackEndTest() {
  // Example API call in React (frontend/src/App.js or another component)
  const [respond, setRespond] = useState("waiting for respond ...");

  useEffect(() => {
    fetch("http://localhost:5000") // Backend API URL
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Log the data for debugging
        setRespond(data); // Update the state with the fetched data
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <h1>{respond}</h1>
    </div>
  );
}

export default BackEndTest;
