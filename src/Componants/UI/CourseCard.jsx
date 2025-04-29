import React from "react";
import PropTypes from "prop-types";
import CourseData from "../../API/CourseDetails.json";
import { useNavigate } from "react-router-dom";

export const CourseCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="headline">
        <h3>Starts your preparation here — notes, books, PYQs, and more.</h3>
      </div>
      <div className="row">
        {CourseData.map(({ id, image, branch, description }) => (
          <div className="col-12 col-md-6 col-lg-4 p-4 mb-4" key={id}>
            <div className="card branch-card h-100 d-flex flex-column">
              <img src={image} alt={branch} className="card-img-top card-image-wrapper" />
              <div className="card-body flex-grow-1">
                <h2 className="card-title">{branch}</h2>
                <p className="card-text">{description}</p>
              </div>
              <div className="mt-auto p-3">
              <button
                  className="btn"
                  type="button"
                  onClick={() => navigate(`/semester/${branch}`)}
                  >
                  Continue Learning
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="headline mt-5 p-3">
          <h5>💡 Quick Study Tip:</h5>
          <p style={{color:"black"}}>Break your syllabus into small chunks. Focus on understanding, not memorizing. Use PYQs for practice!</p>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
