import React from "react";
import {Link} from 'react-router-dom'

const sidebar = () => {
  return (
    <div>

 <aside class="main-sidebar sidebar-dark-primary elevation-4">

    <Link to="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </Link>


    <div class="sidebar">

      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="info">
         <Link to="#" class="d-block">Alexander Pierce</Link>
        </div>
      </div>


      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li class="nav-item has-treeview menu-open">
           <Link to="#" class="nav-link active">
              <i class="nav-icon fa fa-dashboard"></i>
              <p>
                Dashboard
                <i class="right fa fa-angle-left"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="./index.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Dashboard v1</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="./index2.html" class="nav-link active">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Dashboard v2</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="./index3.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Dashboard v3</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
           <Link to="pages/widgets.html" class="nav-link">
              <i class="nav-icon fa fa-th"></i>
              <p>
                Widgets
                <span class="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-pie-chart"></i>
              <p>
                Charts
                <i class="right fa fa-angle-left"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/charts/chartjs.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>ChartJS</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/charts/flot.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Flot</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/charts/inline.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Inline</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-tree"></i>
              <p>
                UI Elements
                <i class="fa fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/UI/general.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>General</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/UI/icons.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Icons</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/UI/buttons.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Buttons</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/UI/sliders.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Sliders</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-edit"></i>
              <p>
                Forms
                <i class="fa fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/forms/general.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>General Elements</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/forms/advanced.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Advanced Elements</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/forms/editors.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Editors</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-table"></i>
              <p>
                Tables
                <i class="fa fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/tables/simple.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Simple Tables</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/tables/data.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Data Tables</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-header">EXAMPLES</li>
          <li class="nav-item">
           <Link to="pages/calendar.html" class="nav-link">
              <i class="nav-icon fa fa-calendar"></i>
              <p>
                Calendar
                <span class="badge badge-info right">2</span>
              </p>
            </Link>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-envelope-o"></i>
              <p>
                Mailbox
                <i class="fa fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/mailbox/mailbox.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Inbox</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/mailbox/compose.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Compose</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/mailbox/read-mail.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Read</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-book"></i>
              <p>
                Pages
                <i class="fa fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/examples/invoice.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Invoice</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/examples/profile.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Profile</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/examples/login.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Login</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/examples/register.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Register</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/examples/lockscreen.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Lockscreen</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-plus-square-o"></i>
              <p>
                Extras
                <i class="fa fa-angle-left right"></i>
              </p>
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
               <Link to="pages/examples/404.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Error 404</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/examples/500.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Error 500</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="pages/examples/blank.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Blank Page</p>
                </Link>
              </li>
              <li class="nav-item">
               <Link to="starter.html" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>Starter Page</p>
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-header">MISCELLANEOUS</li>
          <li class="nav-item">
           <Link to="https://adminlte.io/docs" class="nav-link">
              <i class="nav-icon fa fa-file"></i>
              <p>Documentation</p>
            </Link>
          </li>
          <li class="nav-header">LABELS</li>
          <li class="nav-item">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-circle-o text-danger"></i>
              <p class="text">Important</p>
            </Link>
          </li>
          <li class="nav-item">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-circle-o text-warning"></i>
              <p>Warning</p>
            </Link>
          </li>
          <li class="nav-item">
           <Link to="#" class="nav-link">
              <i class="nav-icon fa fa-circle-o text-info"></i>
              <p>Informational</p>
            </Link>
          </li>
        </ul>
      </nav>

    </div>

  </aside>
    </div>
  );
};
export default sidebar;
