import React, { useState } from "react"; // à supprimer dès que le lien avec l'api est fait, sinon double emploi

interface FollowButtonProps {
  onFollow: () => void; // Fonction appelée lors du clic sur le bouton de suivi
  isFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({
  isFollowing,
  onFollow,
}) => {
  // le state local pourra être enlevé plus tard à priori
  const [isFollow, setIsFollowing] = useState(isFollowing);

  const handleFollowClick = () => {
    setIsFollowing(!isFollow);
    onFollow();
  };

  return (
    <button onClick={handleFollowClick}>
      {isFollow ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
