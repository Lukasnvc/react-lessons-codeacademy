import "./Cards.css";

const Cards = () => {
  const array = [
    {
      img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      text: "First text",
    },
    {
      img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      text: "First text",
    },
    {
      img: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      text: "First text",
    },
    {
      img: "http://www.webnode.com/blog/wp-content/uploads/2018/09/6.png",
      text: "Second text",
    },
    {
      img: "http://www.webnode.com/blog/wp-content/uploads/2018/09/6.png",
      text: "Second text",
    },
    {
      img: "http://www.webnode.com/blog/wp-content/uploads/2018/09/6.png",
      text: "Second text",
    },
  ];
  return (
    <div className="cards">
      {array.map((item, index) => (
        <div className="card">
          <img key={index + item.text} src={item.img} alt="img" />
          <span key={item.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
