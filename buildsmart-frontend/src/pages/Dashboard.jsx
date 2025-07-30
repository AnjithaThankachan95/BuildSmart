import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import news1 from '../assets/images/apartment.jpeg';
import news2 from '../assets/images/iso.jpeg';
import news3 from '../assets/images/sara.jpeg';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      {/* Tagline */}
      <div className="text-center py-5 bg-primary text-white rounded shadow-sm mb-4">
        <h1 className="display-5 fw-bold">We build your dream</h1>
        <p className="lead">Welcome to <strong>BuildSmart</strong> — the future of construction project management.</p>
      </div>

      {/* Latest News Section */}
      <div>
        <h3 className="mb-4">Latest News & Updates</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={news1} alt="News 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">New Residential Project Launched</h5>
                <p className="card-text">BuildSmart has kicked off a new 400-unit residential tower in downtown Edmonton with a focus on sustainability and smart tech.</p>
                <a href="#" className="btn btn-primary btn-sm">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={news2} alt="News 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">ISO Certification Achieved</h5>
                <p className="card-text">We’re proud to announce our ISO 9001 certification for quality management in project execution and client delivery.</p>
                <a href="#" className="btn btn-primary btn-sm">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={news3} alt="News 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Employee Spotlight: Sarah James</h5>
                <p className="card-text">Our senior project manager shares insights on efficient team coordination and leading construction in challenging conditions.</p>
                <a href="#" className="btn btn-primary btn-sm">Meet Sarah</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
