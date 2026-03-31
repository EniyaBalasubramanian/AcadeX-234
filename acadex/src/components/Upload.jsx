import { useState } from "react";

function Upload({ user }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select file");

    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    alert("Uploaded successfully!");
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>Upload Resource</h2>
        <p>Uploading as {user}</p>

        <div className="drop-box">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <button className="primary" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;

/*import { useState } from "react";

function Upload({ user }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user", user); // 🔥 IMPORTANT

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    alert("Uploaded successfully!");
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>Upload Resource</h2>
        <p>Uploading as {user}</p>

        <div className="drop-box">
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
        </div>

        <button className="primary" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;*/
