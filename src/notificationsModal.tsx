import React from "react";

interface Notification {
  id: number;
  content: string;
}

interface NotificationModalProps {
  notifications: Notification[]; // Liste des notifications
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
        {notifications.length === 0 ? (
          <p>Aucune nouvelle notification</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>{notification.content}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationModal;
