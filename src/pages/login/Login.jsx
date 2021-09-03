// import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext";
// import { Link, useHistory } from "react-router-dom";
// import { Container } from "react-bootstrap";

// export default function Login() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const { login } = useAuth();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setError("");
//       setLoading(true);
//       await login(emailRef.current.value, passwordRef.current.value);
//       history.push("/shop");
//     } catch {
//       setError("Failed to log in");
//     }

//     setLoading(false);
//   }

//   return (
//     <Container>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Log In</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Log In
//             </Button>
//           </Form>
//           <div className="w-100 text-center mt-3">
//             <Link to="/forgot-password">Forgot Password?</Link>
//           </div>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

import React, { useRef, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import { Alert } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBAlert,
} from "mdbreact";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.state.innerValue);

    try {
      setError("");
      setLoading(true);
      await login(
        emailRef.current.state.innerValue,
        passwordRef.current.state.innerValue
      );
      history.push("/shop");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <form onSubmit={handleSubmit}>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Log in
                  </h3>
                </MDBRow>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                {error && <MDBAlert color="danger">{error}</MDBAlert>}

                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      size="lg"
                      className="white-text"
                    />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon fab className="fa-twitter white-text fa-lg" />
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon
                      fab
                      className="fa-google-plus-g white-text fa-lg"
                    />
                  </a>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput
                  label="Your email"
                  group
                  type="text"
                  validate
                  ref={emailRef}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  ref={passwordRef}
                  required
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a href="#!" className="dark-grey-text ml-1 font-weight-bold">
                    Password?
                  </a>
                </p>
                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                  <MDBCol md="5" className="d-flex align-items-start">
                    <div className="text-center">
                      <MDBBtn
                        color="grey"
                        rounded
                        className="z-depth-1a"
                        disabled={loading}
                        type="submit"
                      >
                        Log in
                      </MDBBtn>
                    </div>
                  </MDBCol>
                  <MDBCol md="7" className="d-flex justify-content-end">
                    <p className="font-small grey-text mt-3">
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="dark-grey-text ml-1 font-weight-bold"
                      >
                        Sign up
                      </Link>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
