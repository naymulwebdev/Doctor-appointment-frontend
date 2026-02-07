import React from "react";
import { Link } from "react-router-dom";
import goo from "../../../assets/goo.png";
import face from "../../../assets/face.png";
import location from "../../../assets/location.png";
import call from "../../../assets/call.png";
import mass from "../../../assets/mess.png";
import panter from "../../../assets/pinter.png";

const Footer = () => {
  return (
    <div className="bg-primary footer-shape pt-30">
      <footer className="footer sm:footer-horizontal text-white p-10">
        <aside>
          <Link to="/" className="text-2xl font-bold">
            <span className="text-secondary">Medi</span>site
          </Link>
          <p>
            When Stan Britten established BritKare <br /> in 1995, he did so
            with a true desire <br /> to asist the medical community with <br />{" "}
            the quality care of their desire
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <Link className="link link-hover">
            {" "}
            <span>{"> "}</span>Service Areas
          </Link>
          <Link className="link link-hover">
            {" "}
            <span>{"> "}</span>Blogs
          </Link>
          <Link className="link link-hover">
            {" "}
            <span>{"> "}</span>About
          </Link>
          <Link className="link link-hover">
            {" "}
            <span>{"> "}</span>Contacts
          </Link>
          <Link className="link link-hover">
            {" "}
            <span>{"> "}</span>Solutions
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <Link className="link link-hover">
            <div className="flex items-center">
              <img src={location} alt="location" />
              <p className="ms-1">33 Street Saadi Town, near Malir cantt</p>
            </div>
          </Link>
          <Link className="link link-hover">
          <div className="flex items-center">
                    <img src={call} alt="call" />
                    <p className="ms-1">+92 322 2155556</p>
                </div>
          </Link>
          <Link className="link link-hover">
          <div className="flex items-center">
                    <img src={panter} alt="message" />
                    <p className="ms-1">+92 322 2155556</p>
                </div>
          </Link>
          <Link className="link link-hover">
          <div className="flex items-center">
                    <img src={mass} alt="panter" />
                    <p className="ms-1">myousufk87@gmail.com</p>
                </div>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Follow us on</h6>
          <div className="flex">
            <Link
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
              to="/"
            >
              <img src={face} alt="facebook" />
            </Link>
            <Link
              className="ms-2 bg-white rounded-full w-12 h-12 flex items-center justify-center"
              to="/"
            >
              <img src={goo} alt="google" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
