import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" data-widget="pushmenu" to="#"><i className="fa fa-bars"></i></Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="index3.html" className="nav-link">Home</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="#" className="nav-link">Contact</Link>
      </li>
    </ul>


    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>


    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" to="#">
          <i className="fa fa-comments-o"></i>
          <span className="badge badge-danger navbar-badge">3</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <Link to="#" className="dropdown-item">
            <div className="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fa fa-star"></i></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>

          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">

            <div className="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fa fa-star"></i></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">
            <div className="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fa fa-star"></i></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" to="#">
          <i className="fa fa-bell-o"></i>
          <span className="badge badge-warning navbar-badge">15</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Notifications</span>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">
            <i className="fa fa-envelope mr-2"></i> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">
            <i className="fa fa-users mr-2"></i> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item">
            <i className="fa fa-file mr-2"></i> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="#"><i
            className="fa fa-th-large"></i></Link>
      </li>
    </ul>
  </nav>
    </div>
  );
};
export default Navbar;
