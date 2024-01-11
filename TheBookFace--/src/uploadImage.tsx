// Importe le module http-common qui semble être une configuration ou un wrapper autour de la bibliothèque Axios.
import http from "../http-common";

// Définit une fonction upload qui prend un objet de fichier (de type File) et une fonction de gestion de progression.
const upload = (file: File, onUploadProgress: any): Promise<any> => {
  // Crée un objet FormData, qui est utilisé pour construire facilement des paires clé-valeur pour envoyer des données dans le corps d'une requête HTTP multipart/form-data.
  let formData = new FormData();

  // Ajoute le fichier au FormData avec la clé "file".
  formData.append("file", file);

  // Effectue une requête HTTP POST vers l'URL "/upload" en utilisant Axios.
  // Les données envoyées sont l'objet FormData construit précédemment.
  // Les options de la requête incluent un en-tête spécifiant le type de contenu comme "multipart/form-data" et un gestionnaire de progression éventuel.
  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

// Définit une fonction getFiles qui effectue une requête HTTP GET vers l'URL "/files" en utilisant Axios.
const getFiles = (): Promise<any> => {
  return http.get("/files");
};

// Crée un objet FileUploadService avec deux propriétés : upload et getFiles.
const FileUploadService = {
  upload,
  getFiles,
};

// Exporte l'objet FileUploadService en tant que valeur par défaut du module.
export default FileUploadService;
