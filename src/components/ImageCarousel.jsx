import { useEffect, useMemo, useState } from 'react';

function ImageCarousel({ images, alt, className = '', imageClassName = '' }) {
  const normalizedImages = useMemo(() => {
    if (!images) return [];
    if (Array.isArray(images)) return images.filter(Boolean);
    return [images].filter(Boolean);
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    setCurrentIndex((current) => Math.min(current, Math.max(normalizedImages.length - 1, 0)));
  }, [normalizedImages.length]);

  if (!normalizedImages.length) {
    return null;
  }

  const hasMultiple = normalizedImages.length > 1;
  const currentImage = normalizedImages[currentIndex];

  const goToPrevious = () => {
    if (!hasMultiple) return;
    setCurrentIndex((current) => (current - 1 + normalizedImages.length) % normalizedImages.length);
  };

  const goToNext = () => {
    if (!hasMultiple) return;
    setCurrentIndex((current) => (current + 1) % normalizedImages.length);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX == null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchEndX - touchStartX;

    if (Math.abs(delta) > 36) {
      if (delta < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStartX(null);
  };

  return (
    <div className={`image-carousel ${className}`}>
      <div
        className={`image-carousel__frame ${hasMultiple ? 'is-interactive' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img className={imageClassName} src={currentImage} alt={alt} draggable="false" />

        {hasMultiple ? (
          <>
            <button type="button" className="image-carousel__nav image-carousel__nav--prev" onClick={goToPrevious} aria-label="Previous image">
              ‹
            </button>
            <button type="button" className="image-carousel__nav image-carousel__nav--next" onClick={goToNext} aria-label="Next image">
              ›
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="image-carousel__dots" aria-label="Image navigation">
          {normalizedImages.map((image, index) => (
            <button
              type="button"
              key={`${alt}-${index}`}
              className={`image-carousel__dot ${index === currentIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === currentIndex}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ImageCarousel;