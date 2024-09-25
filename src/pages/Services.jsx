import React from "react";

const servicesData = [
  {
    title: "Internal Audit Services",
    description:
      "Comprehensive risk management services to identify, assess, and mitigate financial and operational risks.",
    image: "/audit.png",
  },
  {
    title: "Risk Advisory Services",
    description:
      "Expert audits to ensure your business adheres to the latest regulations and industry standards.",
    image: "/risk.png",
  },

  {
    title: "Compliance Support",
    description:
      "Protect your organization from cyber threats with our tailored cybersecurity strategies.",
    image: "/compliance.png",
  },
  {
    title: "VISA PIRP",
    description:
      "Specialized services to help you comply with VISA Prepaid Issuer Risk Standards.",
    image: "/visa.png",
  },
  {
    title: "Product Development and Management",
    description:
      "Innovative solutions to help you develop and manage new products and services.",
    image: "/development.png",
  },

  {
    title: "Regulatory Agency Support",
    description:
      "Expert guidance to help you navigate regulatory requirements and maintain compliance.",
    image: "/support.png",
  },
  {
    title: "Lookback and Remediation Projects",
    description:
      "Thorough reviews to identify and address past issues and ensure compliance.",
    image: "/lookback.png",
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services-page">
        <h1>Our Services</h1>
        <h2>
          We offer a range of services to help you navigate the complex world of
          banking and fintech risk.
        </h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
