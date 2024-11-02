//destructuring all props 




const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card text-center">
        <img src={src} style={{ height: "200px", width: "100%" }} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0, 100)}......</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    );
  }
  
  export default NewsItem
  