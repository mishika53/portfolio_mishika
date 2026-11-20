
import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #080f1e;
          color: #ffffff;
          padding: 55px 8% 20px;
          border-top: 1px solid rgba(56, 189, 248, 0.2);
        }

        .footer-container {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer-logo h2 {
          font-size: 27px;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .footer-logo h2 span {
          color: #38bdf8;
        }

        .footer-logo p {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #38bdf8;
          transform: translateY(-2px);
        }

        .footer-socials {
          display: flex;
          gap: 15px;
        }

        .footer-socials a {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #1e293b;
          color: #38bdf8;
          font-size: 20px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-socials a:hover {
          background: #38bdf8;
          color: #0f172a;
          transform: translateY(-4px);
          box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2);
        }

        .footer-bottom {
          max-width: 1100px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid #334155;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          color: #94a3b8;
          font-size: 13px;
        }

        .footer-bottom p {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .heart-icon {
          color: #ef4444;
          animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @media (max-width: 900px) {
          .footer-container {
            justify-content: center;
            text-align: center;
          }

          .footer-logo {
            width: 100%;
          }

          .footer-links {
            justify-content: center;
          }

          .footer-socials {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 45px 5% 20px;
          }

          .footer-links {
            gap: 15px;
          }

          .footer-links a {
            font-size: 13px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-logo">
            <h2>
              Mishika<span>.</span>
            </h2>
            <p>
              Building ideas into reality through code.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/mishika53"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mishika. All Rights Reserved.
          </p>

          <p>
            Made with <FaHeart className="heart-icon" /> and React
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
