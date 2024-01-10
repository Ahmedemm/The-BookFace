import React from "react";

interface LikesProps {
  likes: string[]; // Liste des noms d'utilisateur qui ont aimé la publication
}

const Likes: React.FC<LikesProps> = ({ likes }) => {
  return (
    <div>
      <h3>Likes</h3>
      {likes.length === 0 ? (
        <p>Aucun like pour le moment.</p>
      ) : (
        <ul>
          {likes.map((username, index) => (
            <li key={index}>{username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Likes;

