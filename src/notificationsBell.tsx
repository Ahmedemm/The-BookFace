import React, { useState } from "react";
import NotificationModal from "./NotificationsModal";

interface NotificationBellProps {
  notifications: string[]; // Liste des notifications
}

const NotificationBell: React.FC<NotificationBellProps> = ({
  notifications,
}) => {
  const [showModal, setShowModal] = useState(false);

  const unreadNotificationsCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const handleBellClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div onClick={handleBellClick} style={{ cursor: "pointer" }}>
        {/* La clochette avec le point rouge indiquant les notifications non lues */}
        <span role="img" aria-label="Notification Bell">
          🔔{" "}
          {unreadNotificationsCount > 0 && (
            <span style={{ color: "red" }}>●</span>
          )}
        </span>
      </div>

      {/* Afficher le modal si showModal est vrai */}
      {showModal && (
        <NotificationModal
          notifications={notifications}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default NotificationBell;
