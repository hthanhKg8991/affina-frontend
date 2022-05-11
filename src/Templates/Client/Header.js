import { useState } from "react";
import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import accessStyle from "../../Assets";
import { ABOUT, HOME_PAGE, LOGIN, SEND_REQUEST } from "../../Routers/RoutePath";

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <header className="container">
            {/* fixed="top" */}
            <Navbar bg="white" expand="lg">
                <Container>
                    <Link to={HOME_PAGE}>
                        <Image
                            src={accessStyle.images.partner.affina}
                            srcSet={`
                            ${accessStyle.images.partner.affina2x} 2x, 
                            ${accessStyle.images.partner.affina3x} 3x
                        `}
                            alt="Logo Affina asss"
                            width={138}
                            height={28}
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Item>
                                <Link to="/">Bảo hiểm sức khoẻ</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={ABOUT}>Về Affina</Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                            <Link to="/faqs">Hướng dẫn</Link>
                        </Nav.Item> */}
                        </Nav>
                        <Nav className="d-flex header-right align-items-center">
                            <Nav.Item>
                                <Link to={LOGIN}>Đăng nhập</Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Dropdown
                                    onMouseLeave={() => setShowDropdown(false)}
                                    onMouseOver={() => setShowDropdown(true)}
                                >
                                    <Dropdown.Toggle
                                        className="main-style"
                                        id="dropdown-basic"
                                    >
                                        <i className="mdi mdi-help-circle"></i>
                                        Trung tâm trợ giúp
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu show={showDropdown}>
                                        <Dropdown.Item href="#/action-1" >
                                            <Navbar.Collapse>
                                                <i className="mdi mdi-phone-outline"></i>
                                                <Nav className="flex-column">
                                                    <span className="text-muted">
                                                        Gọi hotline
                                                    </span>
                                                    <span className="text-link">1900252599 - 02877722999</span>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <Navbar.Collapse>
                                                <i className="mdi mdi-chat-processing-outline"></i>
                                                <Nav className="flex-column">
                                                    <span className="text-muted">
                                                        Chat
                                                    </span>
                                                    <span className="text-link"> Nhân viên hỗ trợ</span>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Dropdown.Item>
                                        <Link to={SEND_REQUEST} className="dropdown-item">
                                            <Navbar.Collapse>
                                                <i className="mdi mdi-email-outline"></i>
                                                <Nav className="flex-column">
                                                    <span className="text-muted">
                                                        Email
                                                    </span>
                                                    <span className="text-link"> info@affina.com.vn</span>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;