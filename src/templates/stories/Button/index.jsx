import React, { Component } from 'react'

// import styles from './styles.css'

export default class ExampleComponent extends Component {
  render() {
    return (
      <section className="section section-components pb-0" id="section-components">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {/* <!-- Basic elements --> */}
              <h2 className="mb-5">
                <span>Basic Elements</span>
              </h2>
              {/* <!-- Buttons --> */}
              <h3 className="h4 text-success font-weight-bold mb-4">Buttons</h3>
              {/* <!-- Button styles --> */}
              <div>
                <button className="btn btn-primary" type="button">Button</button>
                <button className="btn btn-icon btn-3 btn-primary" type="button">
                  <span className="btn-inner--icon"><i className="ni ni-bag-17"></i></span>
                  <span className="btn-inner--text">With icon</span>
                </button>
                <button className="btn btn-icon btn-2 btn-primary" type="button">
                  <span className="btn-inner--icon"><i className="ni ni-bag-17"></i></span>
                </button>
                {/* <!-- Button wizes --> */}
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">Pick your size</small>
                </div>
                <button className="btn btn-sm btn-primary" type="button">Small</button>
                <button className="btn btn-1 btn-primary" type="button">Regular</button>
                <button className="btn btn-lg btn-primary" type="button">Large Button</button>
              </div>
              {/* <!-- Button colors --> */}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">Pick your color</small>
              </div>
              <button className="btn btn-1 btn-primary" type="button">Primary</button>
              <button className="btn btn-1 btn-info" type="button">Info</button>
              <button className="btn btn-1 btn-success" type="button">Success</button>
              <button className="btn btn-1 btn-warning" type="button">Warning</button>
              <button className="btn btn-1 btn-danger" type="button">Danger</button>
              <button className="btn btn-1 btn-neutral" type="button">Neutral</button>
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">Outline</small>
              </div>
              <button className="btn btn-1 btn-outline-primary" type="button">Outline-primary</button>
              <button className="btn btn-1 btn-outline-info" type="button">Outline-info</button>
              <button className="btn btn-1 btn-outline-success" type="button">Outline-success</button>
              <button className="btn btn-1 btn-outline-warning" type="button">Outline-warning</button>
              <button className="btn btn-1 btn-outline-danger" type="button">Outline-danger</button>
              {/* <!-- Button links --> */}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">Links</small>
              </div>
              <a href="#" className="btn btn-link text-default">Default</a>
              <a href="#" className="btn btn-link text-primary">Primary</a>
              <a href="#" className="btn btn-link text-info">Info</a>
              <a href="#" className="btn btn-link text-success">Success</a>
              <a href="#" className="btn btn-link text-warning">Warning</a>
              <a href="#" className="btn btn-link text-danger">Danger</a>
            </div>
          </div>
        </div>
    </section>
    )
  }
}
