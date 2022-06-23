// import Image from 'next/image'
import React from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import accessStyle from "../../Assets";
import { BUY_NOW, LINK_DOWNLOAD } from "../../Routers/RoutePath";
import NeedInsurance from "../../Templates/Client/NeedInsurance";
import CustomerReviewsComponent from "./CustomerReviewsComponent";
import QuestionOftenComponent from "./QuestionOftenComponent";
import TrustedByLeadingPartner from "./TrustedByLeadingPartner";

const HomeComponent = () => {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="benefits-container">
      <Container fluid className="benefits position-relative">
        <div className="translucent-layer"></div>
        <Image
          src={accessStyle.images.static.backgroundHome}
          srcSet={`
                    ${accessStyle.images.static.backgroundHome2x} 2x, 
                    ${accessStyle.images.static.backgroundHome3x} 3x
                `}
          alt="Background home page"
          width={"100%"}
          height={"100%"}
        />
        <Container>
          <div className="position-absolute">
            <div className="merchant-benefit">
              {/* &nbsp; */}
              <Image
                src={accessStyle.images.static.merchantBenefit}
                srcSet={`
                    ${accessStyle.images.static.merchantBenefit2x} 2x, 
                    ${accessStyle.images.static.merchantBenefit3x} 3x
                `}
                alt="Merchant marsh benefit"
                width={"auto"}
                height={"auto"}
              />
            </div>
            <h1>
              Món quà từ <br />
              sức khỏe
            </h1>
            {/* <h4 className='describe'>Bảo hiểm sức khỏe Benefits One</h4> */}
            <h4 className="describe">
              Giải pháp công nghệ từ Affina - 1 chạm để được
              <br /> bảo hiểm, 1 phút để gửi yêu cầu bồi thường
            </h4>
            <a href={BUY_NOW} className="btn btn-lg">
              MUA NGAY
            </a>
            {/* <Link to={BUY_NOW} className="btn btn-lg">
              THAM GIA NGAY</Link> */}
          </div>
        </Container>
      </Container>
      <Container className="benefits-seconds">
        <Row>
          <Col md={4} sm={12} xs={12} data-aos="fade-right">
            <h3 className="header-text text-gradient">
              Không giới hạn nơi khám chữa bệnh bao gồm bệnh viện, phòng khám tư
              nhân, quốc tế
            </h3>
            <hr className="line-gradient" />
            <p>
              Giải pháp công nghệ từ Affina - 1 chạm để được bảo hiểm, 1 phút để
              gửi yêu cầu bồi thường
            </p>
            <Link to={BUY_NOW} className="btn btn-lg xs-hidden">
              Mua ngay
            </Link>
          </Col>
          <Col md={8} sm={12} xs={12} data-aos="fade-left">
            <Row>
              <Col md={6} sm={6} xs={12} className="col">
                <Image
                  src={accessStyle.images.icons.liveOnline}
                  srcSet={`
                    ${accessStyle.images.icons.liveOnline2x} 2x, 
                    ${accessStyle.images.icons.liveOnline3x} 3x
                `}
                  className="benefits-seconds-img"
                  alt="live online"
                />
                <div className="title">100% Trực tuyến</div>
                <Navbar className="brief">
                  Một chạm để được bảo hiểm, một phút để hoàn tất yêu cầu bồi
                  thường, 1 phút hoàn tất bồi thường
                </Navbar>
              </Col>
              <Col md={6} sm={6} xs={12} className="col">
                <Image
                  src={accessStyle.images.icons.procedureBasic}
                  srcSet={`
                    ${accessStyle.images.icons.procedureBasic2x} 2x, 
                    ${accessStyle.images.icons.procedureBasic3x} 3x
                `}
                  className="benefits-seconds-img"
                  alt="live online"
                />
                <div className="title">Quy trình đơn giản</div>
                <Navbar className="brief">
                  Không cần khai báo tình trạng bệnh lý để tham gia bảo hiểm.
                </Navbar>
              </Col>
              <Col md={6} sm={6} xs={12} className="col">
                <Image
                  src={accessStyle.images.icons.medicine}
                  srcSet={`
                    ${accessStyle.images.icons.medicine2x} 2x, 
                    ${accessStyle.images.icons.medicine3x} 3x
                `}
                  alt="live online"
                  className="benefits-seconds-img"
                />
                <div className="title">Tham gia độc lập</div>
                <Navbar className="brief">
                  Trẻ em từ 30 ngày tuổi được tham gia độc lập mà không cần bố
                  mẹ tham gia cùng
                </Navbar>
              </Col>
              <Col md={6} sm={6} xs={12} className="col">
                <Image
                  src={accessStyle.images.icons.medicine}
                  srcSet={`
                    ${accessStyle.images.icons.medicine2x} 2x, 
                    ${accessStyle.images.icons.medicine3x} 3x
                `}
                  alt="live online"
                  className="benefits-seconds-img"
                />
                <div className="title">Cam kết đồng hành</div>
                <Navbar className="brief">
                  Luôn bên cạnh bạn và cam kết tái tục bảo hiểm trong những năm
                  tiếp theo
                </Navbar>
              </Col>
            </Row>
          </Col>
          <Col>
            <Link to={BUY_NOW} className="btn btn-lg xs-visibility">
              Mua ngay
            </Link>
          </Col>
        </Row>
      </Container>
      <Container data-aos="zoom-in">
        <div className="benefits-condition">
          <Row>
            <Col md={12} xs={12}>
              <Navbar>
                <Navbar.Collapse>
                  <div className="condition-header-text">
                    Điều kiện tham gia
                  </div>
                  <Link to={BUY_NOW} className="btn-md btn-blue ms-auto">
                    Tham gia ngay
                  </Link>
                </Navbar.Collapse>
              </Navbar>
              <div className="condition-describe">
                Người Việt Nam hoặc người nước ngoài từ 30 ngày tuổi đến 65 tuổi
                sinh sống và làm việc trong lãnh thổ Việt Nam và không rời Việt
                Nam quá 180 ngày liên tục
              </div>
              <div className="condition-brief">
                * Trường hợp không được tham gia: Người bị bệnh tâm thần, động
                kinh, phong, ung thư , thương tật vĩnh viễn trên 80%, đang trong
                thời gian điều trị bệnh hoặc thương tật
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="protection-rights">
          <Row>
            <Col md={6} sm={12} xs={12} data-aos="fade-right">
              <h3 className="protection-header-text text-gradient">
                Đa dạng đối tượng tham gia, quyền lợi bảo vệ tối đa
              </h3>
              <div className="protection-describe">
                <p>
                  - Đa dạng đối tượng tham gia, quyền lợi bảo vệ tối đa: Đặc
                  biệt với Benefits One - sản phẩm bảo hiểm toàn diện với 7
                  quyền lợi, bạn có thể tự thiết kế gói bảo hiểm theo nhu cầu
                  với mức phí linh hoạt dành cho mình, gia đình và những người
                  thân yêu.
                </p>
                <p>
                  - Hãy chia sẻ với chúng tôi nhu cầu, tình trạng sức khỏe & tài
                  chính của bạn, chắc chắn chúng tôi sẽ tư vấn gói bảo hiểm
                  Benefits One phù hợp nhất cho chính bạn, gia đình, người thân.
                </p>
              </div>
              <div className="protection-btn-group xs-hidden">
                <div className="display-block">
                  <a
                    download
                    target="_blank"
                    href={LINK_DOWNLOAD}
                    className="btn btn-outline-protection"
                  >
                    Chi tiết quyền lợi
                  </a>
                </div>
                <div className="display-block">
                  <Link to="/download-brochure" className="btn btn-protection">
                    <i className="mdi mdi-tray-arrow-down"></i>
                    Tải bản quyền lợi
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12} xs={12} data-aos="fade-left">
              <Image
                src={accessStyle.images.static.card}
                srcSet={`
                    ${accessStyle.images.static.card2x} 2x, 
                    ${accessStyle.images.static.card3x} 3x
                `}
                alt="Insurance card"
                width={"100%"}
                height={"100%"}
                className="logo-footer"
              />
            </Col>
            <div className="protection-btn-group xs-visibility">
              <div className="display-block">
                <a
                  download
                  target="_blank"
                  href={LINK_DOWNLOAD}
                  className="btn btn-outline-protection"
                >
                  Chi tiết quyền lợi
                </a>
              </div>
              <div className="display-block">
                <Link to="/download-brochure" className="btn btn-protection">
                  <i className="mdi mdi-tray-arrow-down"></i>
                  Tải bản quyền lợi
                </Link>
              </div>
            </div>
          </Row>
        </div>
      </Container>
      <NeedInsurance />
      <QuestionOftenComponent />
      <CustomerReviewsComponent />
      {/* <Container className='assistant-customer text-center'>
        <h6 className='text-muted'>Trợ lý bảo hiểm của bạn</h6>
        <div className='position-relative'>
          <Image
            src={require("../../Assets/Images/public/background-assistant.webp")}
            srcSet={`
                    ${require('../../Assets/Images/public/background-assistant@2x.webp')} 2x, 
                    ${require('../../Assets/Images/public/background-assistant@3x.webp')} 3x
                `}
            alt="Insurance card"
            width={'30%'}
            height={'30%'}
            className="text-center"
          />
          <div className='assistant-content position-absolute'>
            <h1>Xin chào, tôi là Affina</h1>
            <span className='question-today'>Bạn cần hỗ trợ gì hôm nay?</span>
          </div>
        </div>
        <Link to='/about-affina' className='btn btn-assistant'>
          Tìm hiểu về Affina
        </Link>
      </Container> */}
      <TrustedByLeadingPartner />
    </div>
  );
};

export default HomeComponent;
