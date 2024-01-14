import React from "react";
import FollowButton from "./follow";

interface UserProfileProps {
  username: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  const handleFollow = () => {
    // Logique pour effectuer le suivi ou le désabonnement de l'utilisateur
    console.log(
      `L'utilisateur a ${
        isFollowing ? "a arrêté de suivre" : "a commencé à suivre"
      } ${username}.`
    );
  };

  return (
    <div>
      <h1>{username}</h1>
      {/* Autres détails du profil */}
      <FollowButton onFollow={handleFollow} />
    </div>
  );
};

export default UserProfile;
