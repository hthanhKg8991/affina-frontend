import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Slider from 'react-slick'

const TrustedByLeadingPartner = () => {
    const settings = {
        dots: false,
        autoplay: true,
        // infinite: true,
        pauseOnFocus: false,
        pauseOnHover: true,
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
        <Container className='trusted-by-top-leading text-center'>
            <h6 className='header-text'>Đối tác trực tiếp của Affina</h6>
            <Slider {...settings} >
                <Col>
                    <div className="slider-item">
                        <Image
                            src={require("../../Assets/Images/public/partner/gic.png")}
                            srcSet={`
                                ${require('../../Assets/Images/public/partner/gic@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/gic@3x.png')} 3x
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
                            src={require("../../Assets/Images/public/partner/gic.png")}
                            srcSet={`
                                ${require('../../Assets/Images/public/partner/gic@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/gic@3x.png')} 3x
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
                            src={require("../../Assets/Images/public/partner/gic.png")}
                            srcSet={`
                                ${require('../../Assets/Images/public/partner/gic@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/gic@3x.png')} 3x
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
                            src={require("../../Assets/Images/public/partner/gic.png")}
                            srcSet={`
                                ${require('../../Assets/Images/public/partner/gic@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/gic@3x.png')} 3x
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
                            src={require("../../Assets/Images/public/partner/gic.png")}
                            srcSet={`
                                ${require('../../Assets/Images/public/partner/gic@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/gic@3x.png')} 3x
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
                            src={require("../../Assets/Images/public/partner/gic.png")}
                            srcSet={`
                                ${require('../../Assets/Images/public/partner/gic@2x.png')} 2x, 
                                ${require('../../Assets/Images/public/partner/gic@3x.png')} 3x
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
            </Slider>
        </Container>
    )
}

export default TrustedByLeadingPartner
