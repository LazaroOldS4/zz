import React, { useState, useEffect } from 'react';
import './styles.css';

export function Home() {
  const [imageList, setImageList] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('imageList')) || [];
    setImageList(storedImages);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageBase64 = reader.result;
        setImageList((prevImages) => [...prevImages, imageBase64]);
        localStorage.setItem('imageList', JSON.stringify([...imageList, imageBase64]));
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

  // Dividir las imágenes en grupos de 3 para renderizarlas en filas
  const groupedImages = [];
  for (let i = 0; i < imageList.length; i += 3) {
    groupedImages.push(imageList.slice(i, i + 3));
  }

  return (
    <div className="message-container">
      <div className="rectangulo">
        <div className="servemp" style={{ textAlign: 'center' }}>
          {/* Mantén la imagen aquí */}
          <img className="message-image" src="/zetta.jpeg" style={{ width: '400px', height: '150px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'Trebuchet MS', fontSize: 'x-large', color: 'rgb(79, 47, 57)', margin: 0 }}>
            
          </p>
          {/* Botones para subir y eliminar fotos en la misma línea, a la derecha */}
          {selectedImageIndex !== null && (
            <button className="delete-image-btn" onClick={handleDeleteImage}>
              Eliminar Foto
            </button>
          )}
          <button
            className="select-image-btn"
            onClick={() => document.getElementById('imageInput').click()}
          >
            Seleccionar foto
          </button>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="app-container">
        <div className="text-container">
          <p>Tus Publicaciones</p>
        </div>
        {groupedImages.map((row, rowIndex) => (
          <div key={rowIndex} className="image-row">
            {row.map((image, colIndex) => (
              <div key={colIndex} className="selected-image-container">
                <img
                  className={`message-image ${selectedImageIndex === rowIndex * 3 + colIndex ? 'selected' : ''}`}
                  src={image}
                  alt={`Selected ${rowIndex * 3 + colIndex + 1}`}
                  style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                  onClick={() => handleSelectImage(rowIndex * 3 + colIndex)}
                />
              </div>
            ))}
          </div>
        ))}
        <div style={{ position: 'relative', height: '500px' }}>
          {/* Otro contenido del componente */}
        </div>
      </div>
    </div>
  );
}

export default Home;
