import 'odometer/themes/odometer-theme-default.css';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Odometer from 'react-odometerjs';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { BUY_NOW } from '../../Routers/RoutePath';

export default function NeedInsurance() {
    const [price, setPrice] = useState(0);
    const [cost, setCost] = useState(0);
    const [buyInsurance, setBuyInsurance] = useState(0);
    const [costBuyInsurance, setCostBuyInsurance] = useState(0);
    const arrayOdometer1 = [0, 0, 0];
    const arrayOdometer2 = [2571000, 1366000, 3371000];
    const arrayOdometer3 = [176000000, 1500000, 75000000];
    const arrayOdometer4 = [450000000, 6000000, 150000000];
    let count = 0;
    const odometerSlide = () => {
        setPrice(arrayOdometer1[count]);
        setCost(arrayOdometer3[count]);
        setBuyInsurance(arrayOdometer2[count]);
        setCostBuyInsurance(arrayOdometer4[count]);
        let removeInterval = setInterval(() => {
            count++
            if (count >= arrayOdometer1.length) {
                count = 0;
                setPrice(arrayOdometer1[count])
                setCost(arrayOdometer3[count])
                setBuyInsurance(arrayOdometer2[count])
                setCostBuyInsurance(arrayOdometer4[count])
            } else {
                setPrice(arrayOdometer1[count])
                setCost(arrayOdometer3[count])
                setBuyInsurance(arrayOdometer2[count])
                setCostBuyInsurance(arrayOdometer4[count])
            }
            // clearInterval(removeInterval);
        }, 6000);
    }

    useEffect(() => {
        odometerSlide()
    }, [count]);


    const slickOdometer = {
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        arrows: false,
        autoplaySpeed: 5990
        // nextArrow:
    }
    return (
        <Container className='text-center'>
            <div className='background-gradient really-need-insurance'>
                <h4 className='header-text'>Hmm, Bạn có thật sự cần bảo hiểm hay không?</h4>
                <small className='text-brief'>Bạn cho rằng mua bảo hiểm là không cần thiết, hãy để Affina cho bạn thấy điều này</small>
                <Container className='content-really-need-insurance position-relative'>
                    <Row>
                        <Col xs={6} className='col'>
                            <div className='text-muted'>Không tham gia bảo hiểm</div>
                            <div className='text-muted price'>
                                <Odometer
                                    format="(.ddd)"
                                    duration={500}
                                    value={price}
                                />đ
                            </div>
                            <div className='text-muted-white'>Chi phí thực tế phát sinh</div>
                            <div className='text-muted-white-price'>
                                <Odometer
                                    format="(.ddd)"
                                    duration={500}
                                    value={cost}
                                />
                                đ</div>
                        </Col>
                        <Col className='position-absolute'>
                            <Slider {...slickOdometer} >
                                <div className="slider-item">
                                    <h1>Nhóm bệnh ung thư</h1>
                                </div>
                                <div className="slider-item">
                                    <h1>Nhóm bệnh Thường</h1>
                                </div>
                                <div className="slider-item">
                                    <h1>Tai nạn giao thông</h1>
                                </div>
                            </Slider>
                        </Col>
                        <Col xs={6} className='col'>
                            <div className='text-muted'>Tham gia bảo hiểm từ</div>
                            <div className='text-muted price'>
                                <Odometer
                                    format="(.ddd)"
                                    duration={500}
                                    value={buyInsurance}
                                />đ</div>
                            <div className='text-muted-white'>Số tiền được bảo hiểm</div>
                            <div className='text-muted-white-price'>
                                <Odometer
                                    format="(.ddd)"
                                    duration={500}
                                    value={costBuyInsurance}
                                />đ
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Link to={BUY_NOW} className='btn btn-outline-really-need-insurance'>Tham gia ngay</Link>
                </div>
            </div>
        </Container>
    )
}
