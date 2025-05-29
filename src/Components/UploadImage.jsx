import { useState,useEffect } from "react";
import axios from "axios";

const UploadImage = ({ onUpload,resetTrigger }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [imageFile,setImageFile] = useState(null);
  const [previewURL,setPreviewURL] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

setImageFile(file);
    setPreviewURL(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "product_image");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/doesnc9nt/image/upload",
        formData
      );
      setImageUrl(res.data.secure_url);
      onUpload(res.data.secure_url);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  setImageFile(null);
  setPreviewURL("");
  setImageUrl("");
}, [resetTrigger]);


  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {loading && <p>Uploading...</p>}
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" className="w-32 mt-2 rounded" />
      )}
    </div>
  );
};

export default UploadImage;
