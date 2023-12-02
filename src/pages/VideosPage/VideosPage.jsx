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

import videosData from "@/data/videos.json";

import VideoItem from "./VideoItem/VideoItem";
export default function VideosPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [popUpLink, setPopUpLink] = useState("");

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
    document.body.classList.add("no-scroll");
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
      <Header />

      <PageTitle>Vehicle videos</PageTitle>

      {isLoaded && (
        <div className="pupUpVideo" onClick={handleVideoClose}>
          <iframe
            className="pupUpVideo__video"
            width="867"
            height="542"
            src={"https://www.youtube.com/embed/" + popUpLink}
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
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
      <Footer />
    </>
  );
}
