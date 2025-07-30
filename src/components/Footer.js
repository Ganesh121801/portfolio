import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center mt-4 text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ganesh-more1218/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Ganesh121801" class="github-icon">
                <img src={github} alt="" />
              </a>
              <a href="https://www.instagram.com/its_prasad1218/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2025 <b>Ganesh More</b></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
