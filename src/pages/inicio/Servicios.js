// Servicios.js
import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import './servicio.css';

export function Servicios() {
  const [empleados, setEmpleados] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const consultarEmpleados = async () => {
    const consultar = await Axios.get("/empleado");
    console.log(consultar.data);
    setEmpleados(consultar.data);
  };

  useEffect(() => {
    consultarEmpleados();
  }, []);

  const handleImageChange = (event, empleadoId) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageBase64 = reader.result;
        setImageList((prevImages) => [...prevImages, imageBase64]);
        setSelectedImageIndex(prevIndex => prevIndex === null ? 0 : prevIndex + 1);
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
      setSelectedImageIndex(null);
    }
  };

  // Dividir las imágenes en grupos de 3 para renderizarlas en filas
  const groupedImages = [];
  for (let i = 0; i < imageList.length; i += 3) {
    groupedImages.push(imageList.slice(i, i + 3));
  }

  return (
    <div>
      <div className="header">
        {/* Mueve el botón Seleccionar Foto aquí y aplica estilos */}
        <label htmlFor="imageInput" className="select-image-btn">
          Seleccionar foto
        </label>

        {/* Mueve el botón Eliminar Foto aquí si es necesario */}
        {selectedImageIndex !== null && (
          <button className="delete-image-btn" onClick={handleDeleteImage}>
            Eliminar Foto
          </button>
        )}
      </div>
      {/* Resto del código permanece sin cambios */}
      <div className="servemp" style={{ textAlign: 'center' }}>
        {/* Mantén la imagen predeterminada aquí */}
        <img className="message-image" src="/zetta.jpeg" alt="Zetta" />
      </div>
      <div className="row">
        {empleados.map((empleado) => (
          <div className="col-4 p-2" key={empleado.id}>
            {/* Resto del contenido del componente */}
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{empleado.nombre} {empleado.apellidos}</h5>
                    <p className="card-text">
                      {empleado.telefono}
                    </p>
                    <p className="card-text">
                      {empleado.trabajo}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{empleado.sexo}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-info">Contratar...</button>
          </div>
        ))}
      </div>
      <div className="image-container">
        {/* Mostrar las imágenes seleccionadas debajo de la imagen predeterminada */}
        {groupedImages.map((row, rowIndex) => (
          <div key={rowIndex} className="image-row">
            {row.map((image, colIndex) => (
              <div key={colIndex} className="selected-image-container">
                <img
                  className={`message-image ${selectedImageIndex === rowIndex * 3 + colIndex ? 'selected' : ''}`}
                  src={image}
                  alt={`Selected ${rowIndex * 3 + colIndex + 1}`}
                  onClick={() => handleSelectImage(rowIndex * 3 + colIndex)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Muestra la capa de entrada de tipo file */}
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => handleImageChange(e, /* Pasa el ID del empleado aquí */)}
      />
    </div>
  );
}
