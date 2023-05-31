import { useState, useEffect } from "react";
import { getNews } from "./getNews";
import Loader from "../../utils/loader/Loader";
import New from "./New";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNews();
      setNews(newsData);
      setIsLoading(false);      
    }

    fetchData();
    return () => clearTimeout(fetchData);
  }, [])

  return (
    <div className="news-section">
      <div className="news-section__header">
        <span className="news-section__title">News</span>
        <a className="news-section__see-all">See all 
          <FontAwesomeIcon className="products__chevron-right" icon={faChevronRight} />
        </a>
      </div>
      { isLoading ? (
          <div className="modal">
            <Loader />
          </div>
          ) : (
            <div className="news">
              {
                news.map((item) => (
                  <New
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))
              }
            </div>
          )
      }
    </div>
  );
}


export default News;