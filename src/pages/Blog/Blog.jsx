import React from "react";
import "./blog.scss";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";

import articles from "@/data/articles.json";
import InterestingItem from "@/components/Interesting/InterestingItem";
import Pagination from "@/components/Pagination/Pagination";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    const currentPage = parseInt(page) || 1;
    setCurrentPage(currentPage);
  }, [page]);

  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth <= 1000
  );
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 500
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth <= 1000);
      setIsMobileScreen(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobileScreen ? 6 : isTabletScreen ? 8 : 9;
  const maxPages = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const blogWrapperRef = useRef(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!initialLoad && blogWrapperRef.current) {
      blogWrapperRef.current.focus();
    }
  }, [currentPage]);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <>
      <div className="blogMain">
        <Header />

        <PageTitle>Our blog</PageTitle>
        <div className="blogMain__wrapper">
          <section className="blogSection">
            <div
              className="blogSection__wrapper"
              ref={blogWrapperRef}
              tabIndex="0"
            >
              {currentItems.length ? (
                currentItems.map((article) => (
                  <InterestingItem
                    key={article.id}
                    image={article.image}
                    imageDescription={article.imageDescription}
                    data={article.data}
                    title={article.title}
                    id={article.id}
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </section>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.min(
              Math.ceil(articles.length / itemsPerPage),
              maxPages
            )}
            // onPageChange={setCurrentPage}
            onPageChange={(newPage) => {
              setCurrentPage(newPage);
              navigate(`/blog/${newPage}`);
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
