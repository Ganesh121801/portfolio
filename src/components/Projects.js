import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/job.svg";
import projImg2 from "../assets/img/carpool-landing(1).svg";
import projImg3 from "../assets/img/project-img1.svg";
import projImg4 from "../assets/img/image5.png";
import projImg5 from "../assets/img/image6.png";
import projImg6 from "../assets/img/image7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Realtime Carpooling Ridesharing App",
      description: "A web app for real-time carpooling, enabling users to share rides with others.",
      imgUrl: projImg2,
      deployedLink: null, // Optional: No deployed link
      Repository: "https://github.com/Ganesh121801/Realtime_Carpool_web_Application",
    },
    {
      title: "Jobquest Job Portal",
      description: "A platform to search and apply for jobs, built with modern web technologies.",
      imgUrl: projImg1,
      deployedLink: "https://jobquest-hq86.onrender.com",
    },
    {
      title: "YouTube Video Recommendation System",
      description: "A machine learning-based recommendation system built with the MERN stack.",
      imgUrl: projImg3,
      deployedLink: null, // Optional: No deployed link
      Repository: "https://github.com/Ganesh121801/Video-Recommendation-Systems",
    },
    {
      title: "SchedulEase – Appointment Scheduling Application",
      description: "Developed a full-stack scheduling platform with event creation, availability management, booking system, and Google Calendar integration.",
      imgUrl: projImg4,
      deployedLink: "https://calendly-an-appointment-scheduling.vercel.app/", // Replace with actual deployed link
      Repository: "https://github.com/Ganesh121801/calendly-An-appointment-Scheduling-Application", // Replace if needed
      TechStack: "Next.js, Prisma, NeonDB (PostgreSQL), Google API"
    },
    {
    title: "Morekart – E-commerce Web Application",
    description: "Built a full-stack e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    imgUrl: projImg5, // Add a new image in ../assets/img for Morekart
    Repository: "https://github.com/Ganesh121801/Morekart",
    TechStack: "MERN Stack, Stripe API, JWT Authentication"
  },
  {
  title: "Saarthi – EdTech Platform",
  description: "Developed an educational platform for course management, interactive learning, and student progress tracking, with secure user authentication and responsive design.",
  imgUrl: projImg6, // Add a new image in ../assets/img for Saarthi
  Repository: "https://github.com/Ganesh121801/Saarthi---An-Edtech-Platform-",
  TechStack: "React.js, Node.js, Express, SQL Database, JWT Authentication"
}

  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Content for Tab 2 goes here.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Content for Tab 3 goes here.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
