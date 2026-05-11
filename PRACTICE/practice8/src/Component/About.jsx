import { useSelector } from "react-redux";

const About = () => {
  const selector = useSelector((state) => state.products.data);
  console.log(selector);
  return (
    <>
      {selector.map((x) => (
        <div key={x.id}>
          <p>{x.title}</p>
        </div>
      ))}
    </>
  );
};

export default About;
