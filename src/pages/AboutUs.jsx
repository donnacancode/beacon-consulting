/* eslint-disable no-unused-vars */
import React from "react";
import EmployeeProfile from "../components/EmployeeProfile"; // Adjust the path based on your project structure

// Employee data
const employees = [
  {
    name: "Christopher Burns",
    role: "CEO & Founder",
    bio: "Chris is an experienced internal audit and risk management professional with over 20 years of a demonstrated history of working, mentoring and managing others in the financial institution, digital payments, risk and audit industries. Mr. Burns began his career in banking operations, then briefly as an educator and finally migrating to the audit sector advancing to the Director level after twelve years of service with one firm. Most recently, Mr. Burns started his own consulting practice, Beacon Consulting and Advisory LLC which focuses on servicing financial institutions' audit and compliance needs across all facets with focused specialization in operations, digital payments, prepaid cards, debit cards, credit cards and virtual wallet risks, respectively. Mr. Burns' background also includes a niche market focus of the CFPB's Prepaid Card Ruling which includes developing and conducting issuer bank reviews of third-party program managers focused on CIP/KYC standards, operational risk mitigation, merchant oversight and regulatory compliance including the error / dispute resolution process, fraud monitoring, consumer complaints and UDAAP testing. As part of this development, he has also developed a knowledge of VISA Operating Rules, Prepaid Issuer Risk Standards and Global Acquirer Risk Standards as related to the payments industry and third-party relationship risks. Progressing in the management aspect of his career, he has built out audit frameworks from the ground up, coached and mentored colleagues, led training courses and managed various audit teams to meet client needs which has provided him the tools to found Beacon Consulting and Advisory LLC. Mr. Burns holds a Bachelor of Finance from Rutgers University School of Business, a NJ Teaching Certificate for Business Education and Technology and is a member of the Institute of Internal Auditors.",
    image: "/BURNS_HEADSHOT.webp",
    linkedin: "https://www.linkedin.com/in/christopher-burns-50913978/",
  },
  {
    name: "Kevin Goleskie",
    role: "Manager, Third Party Risk",
    bio: "Kevin is an internal auditor and risk analyst with over 10 years of combined financial institution operations and internal audit experience. Mr. Goleskie’s background has enabled him to provide in-house and outsourced internal audit functions from financial institutions of various sizes and product levels, including prepaid and debit card program management. As Mr. Goleskie has progressed in his career, he has also advanced his managerial roles including managing sizeable audit teams on multiple engagements at various financial institution clients at any given time. His specialization is focused on operational risk including wire transfers, international remittances, prepaid cards, mobile payments, digital wallets, NACHA compliance and enterprise risk management. Specific to the payments industry, Mr. Goleskie’s background is also dedicated to digital wallets, cryptocurrency and prepaid card compliance including the CFPB’s Prepaid Card Ruling.",
    image: "/KEVIN_HEADSHOT.webp",
    linkedin: "https://www.linkedin.com/in/kevin-goleskie-89599b32/",
  },
  {
    name: "Reena Miller",
    role: "Consultant",
    bio: "Rina's blurb",
    image: "/images/rina",
    linkedin: "https://www.linkedin.com/in/reena-miller-cams-cfe-4856b217/",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      {" "}
      {/* New wrapper class */}
      <div className="about-us-page">
        <h1>About Us</h1>
        <h2>
          Our Team brings decades of extensive experience in the banking,
          payments, and FinTech industries. We are dedicated to providing our
          clients with the highest quality of service and expertise.
        </h2>
        <div className="employee-list">
          {employees.map((employee) => (
            <EmployeeProfile
              key={employee.name}
              name={employee.name}
              role={employee.role}
              bio={employee.bio}
              image={employee.image}
              linkedin={employee.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
