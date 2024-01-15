import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface UserProfileUpdateProps {
  onUpdateSuccess: (profile: UserProfile) => void;
}

const UserProfileUpdate: React.FC<UserProfileUpdateProps> = ({
  onUpdateSuccess,
}) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    username: "",
    bio: "",
    // Ajoute d'autres champs de profil ici
  });

  const history = useHistory();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu peux ajouter la logique pour mettre à jour le profil sur le backend
    // Par exemple, utiliser une API pour envoyer les nouvelles informations du profil
    console.log("Nouveau profil :", userProfile);

    // Simuler une mise à jour réussie pour cet exemple
    onUpdateSuccess(userProfile);

    // Rediriger vers la page de profil après la mise à jour
    history.push("/profile");
  };

  return (
    <div>
      <h1>Mise à jour du profil</h1>
      <form onSubmit={handleSubmit}>
        {/* ... (comme précédemment) */}
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
};

export default UserProfileUpdate;
