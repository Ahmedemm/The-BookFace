import React from "react";

interface NotificationModalProps {
  notifications: string[]; // Liste des notifications
  onClose: () => void; // Fonction appelée lors de la fermeture du modal
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  notifications,
  onClose,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default notificationsModal;
