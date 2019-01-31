import React from 'react';
import Logo from '../../atoms/Logo';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Logo color="blue" style={{ height: 27 }} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" style={{ color: '#112D4E' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbar-primary">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="/">
                  <Logo color="blue" style={{ height: 27 }} />
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
              <a className="nav-link text-default" href="/#recomendations">MERGULHOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-default" href="/articles">ARTIGOS</a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
                <a className="dropdown-item" href="/#recomendations">MERGULHOS</a>
                <a className="dropdown-item" href="/articles">ARTIGOS</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
