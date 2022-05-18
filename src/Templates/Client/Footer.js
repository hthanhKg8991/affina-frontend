import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Line from "../../Common/Line";
import { HOME_PAGE, BUY_NOW, PRIVACY_POLICY, SEND_REQUEST, SOCIAL_FACEBOOK, STORY_AFFINA, TERM_CONDITIONS, ABOUT } from "../../Routers/RoutePath";

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
                            <Navbar.Text>1900-2525-99 <span className="line-vertical">|</span> 02877722999</Navbar.Text>
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
                                        <i className="mdi mdi-linkedin"></i>
                                    </Nav.Item>
                                </Navbar.Collapse>
                            </Navbar>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={12}>
                        <h5>Affina Vietnam</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={ABOUT}>Về Affina</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={STORY_AFFINA}>Câu chuyện thương hiệu</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to='/'>Tin tức</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">Tuyển dụng</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">Liên hệ</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={12}>
                        <h5>Sản phẩm bảo hiểm</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={BUY_NOW}>Bảo hiểm Benefits One</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={12}>
                        <h5>Hỗ trợ khách hàng</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={SEND_REQUEST}>Trung tâm trợ giúp</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">Câu hỏi thường gặp</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">Hướng dẫn mua bảo hiểm</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={SEND_REQUEST}>Yêu cầu hỗ trợ</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg md sm={12} xs={12}>
                        <h5>Chính sách</h5>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to={PRIVACY_POLICY}>Chính sách bảo mật thông tin</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={TERM_CONDITIONS}>Điều khoản và điều kiện</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/'}>Chính sách thanh toán</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/'}>Chính sách hoán đổi</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container >
            <div className="text-center background-gradient-to-bottom text-white">
                <Container className="end-of-page text-center text-white">
                    <p className="mb-0">© 2022  Affina Việt Nam, All rights reserved.<br /> Công ty TNHH Affina Việt Nam. ĐC: B7 An Phú New City, đường Nguyễn Hoàng, P. An Phú, Tp. Thủ Đức, Tp. Hồ Chí Minh, Việt Nam. GPKD: 0317130512.</p>
                </Container>
            </div>
        </footer >
    )
}
export default Footer;