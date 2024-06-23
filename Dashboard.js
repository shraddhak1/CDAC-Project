import "./Dashboard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <>
      <meta charSet="UTF-8" />
      <title>Dashboard</title>
      <div className="app">
        <header className="app-header">
          <div className="app-header-logo">
            <div className="logo">
              <span className="logo-icon">
                <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
              </span>
              <h1 className="logo-title">
                <span>Easy</span>
                <span>Cleaning</span>
              </h1>
            </div>
          </div>
          <div className="app-header-navigation">
            <div className="tabs">
              <a href="#" className="active">
                {" "}
                Overview{" "}
              </a>
              <a href="#"> Payments </a>
              <a href="#"> Cards </a>
              <a href="#"> Account </a>
              <a href="#"> System </a>
              <a href="#"> Business </a>
            </div>
          </div>
          <div className="app-header-mobile">
            <button className="icon-button large">
              <i className="ph-list" />
            </button>
          </div>
        </header>
        <div className="app-body">
          <div className="app-body-main-content">
            <section className="service-section">
              <h2>Service</h2>
              <div className="mobile-only">
                <button className="flat-button">Toggle search</button>
              </div>
              <div className="tiles">
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-lightning-light" />
                    <h3>
                      <span>Electrical Repairs</span>
                      <span>
                        Your trusted partner for comprehensive electrical repair
                        services. With a commitment to excellence and a team of
                        skilled professionals, we deliver top-notch solutions to
                        ensure the optimal functioning of your electrical
                        systems.
                      </span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <i className="ph-caret-right-bold" />
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-fire-simple-light" />
                    <h3>
                      <span>Beauty and Selfcare</span>
                      <span>
                        Indulge in the luxury of self-care with Easy Cleaning ,
                        where beauty meets well-being. At Easy Cleaning , we are
                        passionate about enhancing your natural beauty and
                        promoting self-love through our premium beauty and
                        self-care services.
                      </span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <i className="ph-caret-right-bold" />
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-file-light" />
                    <h3>
                      <span>Deep Cleaning</span>
                      <span>
                        Revitalize your living space with our comprehensive home
                        deep cleaning services. From deep carpet cleaning to
                        detailed kitchen and bathroom sanitization, we address
                        every aspect of your home, creating a healthier and more
                        comfortable living environment for you and your loved
                        ones.
                      </span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <i className="ph-caret-right-bold" />
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-lightning-light" />
                    <h3>
                      <span>Electricity</span>
                      <span></span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <i className="ph-caret-right-bold" />
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-fire-simple-light" />
                    <h3>
                      <span>Heating Gas</span>
                      <span></span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <i className="ph-caret-right-bold" />
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-file-light" />
                    <h3>
                      <span>Tax online</span>
                      <span></span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <i className="ph-caret-right-bold" />
                  </a>
                </article>
              </div>
              <div className="service-section-footer">
                <p>
                  Services are paid according to the current state of the
                  currency and tariff.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
