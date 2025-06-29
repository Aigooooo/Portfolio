import React, { useState, useEffect } from "react";
import "../css/gallery.css";
import galleryItems from "../data/gallery";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedImage]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>A visual journey through my professional and personal moments</p>
      </div>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item" onClick={() => openModal(item)}>
            <div className="image-container">
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="category-badge">{item.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <span className="modal-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-info">
        <h2>Professional Achievements & Recognition</h2>
        <p>
          This gallery showcases my professional journey through awards, certifications, and recognition. 
          From winning hackathons to earning my degree, speaking at seminars, and receiving workplace accolades, 
          each achievement represents a milestone in my career as a software developer.
        </p>
        <div className="photo-stats">
          <div className="stat">
            <h3>{galleryItems.length}</h3>
            <p>Achievements</p>
          </div>
          <div className="stat">
            <h3>{categories.length - 1}</h3>
            <p>Categories</p>
          </div>
          <div className="stat">
            <h3>2025</h3>
            <p>Latest Award</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery; 