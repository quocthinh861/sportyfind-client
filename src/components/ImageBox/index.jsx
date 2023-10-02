import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";
import styled from "styled-components";
import moreIcon from "../../assets/images/icons/more.png";
const images = [
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
    loading: "lazy",
    alt: "Windows 10 Dark Mode Setting",
  },
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png",
    loading: "lazy",
    alt: "macOS Mojave Dark Mode Setting",
  },
  {
    src: "https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg",
    loading: "lazy",
    alt: "Android 9.0 Dark Mode Setting",
  },
];

function CustomLeftArrowButton({ onClick }) {
  return (
    <button
      className="prev-button"
      style={{
        color: "#fff",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "3rem",
        fontWeight: "bold",
        marginLeft: "2rem",
        zIndex: 9999, // Set a high z-index
      }}
      onClick={onClick}
    >
      {"<"}
    </button>
  );
}

function CustomRightArrowButton({ onClick }) {
  return (
    <button
      className="next-button"
      style={{
        color: "#fff",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "3rem",
        fontWeight: "bold",
        marginRight: "2rem",
        zIndex: 99, // Set a high z-index
      }}
      onClick={onClick}
    >
      {/* You can customize the right arrow icon or text here */}
      {">"}
    </button>
  );
}

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MoreIcon = styled.img`
  width: 50px;
  object-fit: cover;
`;

const ImageItem = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
  :first-of-type {
    margin-left: 0;
`;

const CoolLightbox = ({ isOpen, onClick, images, onShow, currentImageIndex, setCurrentIndex, onClose }) => {
  const gotoPrevious = () => {
    console.log("gotoPrevious");
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
  };

  const gotoNext = () => {
    console.log("gotoNext");
    currentImageIndex + 1 < images.length &&
      setCurrentIndex(currentImageIndex + 1);
  };

  return (
    <>
      <div>
        <div className="d-flex align-items-center">
          {
            images.map((image, index) => {
              return (
                <ImageItem className="">
                  <a className="d-flex justify-center">
                    <Image src={image.src} onClick={() => onClick(index)} />
                  </a>
                </ImageItem>
              );
            })
          }
          <ImageItem className="d-flex justify-content-center align-items-center">
            <a>
              <MoreIcon src={moreIcon} onClick={() => onShow()} />
            </a>
          </ImageItem>
        </div>
      </div>
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        onClose={() => {}}
        images={images}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        renderHeader={() => (
          <button
            className="close-button"
            style={{
              color: "#fff",
              border: "none",
              fontSize: "2rem",
              fontWeight: "bold",
              marginRight: "2rem",
              position: "absolute",
              top: "2rem",
              right: "0",
              zIndex: 9999, // Set a high z-index
            }}
            onClick={() => {
              onClose();
            }}
          >
            X
          </button>
        )}
        // renderFooter={() => (<CustomFooter />)}
        renderPrevButton={() => (
          <CustomLeftArrowButton onClick={gotoPrevious} />
        )}
        renderNextButton={() => <CustomRightArrowButton onClick={gotoNext} />}
        renderCustomControls={() => <div>My custom controls</div>}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        className="cool-class"
        style={{ background: "#000", zIndex: 2000 }}
        /* Handle closing */
        // onClose={handleClose}

        /* Use single or double click to zoom */
        singleClickToZoom
        /* react-spring config for open/close animation */
        pageTransitionConfig={{
          from: { transform: "scale(0.75)", opacity: 0 },
          enter: { transform: "scale(1)", opacity: 1 },
          leave: { transform: "scale(0.75)", opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 },
        }}
      />
    </>
  );
};

export default CoolLightbox;
