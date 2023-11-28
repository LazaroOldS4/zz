// Mensajes.js
import React, { useState } from "react";
import './mensajeria.css';

const Mensajes = () => {
  const [chats, setChats] = useState([
    { id: 1, nombre: "Luis Felipe ", mensajes: [] },
    { id: 2, nombre: "Jared de la cruz", mensajes: [] },
    // Agrega más amigos según sea necesario
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleChatSelection = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleSendMessage = () => {
    if (selectedChat !== null && newMessage.trim() !== '') {
      const updatedChats = [...chats];
      const chatIndex = updatedChats.findIndex((chat) => chat.id === selectedChat);
      updatedChats[chatIndex].mensajes.push({ texto: newMessage, enviadoPorUsuario: true });
      // Aquí puedes enviar el mensaje al servidor o realizar cualquier lógica adicional
      setChats(updatedChats);
      setNewMessage('');
    }
  };

  const handleDeleteMessage = (messageIndex) => {
    if (selectedChat !== null) {
      const updatedChats = [...chats];
      const chatIndex = updatedChats.findIndex((chat) => chat.id === selectedChat);
      updatedChats[chatIndex].mensajes.splice(messageIndex, 1);
      setChats(updatedChats);
    }
  };

  return (
    <div className="mensajes-container">
      <div className="chats-list">
        <h2>Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} onClick={() => handleChatSelection(chat.id)}>
              {chat.nombre}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-window">
        {selectedChat !== null && (
          <>
            <h2>{`Chat con ${chats.find((chat) => chat.id === selectedChat).nombre}`}</h2>
            <div className="mensajes">
              {chats.find((chat) => chat.id === selectedChat).mensajes.map((mensaje, index) => (
                <div key={index} className={mensaje.enviadoPorUsuario ? "mensaje-usuario" : "mensaje-amigo"}>
                  <div className="mensaje-texto">{mensaje.texto}</div>
                  {mensaje.enviadoPorUsuario && (
                    <button className="eliminar-btn" onClick={() => handleDeleteMessage(index)}>Eliminar</button>
                  )}
                </div>
              ))}
            </div>
            <div className="nuevo-mensaje">
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mensajes;
