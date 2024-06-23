import "./Dashboard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Electric() {
  useEffect(() => {
    document.title = "Service";
  }, []);
  return (
    <div className="App">
      <body>
        <div class="app">
          <div class="app-body">
            <div class="app-body-main-content">
              <section class="service-section">
                <h2 class="logo-title">
                  <span>Electric Repairs</span>
                </h2>
                <center>
                  <img
                    className="img"
                    src="https://images.pexels.com/photos/8853474/pexels-photo-8853474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    height="200px"
                    width="300px"
                  />
                </center>
                <p>
                  Whether you're facing issues with faulty wiring,
                  malfunctioning outlets, circuit breaker problems, or any other
                  electrical issue, Easy Cleaning has got you covered. We
                  specialize in diagnosing and repairing a wide range of
                  electrical problems to keep your property running smoothly.
                  <div className="dis">
                    <ul>
                      <li>Comprehensive Electrical Repairs</li>
                      <li>Skilled and Certified Technicians</li>
                      <li>Prompt and Reliable Service</li>
                      <li>Thorough Inspections</li>
                      <li>Residential and Commercial Expertise</li>
                      <li>Upfront Pricing and Transparent Communication</li>
                    </ul>
                  </div>
                  <center>
                    <button class="flat-button">Reserve Service</button>
                  </center>
                </p>
              </section>
            </div>
          </div>
        </div>
        <script src="./script.js"></script>
      </body>
    </div>
  );
}

export default Electric;
