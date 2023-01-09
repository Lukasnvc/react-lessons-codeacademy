import "./Hero.css";

const Hero = ({ title, txt1, txt2, children }) => {
  return (
    <div className="hero">
      <h2>{title}</h2>
      <span>{txt1}</span>
      <span>{txt2}</span>
      {children}
    </div>
  );
};

export default Hero;
