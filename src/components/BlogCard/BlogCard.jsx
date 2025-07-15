const BlogCard = ({ card, onReadMore }) => {
  return (
    <div className="blog__card">
      <img src={card.img} alt="Everest climb" className="blog__image" />
      <h3 className="blog__card-title">{card.title}</h3>
      <p className="blog__card-date">{card.date}</p>
      <div className="blog__card-content">
        <p className="blog__card-desc">{card.content}</p>

        <button className="blog__read-more" onClick={onReadMore}>
          {" "}
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
