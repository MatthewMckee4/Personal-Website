import React, { useState } from "react";
import styles from "./ProjectSlideShow.module.css";

function ProjectSlideShow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  return (
    images.length > 0 && (
      <div className={styles.slideshowContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`${styles.slideImage} ${
              index === currentSlide ? "" : "fadeOut"
            }`}
            style={slideStyle}
          />
        ))}
        <button
          onClick={prevSlide}
          className={styles.slideButton}
          aria-label="Previous Slide"
        >
          &#x2B05;
        </button>
        <button
          onClick={nextSlide}
          className={styles.slideButton}
          aria-label="Next Slide"
        >
          &#x27A1;
        </button>
      </div>
    )
  );
}

export default ProjectSlideShow;
