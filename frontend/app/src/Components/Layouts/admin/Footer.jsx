import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="main-footer">
        <div class="float-right d-sm-none d-md-block">Anything you want</div>
        <strong>
          Copyright &copy; 2014-2018{" "}
          <Link to="https://adminlte.io">AdminLTE.io</Link>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </div>
  );
};
export default Footer;
