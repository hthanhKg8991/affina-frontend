import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Line from "../../Common/Line";
import {
  HOME_PAGE,
  BUY_NOW,
  PRIVACY_POLICY,
  SEND_REQUEST,
  SOCIAL_FACEBOOK,
  STORY_AFFINA,
  TERM_CONDITIONS,
  ABOUT,
  NEWS,
  RECRUIT,
  CONTACT,
  OFTEN_QUESTIONS,
  SHOPPING_GUIDE,
  PAYMENT_POLICY,
  REFUND_POLICY,
  SOCIAL_LINKEDIN,
} from "../../Routers/RoutePath";

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="main-footer">
            <Line />
            <Container>
                <Row className="footer " >
                    <Col lg md sm={12} xs={12}>
                        <Link to={HOME_PAGE}>
                            <Image
                                src={require("../../Assets/Images/public/logo.png")}
                                srcSet={`
                                ${require('../../Assets/Images/public/logo@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/logo@3x.png')} 3x
                            `}
                                alt="Logo Affina"
                                width={133}
                                height={27}
                                className="logo-footer"
                            />
                        </Link>
                        <Nav className="flex-column footer-info">
                            <Navbar.Text>info@affina.com.vn</Navbar.Text>
                            <Navbar.Text>1900252599 <span className="line-vertical">|</span> 02877722999</Navbar.Text>
                            <Navbar>
                                <Navbar.Collapse className="social-media">
                                    <Nav.Item>
                                        <a target="_blank" href={SOCIAL_FACEBOOK}>
                                            <i className="mdi mdi-facebook"></i>
                                        </a>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <i className="mdi mdi-instagram"></i>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <i className="mdi mdi-youtube"></i>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <a target="_blank" href={SOCIAL_LINKEDIN}>
                                            <i className="mdi mdi-linkedin"></i>
                                        </a>
                                    </Nav.Item>
                                </Navbar.Collapse>
                            </Navbar>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={6}>
                        <h5 className="text-gradient">Affina Vi????t Nam</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={ABOUT}>V??? Affina</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={STORY_AFFINA}>C??u chuy???n th????ng hi???u</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={NEWS}>Tin t???c</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={RECRUIT}>Tuy???n d???ng</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={CONTACT}>Li??n h???</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={6}>
                        <h5 className="text-gradient">S???n ph???m b???o hi???m</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={BUY_NOW}>B???o hi???m Benefits One</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={6}>
                        <h5 className="text-gradient">H??? tr??? kh??ch h??ng</h5>
                        <Nav className="flex-column">
                            {/* <Nav.Item>
                                <Link to={SEND_REQUEST}>Trung t??m tr??? gi??p</Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Link to={OFTEN_QUESTIONS}>C??u h???i th?????ng g???p</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={SHOPPING_GUIDE}>H?????ng d???n mua b???o hi???m</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={SEND_REQUEST}>Y??u c???u h??? tr???</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={6}>
                        <h5 className="text-gradient">Ch??nh s??ch</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={PRIVACY_POLICY}>Ch??nh s??ch b???o m???t th??ng tin</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={TERM_CONDITIONS}>??i???u kho???n v?? ??i???u ki???n</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={PAYMENT_POLICY}>Ch??nh s??ch thanh to??n</Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Link to={REFUND_POLICY}>Ch??nh s??ch ho??n ?????i</Link>
                            </Nav.Item> */}
                        </Nav>
                    </Col>
                </Row>
            </Container >
            <div className="line-gradient"></div>
            <div className="text-center">
                <Container className="end-of-page text-center">
                    <p className="mb-0">?? 2022  Affina Vi???t Nam, All rights reserved.<br /> C??ng ty TNHH Affina Vi???t Nam. ??C: B7 An Ph?? New City, ???????ng Nguy???n Ho??ng, P. An Ph??, Tp. Th??? ?????c, Tp. H??? Ch?? Minh, Vi???t Nam. GPKD: 0317130512.</p>
                </Container>
            </div>
        </footer >
    )
}
export default Footer;