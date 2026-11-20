
import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Chandigarh University",
      duration: "2023 – 2027",
      score: "8.27 / 10 CGPA",
      status: "Currently Pursuing",
    },
  ];

  return (
    <>
      <style>{`
        .education {
          padding: 100px 8%;
          background: #0f172a;
          color: #ffffff;
        }

        .education-container {
          max-width: 1100px;
          margin: auto;
        }

        .education-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .section-subtitle {
          color: #38bdf8;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 600;
        }

        .education-heading h2 {
          font-size: 38px;
          margin: 15px 0;
        }

        .education-heading h2 span {
          color: #38bdf8;
        }

        .education-heading p {
          color: #94a3b8;
          font-size: 16px;
        }

        .education-list {
          display: flex;
          justify-content: center;
        }

        .education-card {
          width: 100%;
          max-width: 750px;
          display: flex;
          gap: 25px;
          padding: 35px;
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 18px;
          background: rgba(30, 41, 59, 0.65);
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-7px);
          border-color: #38bdf8;
          box-shadow: 0 10px 35px rgba(56, 189, 248, 0.12);
        }

        .education-icon {
          font-size: 35px;
          min-width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          background: rgba(56, 189, 248, 0.12);
          border-radius: 12px;
        }

        .education-details {
          flex: 1;
        }

        .education-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }

        .education-duration {
          color: #38bdf8;
          font-weight: 600;
        }

        .education-status {
          font-size: 12px;
          color: #4ade80;
          background: rgba(74, 222, 128, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .education-details h3 {
          font-size: 23px;
          margin-bottom: 6px;
        }

        .education-details h4 {
          color: #38bdf8;
          font-size: 17px;
          margin-bottom: 12px;
        }

        .institution {
          color: #cbd5e1;
          margin-bottom: 22px;
        }

        .education-score {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          color: #94a3b8;
        }

        .education-score strong {
          color: #38bdf8;
        }

        @media (max-width: 600px) {
          .education {
            padding: 70px 5%;
          }

          .education-heading h2 {
            font-size: 28px;
          }

          .education-card {
            padding: 22px;
            flex-direction: column;
          }

          .education-score {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <section id="education" className="education">
        <div className="education-container">
          <div className="education-heading">
            <span className="section-subtitle">
              MY ACADEMIC JOURNEY
            </span>

            <h2>
              Education <span>& Qualifications</span>
            </h2>

            <p>
              My academic background and educational journey.
            </p>
          </div>

          <div className="education-list">
            {educationData.map((item, index) => (
              <div className="education-card" key={index}>
                <div className="education-icon">
                  <span>🎓</span>
                </div>

                <div className="education-details">
                  <div className="education-top">
                    <span className="education-duration">
                      {item.duration}
                    </span>

                    <span className="education-status">
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.degree}</h3>
                  <h4>{item.field}</h4>

                  <p className="institution">
                    {item.institution}
                  </p>

                  <div className="education-score">
                    <span>Academic Performance</span>
                    <strong>{item.score}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
