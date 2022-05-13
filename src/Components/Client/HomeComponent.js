// import Image from 'next/image'
import React from 'react'
import { Col, Container, Image, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import accessStyle from '../../Assets'
import { BUY_NOW, LINK_DOWNLOAD } from '../../Routers/RoutePath'
import NeedInsurance from '../../Templates/Client/NeedInsurance'
import CustomerReviewsComponent from './CustomerReviewsComponent'
import QuestionOftenComponent from './QuestionOftenComponent'
import TrustedByLeadingPartner from './TrustedByLeadingPartner'

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
    <div className='benefits-container'>
      <Container fluid className="benefits position-relative">
        <div className='translucent-layer'></div>
        <Image
          src={accessStyle.images.static.backgroundHome}
          srcSet={`
                    ${accessStyle.images.static.backgroundHome2x} 2x, 
                    ${accessStyle.images.static.backgroundHome3x} 3x
                `}
          alt="Background home page"
          width={'100%'}
          height={'100%'}
        />
        <Container>
          <div className='position-absolute'>
            <div className='merchant-benefit'>
              {/* &nbsp; */}
              <Image
                src={accessStyle.images.static.merchantBenefit}
                srcSet={`
                    ${accessStyle.images.static.merchantBenefit2x} 2x, 
                    ${accessStyle.images.static.merchantBenefit3x} 3x
                `}
                alt="Merchant marsh benefit"
                width={'auto'}
                height={'auto'}
              />
            </div>
            <h1>Bảo hiểm sức khỏe<br /> Benefits One</h1>
            {/* <h4 className='describe'>Bảo hiểm sức khỏe Benefits One</h4> */}
            <h4 className='describe'>
              Giải pháp công nghệ từ Affina - 1 chạm cho tất cả, 1 phút xử lý bồi thường.<br />
              Được thiết kế bởi Mercer Marsh Benefits – chuyên gia hàng đầu <br /> về giải pháp bảo hiểm.
            </h4>
            <a href={BUY_NOW} className="btn btn-lg">THAM GIA NGAY</a>
            {/* <Link to={BUY_NOW} className="btn btn-lg">
              THAM GIA NGAY</Link> */}
          </div>
        </Container>
      </Container>
      <Container className='benefits-seconds'>
        <Row>
          <Col md={4} sm={12} xs={12} data-aos="fade-right">
            <h3 className='header-text'>Điều gì làm cho Affina trở thành nơi tốt nhất để mua bảo hiểm sức khoẻ?</h3>
            <hr className='line-gradient' />
            <p>Sản phẩm tối ưu</p>
            <p>- Mở rộng phạm vi địa lý toàn cầu để bạn tự do lựa chọn nơi điều trị phù hợp nhất  </p>
            <p>- Thời gian chờ tối ưu nhất thị trường</p>
            <Link to={BUY_NOW} className="btn btn-lg">Tham gia ngay</Link>
          </Col>
          <Col md={8} sm={12} xs={12} data-aos="fade-left">
            <Row>
              <Col md={6} sm={6} xs={12} className='col'>
                <Image
                  src={accessStyle.images.icons.liveOnline}
                  srcSet={`
                    ${accessStyle.images.icons.liveOnline2x} 2x, 
                    ${accessStyle.images.icons.liveOnline3x} 3x
                `}
                  alt="live online"
                  width={58}
                  height={58}
                />
                <div className='title'>
                  100% Trực tuyến
                </div>
                <Navbar className='brief'>
                  Một chạm hoàn thành đơn, 1 phút hoàn tất bồi thường. Quy trình tham gia bảo hiểm đơn giản, nhanh chóng, chỉ trong 1 phút.
                </Navbar>
              </Col>
              <Col md={6} sm={6} xs={12} className='col'>
                <Image
                  src={accessStyle.images.icons.procedureBasic}
                  srcSet={`
                    ${accessStyle.images.icons.procedureBasic2x} 2x, 
                    ${accessStyle.images.icons.procedureBasic3x} 3x
                `}
                  alt="live online"
                  width={58}
                  height={58}
                />
                <div className='title'>
                  Quản lý dễ dàng
                </div>
                <Navbar className='brief'>
                  Chủ động tra cứu quyền lợi, hạn mức còn lại và trạng thái giải quyết bồi thường nhanh chóng.
                </Navbar>
              </Col>
              <Col md={6} sm={6} xs={12} className='col'>
                <Image
                  src={accessStyle.images.icons.medicine}
                  srcSet={`
                    ${accessStyle.images.icons.medicine2x} 2x, 
                    ${accessStyle.images.icons.medicine3x} 3x
                `}
                  alt="live online"
                  width={58}
                  height={58}
                />
                <div className='title'>
                  Linh động quyền lợi
                </div>
                <Navbar className='brief'>
                  Trẻ em có thể tham gia độc lập mà không cần có bố mẹ tham gia cùng, tang quyền lợi bệnh hiểm nghèo.
                </Navbar>
              </Col>
              <Col md={6} sm={6} xs={12} className='col'>
                <Image
                  src={accessStyle.images.icons.medicine}
                  srcSet={`
                    ${accessStyle.images.icons.medicine2x} 2x, 
                    ${accessStyle.images.icons.medicine3x} 3x
                `}
                  alt="live online"
                  width={58}
                  height={58}
                />
                <div className='title'>
                  Cam kết đồng hành
                </div>
                <Navbar className='brief'>
                  Luôn bên cạnh bạn và cam kết tái tục bảo hiểm trong những năm tiếp theo.
                </Navbar>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container data-aos='zoom-in'>
        <div className='benefits-condition'>
          <Row>
            <Col md={10} xs={12}>
              <div className='condition-header-text'>Điều kiện tham gia bảo hiểm</div>
              <div className='condition-describe'>Tất cả công dân đang sinh sống tại Việt Nam từ 30 ngày tuổi đến 65 tuổi (*)</div>
              <div className='condition-brief'>(*) Trừ người mắc bệnh tâm thần, thần kinh, phong, đã và đang bị ung thư; người bị thương tật vĩnh viễn trên 80%; người đang trong thời gian điều trị bệnh hoặc thương tật.</div>
            </Col>
            <Col md={2} xs={12}>
              <Link to={BUY_NOW} className='btn'>
                Tham gia ngay
                <i className="mdi mdi-arrow-right"></i>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className='protection-rights'>
          <Row>
            <Col md={6} sm={12} xs={12} data-aos="fade-right">
              <h3 className='protection-header-text'>Đa dạng đối tượng tham gia, quyền lợi bảo vệ tối đa</h3>
              <div className='protection-describe'>
                <p>* Nếu bạn và người thân trong độ tuổi phù hợp (từ 30 ngày tuổi cho đến 65 tuổi) và không mắc các chứng bệnh loại trừ thì đều có thể tham gia chương trình bảo hiểm sức khỏe này nhé.  </p>
                <p>* Chỉ cần bỏ ra một khoản phí hợp lý, bạn, gia đình & người thân sẽ hoàn toàn an tâm khi được Benefits One bảo vệ toàn diện với 7 quyền lợi (gồm 4 quyền lợi chính và 3 quyền lợi bổ sung).</p>
                <p>* Đặc biệt với Benefits One, bạn có thể cùng Affina tùy chọn, linh hoạt “thiết kế” các quyền lợi bảo hiểm bổ sung dành cho mình, gia đình và những người thân yêu.</p>
                <p>“TỰ THIẾT KẾ” GÓI BẢO HIỂM THEO NHU CẦU VỚI MỨC PHÍ LINH HOẠT </p>
                <p>* Nếu bạn chia sẻ với Affina nhu cầu, tình trạng sức khỏe & tài chính của mình, Affina chắc chắn sẽ tư vấn để bạn lựa chọn & “tự thiết kế” nên gói bảo hiểm Benefits One phù hợp nhất cho chính bạn, gia đình, người thân.</p>
              </div>
              <div className='display-block'>
                <a download target="_blank" href={LINK_DOWNLOAD} className='btn btn-outline-protection'>
                  Chi tiết quyền lợi
                </a>
              </div>
              <div className='display-block'>
                <Link to='/download-brochure' className='btn btn-protection'>
                  <i className="mdi mdi-tray-arrow-down"></i>
                  Tải bản quyền lợi
                </Link>
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
                width={'100%'}
                height={'100%'}
                className="logo-footer"
              />
            </Col>
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
    </div >
  )
}

export default HomeComponent
