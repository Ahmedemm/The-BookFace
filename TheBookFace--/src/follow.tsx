import React, { useState } from "react";

interface FollowButtonProps {
  onFollow: () => void; // Fonction appelée lors du clic sur le bouton de suivi
}

const FollowButton: React.FC<FollowButtonProps> = ({ onFollow }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    onFollow();
  };

  return (
    <button onClick={handleFollowClick}>
      {isFollowing ? "Ne plus suivre" : "Suivre"}
    </button>
  );
};

export default FollowButton;
