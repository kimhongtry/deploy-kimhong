import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/logo1.png";
const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 grid-cols-2 gap-8">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className="w-28 mb-4" />
          <h3 className="text-2xl font-semibold">Help</h3>
          <ul className="mt-2 space-y-1">
            <li>Contact us</li>
            <li>Returns</li>
          </ul>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Customer */}
        <div>
          <h3 className="font-bold text-2xl">Customer</h3>
          <ul className="mt-2 space-y-1">
            <li>Tokens</li>
            <li>Cambodia</li>
            <li>England</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-2xl">About</h3>
          <ul className="mt-2 space-y-1">
            <li>About us</li>
            <li>Newsletters</li>
            <li>Resources</li>
            <li>Schools</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold text-2xl">More</h3>
          <ul className="mt-2 space-y-1">
            <li>Audiobooks for older listeners</li>
            <li>Questions About Audiobooks</li>
            <li>Stories for schools</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">@2025 Audiobooks</div>
    </footer>
  );
};

export default Footer;
