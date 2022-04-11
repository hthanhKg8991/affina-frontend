import { Container, Nav, Navbar, Image } from "react-bootstrap";

function DownloadAppComponent() {
    return (
        <Container>
            <Nav className="justify-content-center flex-column download-app align-items-center">
                <h1>Download Affina app</h1>
                <Navbar.Text className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                </Navbar.Text>
                <Navbar>
                    <Image
                        src={require("../../Assets/Images/public/app-store.png")}
                        srcSet={`
                                ${require('../../Assets/Images/public/app-store@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/app-store@3x.png')} 3x
                            `}
                        alt="Download app Affina"
                        width={151}
                        height={61}
                        className="logo-footer"
                    />
                    <Image
                        src={require("../../Assets/Images/public/google-play.png")}
                        srcSet={`
                                ${require('../../Assets/Images/public/google-play@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/google-play@3x.png')} 3x
                            `}
                        alt="Download app Affina"
                        width={151}
                        height={61}
                        className="logo-footer"
                    />
                </Navbar>
            </Nav>
        </Container>
    )
}
export default DownloadAppComponent;