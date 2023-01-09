import "./MainText.css";

const MainText = ({ mainTitle, txt }) => {
  return (
    <div className="main">
      <h2>{mainTitle}</h2>
      <p>{txt}</p>
    </div>
  );
};

export default MainText;
