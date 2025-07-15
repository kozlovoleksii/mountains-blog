import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants/galleryData";
import "./GallerySection.css";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import bgImage from '../../assets/images/gallery-bg.webp';

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); 
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleChangeSlide((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const handleChangeSlide = (getNewIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) =>
        typeof getNewIndex === "function" ? getNewIndex(prev) : getNewIndex
      );
      setIsFading(false);
    }, 300);
  };

  const prevSlide = () => {
    handleChangeSlide(index === 0 ? images.length - 1 : index - 1);
    resetInterval();
  };

  const nextSlide = () => {
    handleChangeSlide(index === images.length - 1 ? 0 : index + 1);
    resetInterval();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="gallery" style={{
               backgroundImage: `url(${bgImage})`,
             }}>
      <div className="gallery__overlay" />
      <h2 className="gallery__title">Photo Gallery</h2>

      <div className="gallery__slider">
        <button className="gallery__nav left" onClick={prevSlide}>
          <GrFormPreviousLink />
        </button>

        <div className="gallery__image-wrapper" >
          <img
            src={images[index].src}
            alt={images[index].caption}
            className={`gallery__image ${isFading ? "fade" : ""}`}
          />
          <p className="gallery__caption">{images[index].caption}</p>
        </div>

        <button className="gallery__nav right" onClick={nextSlide}>
          <GrFormNextLink />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
