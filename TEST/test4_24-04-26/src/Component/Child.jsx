import React, { useEffect } from "react";

const Child = ({ setAllData }) => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      console.log(data.recipes)
      setAllData(data.recipes);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    </>
  );
};

export default Child;
