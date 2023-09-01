import React, { useState, useEffect } from "react";
// ... Other imports ...

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoResults, setVideoResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
        const apiKey = 'AIzaSyD06F1AzAlsW4UGLgOE9do6-kzYY8DNfZQ';
      const query = encodeURIComponent(searchQuery);

      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setVideoResults(data.items || []);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    } else {
      setVideoResults([]);
    }
  }, [searchQuery]);

  return (
    <div>
      {/* ... Other JSX ... */}
      <form className="d-flex navInput" role="search">
        <div className="input-group">
          <input
            type="text"
            className="form-control navSearch"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {/* ... Other JSX ... */}
        </div>
      </form>
      {/* Display Video Results */}
      <div className="video-results">
        {videoResults.map(video => (
          <div key={video.id.videoId} className="video-item">
            <img src={video.snippet.thumbnails.default.url} alt="Video Thumbnail" />
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
