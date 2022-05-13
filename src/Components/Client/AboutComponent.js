import { Col, Container, Nav, Navbar, Row, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import NeedInsurance from "../../Templates/Client/NeedInsurance";
import CustomerReviewsComponent from "./CustomerReviewsComponent";
import DownloadAppComponent from "./DownloadAppComponent";
import QuestionOftenComponent from "./QuestionOftenComponent";
import Slider from "react-slick";
import TrustedByLeadingPartner from './TrustedByLeadingPartner';
import { BUY_NOW } from '../../Routers/RoutePath';

function AboutComponent() {
    const settings = {
        dots: false,
        autoplay: true,
        // infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        // speed: 1000,
        // autoplaySpeed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
            <Container className="protection text-center">
                <h1>Bảo vệ gia đình của bạn vô cùng đơn giản</h1>
                <Navbar.Text>Quy Trình 1 phút - Giá cực ưu đãi - An tâm, vững tin</Navbar.Text>
                <Nav.Item className='check-our-price'>
                    <Link to={BUY_NOW} className="btn btn-lg">
                        Tham gia ngay cùng chúng tôi</Link>
                </Nav.Item>
            </Container>
            <TrustedByLeadingPartner />
            

            {/* <Container className='our-protect-solution text-center'>
                <h6 className='header-text'>Our protection solutions</h6>
                <h2>Simple. Flexible. Easy.</h2>
                <Row>
                    <Col md={4} xs={12}>
                        <Container>
                            <div className='our-protect-item border-gradient'>
                                <div className='our-protect-head'>
                                    <Image
                                        src={require("../../Assets/Images/public/icons/car.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/car@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/car@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className='image-show-hover'
                                        src={require("../../Assets/Images/public/icons/car-color.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/car-color@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/car-color@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='our-protect-body'>
                                    <span className='text-muted'>Protect your</span>
                                    <Navbar className="end-of-page">
                                        <Navbar.Text>Car</Navbar.Text>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                <i className="mdi mdi-arrow-right"></i>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={4} xs={12}>
                        <Container>
                            <div className='our-protect-item'>
                                <div className='our-protect-head'>
                                    <Image
                                        src={require("../../Assets/Images/public/icons/motorbike.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/motorbike@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/motorbike@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className='image-show-hover'
                                        src={require("../../Assets/Images/public/icons/motorbike-color.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/motorbike-color@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/motorbike-color@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='our-protect-body'>
                                    <span className='text-muted'>&nbsp;</span>
                                    <Navbar className="end-of-page">
                                        <Navbar.Text>Motorbike</Navbar.Text>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                <i className="mdi mdi-arrow-right"></i>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={4} xs={12}>
                        <Container>
                            <div className='our-protect-item'>
                                <div className='our-protect-head'>
                                    <Image
                                        src={require("../../Assets/Images/public/icons/health.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/health@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/health@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className='image-show-hover'
                                        src={require("../../Assets/Images/public/icons/health-color.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/health-color@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/health-color@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='our-protect-body'>
                                    <span className='text-muted'>&nbsp;</span>
                                    <Navbar className="end-of-page">
                                        <Navbar.Text>Health</Navbar.Text>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                <i className="mdi mdi-arrow-right"></i>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={4} xs={12}>
                        <Container>
                            <div className='our-protect-item'>
                                <div className='our-protect-head'>
                                    <Image
                                        src={require("../../Assets/Images/public/icons/kid.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/kid@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/kid@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className='image-show-hover'
                                        src={require("../../Assets/Images/public/icons/kid-color.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/kid-color@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/kid-color@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='our-protect-body'>
                                    <span className='text-muted'>&nbsp;</span>
                                    <Navbar className="end-of-page">
                                        <Navbar.Text>Kid</Navbar.Text>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                <i className="mdi mdi-arrow-right"></i>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={4} xs={12} >
                        <Container>
                            <div className='our-protect-item'>
                                <div className='our-protect-head'>
                                    <Image
                                        src={require("../../Assets/Images/public/icons/home.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/home@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/home@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className='image-show-hover'
                                        src={require("../../Assets/Images/public/icons/home-color.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/home-color@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/home-color@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='our-protect-body'>
                                    <span className='text-muted'>&nbsp;</span>
                                    <Navbar className="end-of-page">
                                        <Navbar.Text>Home</Navbar.Text>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                <i className="mdi mdi-arrow-right"></i>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col md={4} xs={12} >
                        <Container>
                            <div className='our-protect-item'>
                                <div className='our-protect-head'>
                                    <Image
                                        src={require("../../Assets/Images/public/icons/travel.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/travel@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/travel@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                    <Image
                                        className='image-show-hover'
                                        src={require("../../Assets/Images/public/icons/travel-color.png")}
                                        srcSet={`
                                ${require('../../Assets/Images/public/icons/travel-color@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/icons/travel-color@3x.png')} 3x
                            `}
                                        alt="car insurance"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className='our-protect-body'>
                                    <span className='text-muted'>&nbsp;</span>
                                    <Navbar className="end-of-page">
                                        <Navbar.Text>Travel</Navbar.Text>
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                <i className="mdi mdi-arrow-right"></i>
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container className='not-sure-choose text-center'>
                <h6 className='header-text'>Not sure what to choose</h6>
                <Nav.Item className='meet-your-insurance-assistant'>
                    <Link to="/meet-your-insurance-assistant" className="btn btn-lg">
                        Meet your insurance assistant</Link>
                </Nav.Item>
            </Container>
            <NeedInsurance /> */}
            <Container className='introduce-container '>
                <Row>
                    <Col md={6}>
                        <div className='introduce-content'>
                            <h5>
                                <span>Trải nghiệm đơn giản</span><br /> với nền tảng tích hợp trực tuyến thông minh
                            </h5>
                            <div className='introduce-describe'>
                                <p>Khởi nguồn từ mong muốn giúp hàng triệu khách hàng cá nhân, chủ sở hữu & nhân viên làm việc trong các doanh nghiệp, đơn vị kinh doanh nhỏ lẻ Việt Nam được tiếp cận dễ dàng các sản phẩm bảo hiểm ưu việt, trải nghiệm quy trình bồi thường đơn giản, Affina được phát triển như một trợ lý thông minh cùng bạn đi trên “hành trình bảo hiểm trọn gói” trực tuyến.
                                </p>
                                <p>Cùng Affina, “dạo bước” trên nền tảng số hoá bảo hiểm thông minh, bạn sẽ thấy, tất cả nhu cầu của mình đều được Affina trợ giúp nhanh chóng từ lựa chọn sản phẩm, thanh toán, bồi thường,...
                                </p>
                                <p>Năng động, trẻ trung, thích khai phá tiềm năng & dám tiên phong trong ngành công nghệ bảo hiểm (Insurtech), Affina nỗ lực hết mình để hoàn thành mục tiêu, đó là phục vụ ngày càng tốt hơn nhu cầu của bạn, gia đình, doanh nghiệp Việt Nam.
                                </p>
                            </div>
                            {/* <Navbar className="end-of-page">
                                <Link to="/how-to-it-work">See how it work
                                    <i className="mdi mdi-arrow-right"></i></Link>
                            </Navbar> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='introduce-image'>
                            <Image
                                src={require("../../Assets/Images/public/img.webp")}
                                srcSet={`
                                    ${require('../../Assets/Images/public/img@2x.webp')} 2x, 
                                    ${require('../../Assets/Images/public/img@3x.webp')} 3x
                                `}
                                alt="image content 01"
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className='introduce-content'>
                            <h5>
                                <span>MỤC TIÊU</span>
                            </h5>
                            <div className='introduce-describe'>
                                <p>Trở thành doanh nghiệp hàng đầu về tư vấn và cung cấp giải pháp bảo vệ sức khoẻ, tài sản, là "người bạn" mà hàng triệu cá nhân, gia đình, doanh nghiệp quy mô vừa & nhỏ nghĩ đến đầu tiên khi tìm kiếm giải pháp công nghệ hỗ trợ bảo vệ cho người thân, nhân viên.
                                </p>
                                <p>Mục tiêu chính của Affina là mang lại các chương trình chăm sóc sức khỏe, tiết kiệm tối đa chi phí, bảo vệ lợi ích bền vững cho khách hàng cá nhân, doanh nghiệp tham gia trong mạng lưới liên kết.
                                </p>
                                <strong>TẦM NHÌN</strong>
                                <p>Affina sẽ trở thành một giải pháp bảo hiểm tài chính được hàng triệu cá
                                    nhân, gia đình, doanh nghiệp quy mô vừa và nhỏ tin dùng.
                                </p>
                                <strong>SỨ MỆNH</strong>
                                <p>Affina đơn giản hóa cách tiếp cận sản phẩm bảo hiểm/tài chính giúp bạn ra quyết định đúng đắn và lựa chọn sản phẩm tối ưu để bảo vệ bản thân, gia đình và nhân viên trên mọi hành trình.
                                </p>

                            </div>
                            {/* <Navbar className="end-of-page">
                                <Link to="/how-to-it-work">See how it work
                                    <i className="mdi mdi-arrow-right"></i></Link>
                            </Navbar> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='introduce-image'>
                            <Image
                                src={require("../../Assets/Images/public/img-02.webp")}
                                srcSet={`
                                    ${require('../../Assets/Images/public/img-02@2x.webp')} 2x, 
                                    ${require('../../Assets/Images/public/img-02@3x.webp')} 3x
                                `}
                                alt="image content 01"
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className='introduce-content'>
                            <h5>
                                <span>GIÁ TRỊ CỐT LÕI</span>
                            </h5>
                            <div className='introduce-describe'>
                                <strong>Quan tâm</strong>
                                <p>luôn quan tâm đến nhu cầu của khách hàng (cá nhân, doanh nghiệp) để mang đến các sản phẩm bảo hiểm/ tài chính  phù hợp nhất.
                                </p>
                                <strong>Chuyên nghiệp</strong>
                                <p>trong phong cách phục vụ, hay trong việc giải quyết các quyền lợi liên quan đến bảo hiểm của  khách hàng.
                                </p>
                                <strong>Hiệu quả</strong>
                                <p>Nỗ lực hoạt động để mang lại hiệu quả tối ưu cho khách hàng, đối tác, nhân viên..
                                </p>
                                <strong>Sẻ chia</strong>
                                <p>thông qua các hoạt động thực thi trách nhiệm xã hội (CSR), Affina mong muốn chung tay, góp phần làm cho cuộc sống tốt đẹp hơn.
                                </p>

                            </div>
                            {/* <Navbar className="end-of-page">
                                <Link to="/how-to-it-work">See how it work
                                    <i className="mdi mdi-arrow-right"></i></Link>
                            </Navbar> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='introduce-image'>
                            <Image
                                src={require("../../Assets/Images/public/img-03.webp")}
                                srcSet={`
                                    ${require('../../Assets/Images/public/img-03@2x.webp')} 2x, 
                                    ${require('../../Assets/Images/public/img-03@3x.webp')} 3x
                                `}
                                alt="image content 01"
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                    </Col>
                </Row>
                <Nav.Item className='meet-your-insurance-assistant justify-content-center text-center'>
                    <Link to="/meet-your-insurance-assistant" className="btn btn-lg">
                        Bảo vệ gia đình của bạn ngay hôm nay</Link>
                </Nav.Item>
            </Container >

            <QuestionOftenComponent />
            <CustomerReviewsComponent />
            {/* <DownloadAppComponent /> */}
        </div >
    )
}
export default AboutComponent;