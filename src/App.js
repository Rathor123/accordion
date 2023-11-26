import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [userdata, SetuserData] = useState(data);
  const { id, title, info } = userdata;

  return (
    <>
      <h3>data here</h3>
      <section className="info">
        {data.map((final_data) => {
          return <SingleQuestion key={final_data.id} {...final_data} />;
        })}
      </section>
    </>
  );
}

export default App;
