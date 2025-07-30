import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, deployedLink, Repository }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define link styles inline
  const linkStyles = {
    color: "blue",
    backgroundColor: isHovered ? "#f0f0f0" : "transparent",
    padding: "8px 12px",
    borderRadius: "4px",
    underline:'none',
    display: "inline-block",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
  };

  return (
    <Col
      size={12}
      sm={6}
      md={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {/* Check for deployedLink and Repository */}
          {deployedLink ? (
            <a
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              Visit Deployed Link
            </a>
          ) : Repository ? (
            <a
              href={Repository}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              View Repository
            </a>
          ) : null}
        </div>
      </div>
    </Col>
  );
};
