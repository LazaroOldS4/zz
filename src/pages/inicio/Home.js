import React, { useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de basura
import Modal from 'react-modal';

export function Home() {
  const [imageList, setImageList] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('imageList')) || [];
    setImageList(storedImages.map(image => ({ ...image, comments: [] })));
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageBase64 = reader.result;
        setImageList((prevImages) => [...prevImages, { url: imageBase64, reacted: false, comments: [] }]);
        localStorage.setItem('imageList', JSON.stringify([...imageList, { url: imageBase64, reacted: false, comments: [] }]));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSelectImage = (index) => {
    setSelectedImageIndex(index);
  };

  const handleDeleteImage = () => {
    if (selectedImageIndex !== null) {
      const updatedImages = imageList.filter((_, index) => index !== selectedImageIndex);
      setImageList(updatedImages);
      localStorage.setItem('imageList', JSON.stringify(updatedImages));
      setSelectedImageIndex(null);
    }
  };

  const handleImageDoubleClick = (index) => {
    const updatedImages = imageList.map((image, i) => (i === index ? { ...image, reacted: !image.reacted } : image));
    setImageList(updatedImages);
    localStorage.setItem('imageList', JSON.stringify(updatedImages));

    setTimeout(() => {
      setSelectedImageIndex(null);
    }, 500);
  };

  const openCommentModal = (index) => {
    setIsCommentModalOpen(true);
    setSelectedCommentIndex(index);
    setComment('');
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
    setSelectedCommentIndex(null);
    setComment('');
  };

  const addComment = () => {
    if (comment.trim() !== '' && selectedCommentIndex !== null) {
      setImageList((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[selectedCommentIndex].comments.push(comment);
        localStorage.setItem('imageList', JSON.stringify(updatedImages));
        return updatedImages;
      });
      setComment('');
    }
  };

  const deleteComment = (commentIndex) => {
    setImageList((prevImages) => {
      const updatedImages = [...prevImages];
      const currentImage = { ...updatedImages[selectedCommentIndex] };
      currentImage.comments = currentImage.comments.filter((_, index) => index !== commentIndex);
      updatedImages[selectedCommentIndex] = currentImage;
      localStorage.setItem('imageList', JSON.stringify(updatedImages));
      return updatedImages;
    });
  };

const heartIcon = <FontAwesomeIcon icon={faHeart} style={{ fontSize: '1.5em' }} />;


  return (
    <div className="instagram-container">
      <div className="header">
     
        <div className="user-actions">
          <button className="upload-btn" onClick={() => document.getElementById('imageInput').click()}>
            Subir Foto
          </button>
          {selectedImageIndex !== null && (
            <button className="delete-btn" onClick={handleDeleteImage}>
              Eliminar Foto
            </button>
          )}
        </div>
      </div>

      <div className="photo-grid">
        {imageList.map((image, index) => (
          <div
            key={index}
            className={`photo-item ${selectedImageIndex === index ? 'selected' : ''}`}
            onClick={() => handleSelectImage(index)}
            onDoubleClick={() => handleImageDoubleClick(index)}
          >
            {image.reacted && (
              <div className="reaction-overlay">
                {heartIcon}
              </div>
            )}
            <img src={image.url} alt={`Photo ${index + 1}`} />
            {selectedImageIndex === index && (
              <button className="comment-button" onClick={() => openCommentModal(index)}>
                Comentar
              </button>
            )}
          </div>
        ))}
      </div>

      <input
        type="file"
        id="imageInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      {/* Modal de comentarios */}
      <Modal
        isOpen={isCommentModalOpen}
        onRequestClose={closeCommentModal}
        contentLabel="Comentarios"
      >
        <h2>Comentarios</h2>
        <ul>
          {imageList[selectedCommentIndex]?.comments.map((c, i) => (
            <li key={i}>
              {c}
              <button onClick={() => deleteComment(i)}>
                <FontAwesomeIcon icon={faTrash} /> {/* Icono de basura */}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Añadir comentario"
          />
          <button onClick={addComment}>Comentar</button>
        </div>
        <button onClick={closeCommentModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

