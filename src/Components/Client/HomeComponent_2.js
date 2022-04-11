// import Image from 'next/image'
import React from 'react'
import { Col, Container, Nav, Navbar, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomerReviewsComponent from './CustomerReviewsComponent'
import DownloadAppComponent from './DownloadAppComponent'
import QuestionOftenComponent from './QuestionOftenComponent'
import Slider from "react-slick";
import Odometer from 'react-odometerjs';
import NeedInsurance from '../../Templates/Client/NeedInsurance'

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
        <h1>Make your protection simple</h1>
        <Navbar.Text>Instant everything. Incredible prices. Big heart.</Navbar.Text>
        <Nav.Item className='check-our-price'>
          <Link to="/check-our-price" className="btn btn-lg">
            Check our prices</Link>
        </Nav.Item>
      </Container>
      <Container className='trusted-by-top-leading text-center'>
        <h6 className='header-text'>Trusted by top leading</h6>
        <Slider {...settings} >
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pti.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pti@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pti@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pti.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pti@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pti@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pti.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pti@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pti@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pti.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pti@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pti@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pti.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pti@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pti@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pti.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pti@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pti@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
          <Col>
            <div className="slider-item">
              <Image
                src={require("../../Assets/Images/public/partner/pjico.png")}
                srcSet={`
                                ${require('../../Assets/Images/public/partner/pjico@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/pjico@3x.png')} 3x
                            `}
                alt="Picture of the author"
                width={'auto'}
                height={30}
                className="logo-footer"
              />
            </div>
          </Col>
        </Slider>
      </Container>
      <Container className='our-protect-solution text-center'>
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
      <NeedInsurance />
      <Container className='introduce-container '>
        <Row>
          <Col md={6}>
            <div className='introduce-content'>
              <h5>
                <span>Trải nghiệm đơn giản</span><br /> với nền tảng tích hợp trực tuyến thông minh
              </h5>
              <div className='introduce-describe'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Navbar className="end-of-page">
                <Link to="/how-to-it-work">See how it work
                  <i className="mdi mdi-arrow-right"></i></Link>
              </Navbar>
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
                <span>Ut enim ad minim veniam</span><br /> quis nostrud exercitation ullamco laboris nisi ut
              </h5>
              <div className='introduce-describe'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Navbar className="end-of-page">
                <Link to="/how-to-it-work">See how it work
                  <i className="mdi mdi-arrow-right"></i></Link>
              </Navbar>
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
                <span>Excepteur sint occaecat</span><br /> cupidatat non proident, sunt in culpa qui officia
              </h5>
              <div className='introduce-describe'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Navbar className="end-of-page">
                <Link to="/how-to-it-work">See how it work
                  <i className="mdi mdi-arrow-right"></i></Link>
              </Navbar>
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
            Meet your insurance assistant</Link>
        </Nav.Item>
      </Container >
      <QuestionOftenComponent />
      <CustomerReviewsComponent />
      <DownloadAppComponent />
    </div >
  )
}

export default HomeComponent
