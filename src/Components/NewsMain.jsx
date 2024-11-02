import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

const NewsMain = ({ category = "general", country = "in" }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            // const apiKey = process.env.REACT_APP_API_KEY;
            //supports only usa with different categories
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6cb151894a78428a864ec7d247ca1550`;
            console.log(url);
            setLoading(true);        
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                
                if (Array.isArray(data.articles)) {
                    setArticles(data.articles);
                } else {
                    throw new Error("Unexpected data structure");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category, country]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <h1 className="text-center my-4">Latest <span style={{ color: '#007bff' }}>{category}</span> News</h1>
            {loading && <Loading />}  {/* Loading Spinner */}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}  {/* Styled Error Message */}
            
            <div className="row justify-content-center">
                {articles.length > 0 ? (
                    articles.map((news, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                            <NewsItem
                                title={news.title || "No title available"}
                                description={news.description || "No description available"}
                                src={news.urlToImage || "https://via.placeholder.com/150"}
                                url={news.url || "#"}
                            />
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#6c757d' }}>No news articles available.</p>
                )}
            </div>
        </div>

    );
};

export default NewsMain;