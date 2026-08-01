import {
    FaSearch,
  } from "react-icons/fa";
  
  import "../../styles/knowledgeHub/hubSearch.css";
  
  function HubSearch() {
  
    return (
  
      <section className="hub-search section">
  
        <div className="container">
  
          <div className="hub-search-header">
  
            <span className="hub-search-badge">
  
              Search & Discover
  
            </span>
  
  
            <h2 className="section-title">
  
              Find Knowledge Faster
  
            </h2>
  
  
            <p className="section-subtitle">
  
              Search books, videos, publications,
              templates, and trusted resources
              across the Hub.
  
            </p>
  
          </div>
  
  
          <div className="hub-search-box">
  
            <FaSearch className="hub-search-icon" />
  
            <input
              type="text"
              placeholder="Search resources..."
            />
  
          </div>
  
  
          <div className="hub-search-filters">
  
            <button className="active">
  
              All
  
            </button>
  
  
            <button>
  
              Books
  
            </button>
  
  
            <button>
  
              Videos
  
            </button>
  
  
            <button>
  
              Publications
  
            </button>
  
  
            <button>
  
              Templates
  
            </button>
  
  
            <button>
  
              Links
  
            </button>
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  }
  
  export default HubSearch;