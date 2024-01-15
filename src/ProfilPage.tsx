import React, { useState } from "react";

interface UserProfileProps {
  userProfile: {
    username: string;
    bio: string;
    // Ajoute d'autres champs de profil ici
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ userProfile }) => {
  return (
    <div>
      <h1>Profil de {userProfile.username}</h1>
      <p>Username: {userProfile.username}</p>
      <p>Bio: {userProfile.bio}</p>
      <p>Les follows</p>
      <i>photo de profil</i>
      {/* Affiche d'autres champs de profil ici */}
    </div>
  );
};

export default UserProfile;
