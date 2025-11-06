import axios from "axios";
import { useState, useEffect } from "react";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    name: string;
  };
}

const NewsCard = () => {
  const [getNews, setGetNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  // Fetch News
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2025-11-05&to=2025-11-05&sortBy=popularity&apiKey=08a524a3b3bf49c2bf719de4c742f5aa"
      );
      if (response.data.articles) {
        setGetNews(response.data.articles);
      } else {
        console.warn("No articles found in response.");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(getNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getNews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading News...</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Latest Apple News 📰</h2>

      {/* News Cards */}
      <div className="row">
        {currentItems.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <img
                  src={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://placehold.co/600x400?text=No+Image"
                  }
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {article.title?.slice(0, 60) || "No Title"}
                  </h5>
                  <p className="card-text">
                    {article.description
                      ? article.description.slice(0, 100) + "..."
                      : "No description available."}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {new Date(article.publishedAt).toLocaleDateString()} —{" "}
                    {article.source?.name || "Unknown Source"}
                  </small>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handlePrev}>
              Previous
            </button>
          </li>

          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewsCard;
