import { useState, useEffect } from "react";
import axios from "axios";

const UseApi = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default UseApi;
