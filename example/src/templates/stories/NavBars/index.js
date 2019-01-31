import React from 'react';
import { NavBar } from 'design-system-react';

export default function NavBars() {
  return (
    <section className="bg-secondary">
      <div className="container">
        {/* <!-- Navigation --> */}
        <h2 className="mb-5">
          <span>Navbars</span>
        </h2>
      </div>
      {/* <!-- Navbar default --> */}
      <NavBar />
      <br />
      <nav className="navbar navbar-expand-lg navbar-dark bg-default">
        <div className="container">
          <a className="navbar-brand" href="#">Default Color</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-default">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="ni ni-favourite-28"></i>
                  <span className="nav-link-inner--text d-lg-none">Discover</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="ni ni-notification-70"></i>
                  <span className="nav-link-inner--text d-lg-none">Profile</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="ni ni-settings-gear-65"></i>
                  <span className="nav-link-inner--text d-lg-none">Settings</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar primary --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-4">
        <div className="container">
          <a className="navbar-brand" href="#">Primary Color</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-primary">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Discover
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar success --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success mt-4">
        <div className="container">
          <a className="navbar-brand" href="#">Success Color</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-success" aria-controls="navbar-success" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-success">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-success" aria-controls="navbar-success" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="ni ni-favourite-28"></i>
                  <span className="nav-link-inner--text d-lg-none">Favorites</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="ni ni-planet"></i>
                  <span className="nav-link-inner--text d-lg-none">Another action</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link nav-link-icon" href="#" id="navbar-success_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="ni ni-settings-gear-65"></i>
                  <span className="nav-link-inner--text d-lg-none">Settings</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-success_dropdown_1">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar danger --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger mt-4">
        <div className="container">
          <a className="navbar-brand" href="#">Danger Color</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-danger" aria-controls="navbar-danger" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-danger">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-danger" aria-controls="navbar-danger" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-facebook-square"></i>
                  <span className="nav-link-inner--text d-lg-none">Facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-twitter"></i>
                  <span className="nav-link-inner--text d-lg-none">Twitter</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-google-plus"></i>
                  <span className="nav-link-inner--text d-lg-none">Google +</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-instagram"></i>
                  <span className="nav-link-inner--text d-lg-none">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar warning --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning mt-4">
        <div className="container">
          <a className="navbar-brand" href="#">Warning Color</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-warning" aria-controls="navbar-warning" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-warning">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-warning" aria-controls="navbar-warning" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-facebook-square"></i>
                  <span className="nav-link-inner--text d-lg-none">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-twitter"></i>
                  <span className="nav-link-inner--text d-lg-none">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-pinterest"></i>
                  <span className="nav-link-inner--text d-lg-none">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar info --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-info mt-4">
        <div className="container">
          <a className="navbar-brand" href="#">Info Color</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-info" aria-controls="navbar-info" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-info">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-info" aria-controls="navbar-info" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-facebook-square"></i>
                  <span className="nav-link-inner--text">Facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-twitter"></i>
                  <span className="nav-link-inner--text">Twitter</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="#">
                  <i className="fa fa-instagram"></i>
                  <span className="nav-link-inner--text">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
