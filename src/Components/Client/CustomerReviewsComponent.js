import { Col, Container, Nav, Navbar } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const listData = [
    {
        rate:4,
        date: '5 Days ago',
        title: 'An toàn, chính xác',
        describe: 'Các dịch vụ của Affina cung cấp vô cùng hữu ích. Nhìn chung tôi đã có một trải nghiệm tốt với Affina',
        author: 'NGUYỄN DUY PHƯƠNG',
    },
    {
        rate:5,
        date: '5 Days ago',
        title: 'Đơn gian, nhanh chóng',
        describe: 'Sử dụng được ở nhiều bệnh viện và phòng khám',
        author: 'NGUYỄN THỊ HÀ GIANG',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'Nhanh gọn, tiện ích,',
        describe: 'Hoàn thành hồ sơ bảo hiểm nhanh gọn ',
        author: 'NGUYỄN DOÃN MINH TUẤN',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'Nhanh gọn, tiện ích, rất đơn giản dễ sử dụng, trang web thân thiện',
        describe: 'Tôi đánh giá cao chất lượng dịch vụ của Affina',
        author: 'NÔNG THỊ MAI LINH',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'An toàn và uy tín',
        describe: 'Giao diện dễ sử dụng',
        author: 'PHẠM NHẬT MINH QUANG',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'Tiện lợi, hiện đại, tiết kiệm thời gian.',
        describe: 'Tôi đã nhận được một chính sách bảo hiểm tốt.',
        author: 'HỒ TẤN ĐẠT',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'Thủ tục giải quyết bồi thường nhanh.',
        describe: 'Cảm ơn dịch vụ yêu cầu bồi thường của Affina',
        author: 'KHA NGÔ',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'Nhanh ngọn, trải nghiệm tốt',
        describe: 'Mình luôn giới thiệu cho mọi người về dịch vụ của AFFINA',
        author: 'TRẦN TIẾN',
    },
    {
        rate:4,
        date: '5 Days ago',
        title: 'Đơn giản, dễ hiểu, nhanh chóng, sản phẩm tốt.',
        describe: 'Trải nghiệm rất thú vị và an tâm tại Affina.',
        author: 'BÙI THỊ NGUYỆT MINH',
    },

]
function CustomerReviewsComponent() {
    const [dataCustomer, setDataCustomer] = useState(listData);

    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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

    const rateStart = (rate) => {
        var rateTemplate = []
        for (var i = 0; i <= 4; i++) {
            if (i < rate) {
                rateTemplate.push(
                    <Nav.Item className="icons-star star-active" key={rate+i}>
                        <i className="mdi mdi-star"></i>
                    </Nav.Item>
                )
            } else {
                rateTemplate.push(
                    <Nav.Item className="icons-star star-inactive" key={rate+i}>
                        <i className="mdi mdi-star-half-full"></i>
                    </Nav.Item>
                )
            }
        }

        return rateTemplate
    }

    return (
        <Container fluid className="customer-reviews">
            <Container>
                <Nav className="justify-content-center flex-column align-items-center">
                    <h1 className="text-gradient">Nhận xét từ khách hàng</h1>
                    <Navbar.Text className="brief">4.8 trên 5 điểm dựa trên 180 nhận xét</Navbar.Text>
                </Nav>
                <Slider {...settings}>
                    {
                        dataCustomer.map((item, index) => {
                            return (
                                <Col data-aos='fade-up' key={index}>
                                    <Container>
                                        <div className="slider-item">
                                            <Navbar>
                                                {/* <Navbar.Text>
                                                    <i className="mdi mdi-star"></i>
                                                    <i className="mdi mdi-star"></i>
                                                    <i className="mdi mdi-star"></i>
                                                    <i className="mdi mdi-star"></i>
                                                    <i className="mdi mdi-star-half-full"></i>
                                                </Navbar.Text> */}
                                                {rateStart(item.rate)}
                                                <Navbar.Collapse className="justify-content-end">
                                                    <Navbar.Text className="text-date">{item.date}</Navbar.Text>
                                                </Navbar.Collapse>
                                            </Navbar>
                                            <Nav>
                                                <Navbar.Text className="title text-gradient">{item.title}</Navbar.Text>
                                                <Navbar.Text className="description">{item.describe}</Navbar.Text>
                                                <Navbar.Text className="author">{item.author}</Navbar.Text>
                                            </Nav>
                                        </div>
                                    </Container>
                                </Col>
                            )
                        })
                    }

                </Slider>
                <Nav className="justify-content-center">
                    <Link className="review-all text-gradient" to="/">Xem tất cả nhận xét</Link>
                </Nav>
            </Container>
        </Container>
    )
}
export default CustomerReviewsComponent;