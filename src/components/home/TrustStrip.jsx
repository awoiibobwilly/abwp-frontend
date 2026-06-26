import {
    FaCheckCircle,
  } from "react-icons/fa";
  
  import "../../styles/home/trust-strip.css";
  
  /* ==========================================
     TRUST ITEMS
  ========================================== */
  
  const TRUST_ITEMS = [
  
    "Healthcare Technology",
  
    "Full-Stack Engineering",
  
    "Research",
  
    "Leadership",
  
    "Open Source",
  
  ];
  
  function TrustStrip() {
  
    return (
  
      <section className="trust-strip">
  
        <div className="container">
  
          <div className="trust-strip-content">
  
            {
  
              TRUST_ITEMS.map(
  
                (item) => (
  
                  <div
  
                    key={item}
  
                    className="trust-item"
  
                  >
  
                    <FaCheckCircle
                      className="trust-icon"
                    />
  
                    <span>
  
                      {item}
  
                    </span>
  
                  </div>
  
                )
  
              )
  
            }
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  }
  
  export default TrustStrip;