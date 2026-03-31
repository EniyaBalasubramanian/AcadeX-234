import { useEffect } from "react";

function View({ files, fetchFiles }) {
  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return (
    <div className="view-container">
      <h2>Shared Resources</h2>

      {files.map((file, i) => (
        <div className="file-card" key={i}>
          <p>{file}</p>

          <a
            href={`http://localhost:5000/uploads/${file}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="download-btn">Download</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default View;

/*import { useEffect } from "react";

function View({ files, fetchFiles }) {
  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return (
    <div className="view-container">
      <h2>Shared Resources</h2>

      {files.map((file, i) => (
        <div className="file-card" key={i}>

          <div>
            <p className="file-name">📄 {file.filename}</p>
            <small>Uploaded by {file.user}</small>
          </div>

          <a
            href={`http://localhost:5000/uploads/${file.filename}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="download-btn">Download</button>
          </a>

        </div>
      ))}
    </div>
  );
}

export default View;*/