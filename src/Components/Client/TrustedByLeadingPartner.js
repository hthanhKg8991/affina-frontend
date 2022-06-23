import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Slider from 'react-slick'
import accessStyle from '../../Assets';

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
        slidesToShow: 3,
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
    const listPartner = [
        {
            image: accessStyle.images.partner.logoMIC,
            image2x: accessStyle.images.partner.logoMIC,
            image3x: accessStyle.images.partner.logoMIC,
        },
        {
            image: accessStyle.images.partner.gic,
            image2x: accessStyle.images.partner.gic2x,
            image3x: accessStyle.images.partner.gic3x,
        },
        {
            image: accessStyle.images.partner.logoBSH,
            image2x: accessStyle.images.partner.logoBSH2x,
            image3x: accessStyle.images.partner.logoBSH3x,
        },
        {
            image: accessStyle.images.partner.pti,
            image2x: accessStyle.images.partner.pti2x,
            image3x: accessStyle.images.partner.pti3x,
        },
    ]
    return (
        <Container className='trusted-by-top-leading text-center' style={{marginLeft: "auto", marginRight: "auto"}}>
            <h6 className='header-text'>Đối tác trực tiếp của Affina</h6>
            <Slider {...settings} >
                {
                    listPartner.map((item, idnex) => {
                        return (
                            <Col>
                                <div className="slider-item">
                                    <Image
                                        src={item.item}
                                        srcSet={`
                                        ${item.image2x} 2x, 
                                        ${item.image3x} 3x
                                    `}
                                        alt="Picture of the author"
                                        width={'auto'}
                                        height={30}
                                        className="logo-footer"
                                    />
                                </div>
                            </Col>
                        )
                    })
                }
            </Slider>
        </Container>
    )
}

export default TrustedByLeadingPartner
