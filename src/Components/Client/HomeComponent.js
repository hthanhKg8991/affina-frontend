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
              M??n qu?? t??? <br />
              s???c kh???e
            </h1>
            {/* <h4 className='describe'>B???o hi???m s???c kh???e Benefits One</h4> */}
            <h4 className="describe">
              Gi???i ph??p c??ng ngh??? t??? Affina - 1 ch???m ????? ???????c
              <br /> b???o hi???m, 1 ph??t ????? g???i y??u c???u b???i th?????ng
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
              Kh??ng gi???i h???n n??i kh??m ch???a b???nh bao g???m b???nh vi???n, ph??ng kh??m t??
              nh??n, qu???c t???
            </h3>
            <hr className="line-gradient" />
            <h3 className="header-text text-gradient">
              Quy???n l???i b???o hi???m cho ??i???u tr??? COVID-19 v?? bi???n ch???ng do ti??m
              vaccine
            </h3>
            <hr className="line-gradient" />
           
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
                <div className="title">100% Tr???c tuy???n</div>
                <Navbar className="brief">
                  M???t ch???m ????? ???????c b???o hi???m, m???t ph??t ????? ho??n t???t y??u c???u b???i
                  th?????ng, 1 ph??t ho??n t???t b???i th?????ng
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
                <div className="title">Quy tr??nh ????n gi???n</div>
                <Navbar className="brief">
                  Kh??ng c???n khai b??o t??nh tr???ng b???nh l?? ????? tham gia b???o hi???m.
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
                <div className="title">Tham gia ?????c l???p</div>
                <Navbar className="brief">
                  Tr??? em t??? 30 ng??y tu???i ???????c tham gia ?????c l???p m?? kh??ng c???n b???
                  m??? tham gia c??ng
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
                <div className="title">Cam k???t ?????ng h??nh</div>
                <Navbar className="brief">
                  Lu??n b??n c???nh b???n v?? cam k???t t??i t???c b???o hi???m trong nh???ng n??m
                  ti???p theo
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
                    ??i???u ki???n tham gia
                  </div>
                  <Link to={BUY_NOW} className="btn-md btn-blue ms-auto">
                    Tham gia ngay
                  </Link>
                </Navbar.Collapse>
              </Navbar>
              <div className="condition-describe">
                Ng?????i Vi???t Nam ho???c ng?????i n?????c ngo??i t??? 30 ng??y tu???i ?????n 65 tu???i
                sinh s???ng v?? l??m vi???c trong l??nh th??? Vi???t Nam v?? kh??ng r???i Vi???t
                Nam qu?? 180 ng??y li??n t???c
              </div>
              <div className="condition-brief">
                * Tr?????ng h???p kh??ng ???????c tham gia: Ng?????i b??? b????nh t??m th????n, ?????ng
                kinh, phong, ung th?? , th????ng t????t vi??nh vi????n tr??n 80%, ??ang trong
                th???i gian ??i???u tr??? b???nh ho???c th????ng t???t
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
                ??a d???ng ?????i t?????ng tham gia, quy???n l???i b???o v??? t???i ??a
              </h3>
              <div className="protection-describe">
                <p>
                  - ?????c bi???t v???i Benefits One - s???n ph???m b???o hi???m to??n di???n v???i 7
                  quy???n l???i, b???n c?? th??? t??? thi???t k??? g??i b???o hi???m theo nhu c???u
                  v???i m???c ph?? linh ho???t d??nh cho m??nh, gia ????nh v?? nh???ng ng?????i
                  th??n y??u.
                </p>
                <p>
                  - H??y chia s??? v???i ch??ng t??i nhu c???u, t??nh tr???ng s???c kh???e & t??i
                  ch??nh c???a b???n, ch???c ch???n chu??ng t??i s??? t?? v???n g??i b???o hi???m
                  Benefits One ph?? h???p nh???t cho ch??nh b???n, gia ????nh, ng?????i th??n.
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
                    Chi ti???t quy???n l???i
                  </a>
                </div>
                <div className="display-block">
                  <Link
                    to="/download-brochure"
                    className="btn btn-protection"
                    hidden
                  >
                    <i className="mdi mdi-tray-arrow-down"></i>
                    T???i b???n quy???n l???i
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
                  Chi ti???t quy???n l???i
                </a>
              </div>
              <div className="display-block">
                <Link to="/download-brochure" className="btn btn-protection">
                  <i className="mdi mdi-tray-arrow-down"></i>
                  T???i b???n quy???n l???i
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
        <h6 className='text-muted'>Tr??? l?? b???o hi???m c???a b???n</h6>
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
            <h1>Xin ch??o, t??i l?? Affina</h1>
            <span className='question-today'>B???n c???n h??? tr??? g?? h??m nay?</span>
          </div>
        </div>
        <Link to='/about-affina' className='btn btn-assistant'>
          T??m hi???u v??? Affina
        </Link>
      </Container> */}
      <TrustedByLeadingPartner />
    </div>
  );
};

export default HomeComponent;
