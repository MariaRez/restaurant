import "./Article.css";

function Article({
  articleImage,
  articleTitle,
  articleDate,
  articleAuthor,
  articleDescription,
}) {
  return (
    <li className="article">
      <img className="article__image" src={articleImage} alt={articleTitle} />
      <div className="article__sing">
        <span className="additional-font text_size_xs description no-bottom">
          {articleDate}
        </span>
        <span className="additional-font text_size_xs description no-bottom">
          - {articleAuthor}
        </span>
      </div>
      <h4 className="article__header text_size_sm main-font medium-description">
        {articleTitle}
      </h4>
      <p className="additional-font text_size_xs description">
        {articleDescription}
      </p>
      <span className="article__link main-font text_size_xs big-header">
        Read More
      </span>
    </li>
  );
}

export default Article;
