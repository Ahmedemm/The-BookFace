import React, { useState } from "react";
import FollowButton from "../components/Follow";
import { useNavigate } from "react-router";

interface UserProfileProps {
  username: string;
}

interface UserProfileData {
  bio: string;
  // Ajoute d'autres champs de profil ici
}

const UserProfile: React.FC = ({ username }) => {
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    bio: "",
    // Ajoute d'autres champs de profil ici
  });

  const navigate = useNavigate();
  const handleFollow = () => {
    // Logique pour effectuer le suivi ou le désabonnement de l'utilisateur
    console.log(
      `L'utilisateur a ${
        isFollowing ? "a arrêté de suivre" : "a commencé à suivre"
      } ${username}.`
    );
  };

  const handleUpdateClick = () => {
    // Redirige l'utilisateur vers la page de mise à jour du profil
    // history.push("/update-profile");
  };

  return null;

  return (
    <div>
      <h1>{username}</h1>
      <p>Bio: {userProfile.bio}</p>
      <p>
        <i>photo de profile</i>
      </p>
      {/* Affiche d'autres champs de profil ici */}
      <FollowButton onFollow={handleFollow} isFollowing />
      <button onClick={handleUpdateClick}>Mettre à jour le profil</button>
    </div>
  );
};

export default UserProfile;
