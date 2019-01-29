import React from 'react';
import { Button, Link } from '../../../atoms';

// import styles from './styles.css'

export default function ExampleComponent() {
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
              <Button title="Button" />
              <Button title="With icon" icon={<i className="ni ni-bag-17" />} />
              <Button icon={<i className="ni ni-bag-17" />} />
              {/* <!-- Button wizes --> */}
              <div className="mb-3 mt-5">
                <small className="text-uppercase font-weight-bold">Pick your size</small>
              </div>
              <Button title="Small" size="sm" />
              <Button title="Regular" size="md" />
              <Button title="Large Button" size="lg" />
            </div>
            {/* <!-- Button colors --> */}
            <div className="mb-3 mt-5">
              <small className="text-uppercase font-weight-bold">Pick your color</small>
            </div>
            <Button color="primary" title="Primary" />
            <Button color="info" title="Info" />
            <Button color="success" title="Success" />
            <Button color="warning" title="Warning" />
            <Button color="danger" title="Danger" />
            <Button color="neutral" title="Neutral" />
            <div className="mb-3 mt-5">
              <small className="text-uppercase font-weight-bold">Outline</small>
            </div>
            <Button outline color="primary" title="Outline-primary" />
            <Button outline color="info" title="Outline-info" />
            <Button outline color="success" title="Outline-success" />
            <Button outline color="warning" title="Outline-warning" />
            <Button outline color="danger" title="Outline-danger" />
            {/* <!-- Button links --> */}
            <div className="mb-3 mt-5">
              <small className="text-uppercase font-weight-bold">Links</small>
            </div>
            <Link to="/" color="default">Default</Link>
            <Link to="/" color="primary">Primary</Link>
            <Link to="/" color="info">Info</Link>
            <Link to="/" color="success">Success</Link>
            <Link to="/" color="warning">Warning</Link>
            <Link to="/" color="danger">Danger</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
