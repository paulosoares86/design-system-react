import React from 'react';
import Logo from '../../atoms/Logo';

const LogoLink = () => <a href="/"><Logo color="blue" style={{ height: 27 }} /></a>;

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <LogoLink />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-white" aria-controls="navbar-white" aria-expanded="false" aria-label="Toggle navigation" style={{ padding: 0 }}>
          <i className="fas fa-bars" style={{ color: '#112D4E', width: 40 }} />
        </button>
        <div className="collapse navbar-collapse" id="navbar-white">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <LogoLink />
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-white" aria-controls="navbar-white" aria-expanded="false" aria-label="Toggle navigation">
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <a className="nav-link text-default" href="/#recomendations">MERGULHOS</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-default" href="/articles">ARTIGOS</a>
            </li> */}
            <li className="nav-item dropdown">
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-white_dropdown_1">
                <a className="dropdown-item" href="/#recomendations">MERGULHOS</a>
                {/* <a className="dropdown-item" href="/articles">ARTIGOS</a> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
