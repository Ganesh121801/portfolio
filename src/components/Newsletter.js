import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);
  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      onValidated({
        EMAIL: email,
      });
    } else {
      alert("Please enter a valid email address.");
    }
  };
  

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter
              <br /> & Never miss latest updates
            </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>

      {/* Inline styles for mobile responsiveness */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .newsletter-bx {
            text-align: center;
            padding: 20px;
          }

          .newsletter-bx h3 {
            font-size: 18px;
          }

          .new-email-bx {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .new-email-bx input {
            width: 90%;
            margin-bottom: 10px;
          }

          .new-email-bx button {
            width: 100px;
            padding: 10px;
            font-size: 14px;
          }

          .alert {
            margin-top: 10px;
          }
        }
      `}</style>
    </Col>
  );
};
