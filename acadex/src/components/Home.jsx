/*function Home({ setPage }) {
  return (
    <div className="home">

      <p className="tag">✨ Academic Resource Sharing Platform</p>

      <h1 className="title">
        Share Knowledge, <br />
        <span>Empower Learning</span>
      </h1>


      <p className="desc">
        Upload, discover, and download academic resources — notes,
        assignments, presentations, and research documents — all in one place.
      </p>

  
      <div className="buttons">
        <button
          className="primary"
          onClick={() => setPage("view")}
        >
          📂 View Files
        </button>

        <button
          className="secondary"
          onClick={() => setPage("upload")}
        >
          ⬆ Upload Files
        </button>
      </div>

      
      <div className="cards">

        <div className="card">
          <h3>📘 Rich Resources</h3>
          <p>Notes, slides, assignments & research papers</p>
        </div>

        <div className="card">
          <h3>👥 Community Driven</h3>
          <p>Students & faculty sharing knowledge</p>
        </div>

        <div className="card">
          <h3>🔒 Secure & Fast</h3>
          <p>Your files, safely stored and accessible</p>
        </div>

      </div>

    </div>
  );
}

export default Home;*/

/*function Home({ setPage }) {
  return (
    <div className="home">
      <h1 className="title">
        Share Knowledge <br />
        <span>Empower Learning</span>
      </h1>

      <p className="desc">
        Upload, discover and download academic resources in one place.
      </p>

      <button onClick={() => setPage("view")}>View Files</button>
      <button onClick={() => setPage("upload")}>Upload Files</button>
    </div>
  );
}

export default Home;*/

function Home({ setPage }) {
  return (
    <div className="home">

      <p className="tag">✨ Academic Resource Sharing Platform</p>

      <h1 className="title">
        Share Knowledge, <br />
        <span>Empower Learning</span>
      </h1>

      <p className="desc">
        Upload, discover, and download academic resources — notes,
        assignments, presentations, and research documents — all in one place.
      </p>

      <div className="buttons">
        <button className="primary" onClick={() => setPage("view")}>
          📂 View Files
        </button>

        <button className="primary" onClick={() => setPage("upload")}>
          ⬆ Upload Files
        </button>
      </div>

      <div className="cards">
        <div className="card">📘 Rich Resources</div>
        <div className="card">👥 Community Driven</div>
        <div className="card">🔒 Secure & Fast</div>
      </div>

    </div>
  );
}
export default Home;