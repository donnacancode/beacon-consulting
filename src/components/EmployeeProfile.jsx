/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EmployeeProfile = ({ name, role, bio, image, linkedin }) => {
  return (
    <div className="employee-profile">
      <img src={image} alt={`${name}`} className="employee-image" />
      <h3 className="employee-name">{name}</h3>
      <p className="employee-role">{role}</p>
      <p className="employee-bio">{bio}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
};

export default EmployeeProfile;
