import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div>
      <footer className="w-11/12 mx-auto footer sm:footer-horizontal bg-black text-white  p-10">
        <aside>
          <p className="font font-semibold text-2xl ">Cs-ticket System.</p>
          <p className="text-lg text-justify">
            CS-Ticket System is a modern <br />
            customer support platform <br />
            designed to help companies
            <br />
            manage, track, and resolve <br />
            customer issues efficiently.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-2xl">Company </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Social Links</h6>
         
          <div className="flex flex-row justify-between gap-1.5">
            <p className="text-2xl ">
              <FaSquareFacebook />
            </p>
            <a className="link link-hover "> @CS — Ticket fb page</a>
          </div>
          <div className="flex flex-row justify-between gap-1.5">
            <p className="text-2xl ">
              <FaTwitter />
            </p>
            <a className="link link-hover "> @CS — Ticket twitter page</a>
          </div>
          <div className="flex flex-row justify-between gap-1.5">
            <p className="text-2xl ">
              <FaLinkedinIn />
            </p>
            <a className="link link-hover "> @CS — Ticket linkedin page</a>
          </div>
          <div className="flex flex-row justify-between gap-1.5">
            <p className="text-2xl ">
             <HiOutlineMail />
            </p>
            <a className="link link-hover ">support@cst.com</a>
          </div>

          
        </nav>
      </footer>

      <footer className="footer sm:footer-horizontal footer-center bg-black text-white text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by CS-Ticket System 
            
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
