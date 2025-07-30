import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiCloudinary,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import colorSharp from "../assets/img/color-sharp.png";
import styled from 'styled-components'; // Import styled-components

const SkillsContainer = styled.section`
  .skill-bx {
    text-align: center;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(183px, 1fr));
    gap: 20px;
    justify-items: center;
    margin-top: 30px;
  }

  .skill-item {
    text-align: center;
    transition: transform 0.3s ease;
  }

  .skill-item:hover {
    transform: translateY(-15px);
  }

  .skill-item h5 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .background-image-left {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: auto;
    opacity: 0.15;
  }
`;

export const Skills = () => {
  const skills = [
    { icon: <FaReact size={60} color="#61DAFB" />, name: "React.js" },
    { icon: <FaNodeJs size={60} color="#68A063" />, name: "Node.js" },
    { icon: <SiExpress size={60} color="white" />, name: "Express.js" },
    { icon: <SiMongodb size={60} color="#47A248" />, name: "MongoDB" },
    { icon: <FaJava size={60} color="#007396" />, name: "Java" },
  
    { icon: <SiJavascript size={60} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiHtml5 size={60} color="#E34F26" />, name: "HTML5" },
    { icon: <SiCss3 size={60} color="#1572B6" />, name: "CSS3" },
    { icon: <SiCloudinary size={60} color="#F29111" />, name: "Cloudinary" },
    { icon: <TbBrandReactNative size={60} color="#61DAFB" />, name: "React Native" },
  ];

  return (
    <SkillsContainer className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are the technologies I excel at, spanning from front-end to back-end development.
              </p>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    {skill.icon}
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </SkillsContainer>
  );
};
