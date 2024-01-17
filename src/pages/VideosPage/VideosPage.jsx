import React, { useState } from "react";
import "./videosPage.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import PageTitle from "@/components/PageTitle/PageTitle";
import PictureComponent from "@/../plugins/PictureComponent";
import PlayButton from "@/components/PlayButton/PlayButton";

import Pagination from "@/components/Pagination/Pagination";

import videoImage_1 from "@/img/videoImage/video_1-2.jpg";
import videoImage_2 from "@/img/videoImage/video_2-2.jpg";
import videoImage_3 from "@/img/videoImage/video_3-2.jpg";
import videoImage_4 from "@/img/videoImage/video_4-2.jpg";

import closeIcon from "@/img/icons/close_icon.svg";

import videosData from "@/data/videos.json";

import VideoItem from "./VideoItem/VideoItem";
import { useLocation } from "react-router-dom";
export default function VideosPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [popUpLink, setPopUpLink] = useState("");

  const [iframeRef, setIframeRef] = useState(null);

  const handlePopUpLink = (link) => {
    setPopUpLink(link);
  };

  const handleButtonClick = (event) => {
    const parentElement = event.currentTarget.closest(".videos__item");
    handlePopUpLink(parentElement.getAttribute("data-link"));
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    setIsLoaded(true);
  };

  const handleIframeRefChange = (iframe) => {
    setIframeRef(iframe);

    if (iframe) {
      iframe.focus();
    }
  };

  const handleVideoClose = () => {
    setIsLoaded(false);
    document.body.classList.remove("no-scroll");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const maxPages = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = videosData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="videoMain">
        <Header />

        <PageTitle>Vehicle videos</PageTitle>
        <div className="videos__wrapper">
          {isLoaded && (
            <div
              className="pupUpVideo"
              onClick={handleVideoClose}
              ref={handleIframeRefChange}
              tabIndex="0"
            >
              <div className="pupUpVideo__wrapper">
                <iframe
                  className="pupUpVideo__video"
                  width="867"
                  height="542"
                  src={"https://www.youtube.com/embed/" + popUpLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen="allowfullscreen"
                  tabIndex="0"
                ></iframe>
                <button
                  className="pupUpVideo__button"
                  aria-label="close video"
                  onClick={handleVideoClose}
                  tabIndex="0"
                >
                  <img
                    src={closeIcon}
                    alt="close video icon"
                    width="24"
                    height="24"
                    aria-hidden="true"
                    loading="eager"
                  />
                </button>
              </div>
            </div>
          )}

          <div className="videos__container">
            <p className="visibility-hidden">list of videos</p>
            {currentItems.length ? (
              currentItems.map((video) => (
                <VideoItem
                  key={video.id}
                  buttonClick={handleButtonClick}
                  image={video.image}
                  title={video.title}
                  imgDescription={video.imageDescription}
                  link={video.link}
                />
              ))
            ) : (
              <></>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.min(
              Math.ceil(videosData.length / itemsPerPage),
              maxPages
            )}
            onPageChange={setCurrentPage}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
