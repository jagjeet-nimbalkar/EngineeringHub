import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SemData from "../../API/SemFrontPage.json";

export const SemesterCard = () => {
  const { branchName } = useParams();
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    const selectedBranch = SemData.find(
      (branch) => branch.branch === branchName
    );

    if (selectedBranch) {
      setSemesters(selectedBranch.semesters);
    } else {
      setSemesters([]);
    }
  }, [branchName]);

  return (
    <div className="container">
      <div className="headline">
        <h3>{branchName.replace(/-/g, " ").toUpperCase()} </h3>
      </div>
      <div className="row">
        {semesters.length > 0 ? (
          semesters.map((semester, index) => (
            <div className="col-12 col-md-6 col-lg-4 p-4 mb-4" key={semester.id || index}>
              <div className="card branch-card h-100 d-flex flex-column">
                <img
                  src={semester.image}
                  className="card-img-top card-image-wrapper"
                  alt={`Semester ${semester.semester}`}
                />
                <div className="card-body flex-grow-1">
                  <h2 className="card-title">Semester: {semester.semester}</h2>
                  <p className="card-text">{semester.description}</p>
                </div>
                <div className="mt-auto p-3">
                  <button className="btn" type="button">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <h5>No semesters available for this branch.</h5>
          </div>
        )}
      </div>
      <div className="headline mt-5 p-3">
        <h5>💡 Quick Study Tip:</h5>
        <p style={{ color: "black" }}>
          Break your syllabus into small chunks. Focus on understanding, not memorizing. Use PYQs for practice!
        </p>
      </div>
    </div>
  );
};
