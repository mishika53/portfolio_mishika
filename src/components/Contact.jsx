
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mishika.1028@gmail.com",
      link: "mailto:mishika.1028@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/mishika53",
      link: "https://github.com/mishika53",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/mishika-goyal-992241294/",
    },
  ];

  return (
    <>
      <style>{`
        .contact {
          padding: 100px 8%;
          background: #0f172a;
          color: #ffffff;
        }

        .contact-container {
          max-width: 1100px;
          margin: auto;
        }

        .contact-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-subtitle {
          color: #38bdf8;
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 600;
        }

        .contact-heading h2 {
          font-size: 40px;
          margin: 15px 0;
        }

        .contact-heading h2 span {
          color: #38bdf8;
        }

        .contact-heading p {
          color: #94a3b8;
          max-width: 600px;
          margin: auto;
          line-height: 1.7;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 45px;
          align-items: start;
        }

        .contact-info h3,
        .contact-form h3 {
          font-size: 25px;
          margin-bottom: 20px;
        }

        .contact-info > p {
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 22px;
          text-decoration: none;
          color: white;
          transition: 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(6px);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.12);
          color: #38bdf8;
          font-size: 20px;
        }

        .contact-item h4 {
          margin-bottom: 5px;
        }

        .contact-item span {
          color: #94a3b8;
          font-size: 14px;
        }

        .contact-form {
          padding: 35px;
          background: rgba(30, 41, 59, 0.65);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 18px;
          transition: 0.3s ease;
        }

        .contact-form:hover {
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 10px 35px rgba(56, 189, 248, 0.08);
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 15px;
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 9px;
          outline: none;
          color: white;
          font-family: inherit;
          font-size: 15px;
          transition: 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #64748b;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 140px;
        }

        .contact-form button {
          padding: 15px;
          border: none;
          border-radius: 9px;
          background: #38bdf8;
          color: #0f172a;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact-form button:hover {
          background: #0ea5e9;
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(56, 189, 248, 0.2);
        }

        .contact-form button span {
          margin-left: 8px;
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .contact {
            padding: 70px 5%;
          }

          .contact-heading h2 {
            font-size: 30px;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .contact-form {
            padding: 22px;
          }
        }

        @media (max-width: 400px) {
          .contact-heading h2 {
            font-size: 26px;
          }

          .contact-item {
            gap: 12px;
          }

          .contact-item span {
            font-size: 12px;
          }
        }
      `}</style>

      <section id="contact" className="contact">
        <div className="contact-container">

          <div className="contact-heading">
            <span className="contact-subtitle">
              GET IN TOUCH
            </span>

            <h2>
              Let's Work <span>Together</span>
            </h2>

            <p>
              Have an opportunity, project, or idea?
              I'd love to hear from you. Feel free to reach out!
            </p>
          </div>

          <div className="contact-content">

            <div className="contact-info">
              <h3>Let's Connect</h3>

              <p>
                I'm actively looking for software development
                opportunities where I can contribute my skills,
                learn new technologies, and grow as a developer.
              </p>

              {contactDetails.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  target={item.title === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <span>{item.value}</span>
                  </div>
                </a>
              ))}

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Location</h4>
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send Me a Message</h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;

                  const subject = encodeURIComponent(
                    `Portfolio Contact from ${name}`
                  );

                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                  );

                  window.location.href =
                    `mailto:mishika.1028@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                />

                <button type="submit">
                  Send Message <span>→</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
