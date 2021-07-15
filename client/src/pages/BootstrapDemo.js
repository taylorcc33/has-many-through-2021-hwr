import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import divvyLogo from "../images/Divvy-Logo-19-White.webp";
import heroImage from "../images/HeroImage.png";
import styled from "styled-components";

const BootstrapDemo = () => {
  return (
    <>
      {/******* Navbar *******/}
      <CustomNavBar sticky="top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <LogoImage alt="logo" src={divvyLogo} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink href="#home">Why Divvy</NavLink>
            <NavLink href="#features">Product</NavLink>
            <NavLink href="#pricing">Resources</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <LoginLink href="#home">Login</LoginLink>
            <SignUpButton variant="dark" href="#features">
              Sign Up
            </SignUpButton>
          </Nav>
        </Container>
      </CustomNavBar>

      <BodyContainer fluid>
        {/******* Hero *******/}
        <HeroDiv>
          <Row>
            <Col lg={8} md={8} sm={8} xs={12}>
              <HeroTitle>
                The credit & software your business needs to thrive.
              </HeroTitle>
              <HeroSubText>
                The spend management solution that gives you the credit you need
                and the software to manage it. With Divvy, you’ll never go over
                budget again.
              </HeroSubText>
              <HeroCTAButton variant="primary">Get a Demo</HeroCTAButton>
            </Col>
            <HeroImageCol lg={4} md={4} sm={4} className="d-none d-sm-block">
              <HeroImage alt="hero" src={heroImage} />
            </HeroImageCol>
          </Row>
        </HeroDiv>

        {/******* Brands *******/}

        <Row>
          <Col sm={{ span: 2, offset: 1 }} xs={6}>
            <ClientLogo
              alt="logo"
              src="https://getdivvy.com/wp-content/uploads/2021/04/Logo-Noom-01.png"
            />
          </Col>
          <Col sm={2} xs={6}>
            <ClientLogo
              alt="logo"
              src="https://getdivvy.com/wp-content/uploads/2021/04/Logo-NiceInContact-01.png"
            />
          </Col>
          <Col sm={2} xs={6}>
            <ClientLogo
              alt="logo"
              src="https://getdivvy.com/wp-content/uploads/2021/04/Logo-Cuts-01.png"
            />
          </Col>
          <Col sm={2} xs={6}>
            <ClientLogo
              alt="logo"
              src="https://getdivvy.com/wp-content/uploads/2021/04/Logo-Qualtrics-01.png"
            />
          </Col>
          <Col sm={{ span: 2, offset: 0 }} xs={{ span: 6, offset: 3 }}>
            <ClientLogo
              alt="logo"
              src="https://getdivvy.com/wp-content/uploads/2021/04/Logo-Route-01.png"
            />
          </Col>
        </Row>

        {/******* Business Section *******/}
        <BusinessDiv>
          <Row>
            <Col sm={{ size: 6, order: "first" }} xs={{ order: "last" }}>
              <BusinessHeroImage
                alt="business"
                src="https://getdivvy.com/wp-content/uploads/2021/04/Image-Feature-Credit-01.png"
              />
            </Col>
            <Col sm={6} xs={12}>
              <BusinessTitle>
                Access the credit your business needs.
              </BusinessTitle>
              <BusinessSubText>
                Divvy makes it easy to access the funding you need, no matter
                the size of your business. Apply for a credit line in minutes
                and start spending smarter with Divvy cards for all employees.
              </BusinessSubText>
              <BusinessCTAButton>Learn More</BusinessCTAButton>
            </Col>
          </Row>
        </BusinessDiv>
      </BodyContainer>
    </>
  );
};

export default BootstrapDemo;

const CustomNavBar = styled(Navbar)`
  background-color: #1b1c23;
`;

const LogoImage = styled.img`
  height: 50px;
  margin: 10px 0px 10px 10px;
`;

const NavLink = styled(Nav.Link)`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff !important;
  margin-right: 20px;
`;

const LoginLink = styled(Nav.Link)`
  padding-right: 30px !important;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff !important;
`;

const SignUpButton = styled(Button)`
  background-color: #000;
  padding: 6px 15px 5px 15px;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff !important;
  border-radius: 25px;
  border: none;
`;

const BodyContainer = styled(Container)`
  padding: 0px;
  width: 100%;
`;

const HeroDiv = styled.div`
  background-color: #1b1c23;
  width: 100%;
  height: 100%;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  color: #fff;
  padding: 70px 180px 10px 70px;
  font-weight: bold;
`;

const HeroSubText = styled.p`
  color: #fff;
  padding: 0px 180px 10px 70px;
`;

const HeroCTAButton = styled(Button)`
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 15px 10px 15px;
  background-color: #2355be;
  border: none;
  margin-left: 70px;
  margin-bottom: 130px;
`;

const HeroImageCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const HeroImage = styled.img`
  height: 500px;
  float: right;
`;

const ClientLogo = styled.img`
  width: 75%;
  margin: 30px 30px 30px 30px;
`;

const BusinessTitle = styled.h1`
  font-size: 3em;
  color: #1b1c23;
  padding: 0px 0px 10px 70px;
  font-weight: bold;
  padding: 50px 120px 10px 30px;
`;

const BusinessDiv = styled.div`
  background-color: #f6f4e9;
  width: 100%;
  height: 100%;
`;

const BusinessSubText = styled.p`
  color: #1b1c23;
  padding: 0px 120px 30px 30px;
`;

const BusinessCTAButton = styled(Button)`
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 15px 10px 15px;
  background-color: #1b1c23;
  border: none;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const BusinessHeroImage = styled.img`
  width: 100%;
  padding: 80px 50px 50px 50px;
`;
