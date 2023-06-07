import React, { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./db.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Example;
