import React from 'react';
import { Input, InputAlternative } from 'design-system-react';

export default function Inputs() {
  return (
    <section className="section pb-0 section-components">
      <div className="container mb-5">
        {/* <!-- Inputs --> */}
        <h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
        <div className="mb-3">
          <small className="text-uppercase font-weight-bold">Form controls</small>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Input placeholder="Regular" />
          </div>
          <div className="col-lg-4">
            <Input placeholder="Regular" disabled />
          </div>
          <div className="col-lg-4">
            <Input placeholder="Regular" touched valid />
          </div>
        </div>
      </div>
      <div className="py-5 bg-secondary">
        <div className="container">
          {/* <!-- Inputs (alternative) --> */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">Form controls (alternative)</small>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <InputAlternative placeholder="Regular" />
              <InputAlternative placeholder="Regular" icon={<i className="ni ni-zoom-split-in" />} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <InputAlternative placeholder="Regular" disabled />
              <InputAlternative placeholder="Birthday" icon={<i className="ni ni-zoom-split-in" />} />
            </div>
            <div className="col-lg-4 col-sm-6">
              <InputAlternative placeholder="Success" touched valid />
              <InputAlternative placeholder="Error Input" touched invalid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
