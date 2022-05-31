import PropTypes from "prop-types";

import React from 'react'
import { Accordion, Button, Col, Container, Image, Modal, Row, Stack, Tab, Tabs } from 'react-bootstrap'
import accessStyle from "../../Assets";
import { formatPrepaidAmount, isEmptyArray, isStringNullOrEmpty, isViewMobile } from "../../Common/Helper";
import Line from "../../Common/Line";
import configDefault from "../../Config/app";
import htmlParserCode from 'html-react-parser';

const CommonModal = (props) => {
    const { step2 = {}, step3, package_main, additional } = props.data;
    console.log('packageDetail::', props.data);
    return (
        <Modal
            show={props.isShow}
            onHide={props.onHidden}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Col md={3} className="modal-sidebar background-gradient-to-bottom">
                <Container>
                    <Stack direction="horizontal">
                        <Image
                            src={accessStyle.images.partner.affina}
                            srcSet={`
                            ${accessStyle.images.partner.affina2x} 2x, 
                            ${accessStyle.images.partner.affina3x} 3x
                        `}
                            className="img-white"
                            alt="Logo Affina"
                            width={98}
                            height={20}
                        />
                        {
                            isViewMobile() ?
                                <Modal.Header closeButton className="ms-auto close-white"></Modal.Header>
                                :
                                <Image
                                    src={props.data.supplier && configDefault.URL_IMG + props.data.supplier.image}
                                    srcSet={`
                                    ${props.data.supplier && configDefault.URL_IMG + props.data.supplier.image} 2x, 
                                    ${props.data.supplier && configDefault.URL_IMG + props.data.supplier.image} 3x
                                `}
                                    className="ms-auto img-white"
                                    alt="Logo Affina"
                                    width={132}
                                    height={62}
                                />
                        }
                    </Stack>
                </Container>
                <div className={isViewMobile() ? " modal-sidebar-insurance-topic " : "wrap-benefit-mobile"}>
                    <Stack direction="horizontal">
                        {
                            isViewMobile() &&
                            <Image
                                src={props.data.supplier && configDefault.URL_IMG + props.data.supplier.image}
                                srcSet={`
                                    ${props.data.supplier && configDefault.URL_IMG + props.data.supplier.image} 2x, 
                                    ${props.data.supplier && configDefault.URL_IMG + props.data.supplier.image} 3x
                                `}
                                className="img-white"
                                alt="Logo Affina"
                                width={83}
                                height={39}
                            />
                        }
                        <div className={isViewMobile() ? "ms-auto text-right " : 'modal-sidebar-insurance-topic d-block'}>
                            <h5>Bảo hiểm bưu điện  - {props.data.supplier && props.data.supplier.name}</h5>
                            <strong>{props.data && props.data.name}</strong>
                        </div>
                    </Stack>
                </div>
                <Container>
                    <div className="modal-sidebar-insurance sidebar-insurance-benefit">
                        <h5>QUYỀN LỢI CHÍNH</h5>
                        <Stack direction="horizontal">
                            <span>Hạn mức bảo vệ</span>
                            <span className="ms-auto">{formatPrepaidAmount(props.data && props.data.price)}VNĐ</span>
                        </Stack>
                        <Stack direction="horizontal">
                            <span>Phí</span>
                            <span className="ms-auto">{formatPrepaidAmount(props.data && props.data.price_fee)}VNĐ/năm</span>
                        </Stack>
                    </div>
                    <Line type="dashed" color='e6e6e6' />
                    {/* <div className="modal-sidebar-insurance sidebar-insurance-benefit-additional">
                        <h5>QUYỀN LỢI BỔ SUNG</h5>
                        <div className="group-child">
                            {
                                (!isEmptyArray(additional)) &&
                                additional.map((itemAdditional, index) => {
                                    return (
                                        <Stack className="benefit-item" key={itemAdditional._id}>
                                            <span className="benefit-topic">{itemAdditional.name}</span>
                                            <span className="text-uppercase">{formatPrepaidAmount(itemAdditional.amount)}</span>
                                        </Stack>
                                    )
                                })
                            }
                        </div>
                    </div> */}
                    <Line type="dashed" color='e6e6e6' />
                    {
                        !isViewMobile() &&
                        <div className="modal-sidebar-insurance sidebar-insurance-highlights">
                            <h5>ĐIỂM NỔI BẬT</h5>
                            <ul className="list-highlights">
                                <li>
                                    <span>1. Cam kết tái tục trong những năm tiếp theo.</span>
                                </li>
                                <li>
                                    <span>2. Thời gian chờ tối ưu nhất thị trường </span>
                                </li>
                                <li>
                                    <span>3. Quyền lợi bảo hiểm cho điều trị COVID-19 và biến chứng do tiêm vaccine </span>
                                    {/* <ul className="sub-list-highlights">
                                        <li>
                                            <span>Covid-19</span>
                                        </li>
                                        <li>
                                            <span>Biến chứng vaccine</span>
                                        </li>
                                    </ul> */}
                                </li>
                                <li>
                                    <span>4. Lựa chọn phạm vi địa lý trong và ngoài phạm vi lãnh thổ Việt Nam để bạn tự do lựa chọn nơi điều trị phù hợp nhất</span>
                                </li>
                                <li>
                                    <span>5. Bảo hiểm cho trẻ em từ 30 ngày tuổi có thể tham gia độc lập mà không cần bố mẹ tham gia cùng</span>
                                </li>
                                <li>
                                    <span>6. Không giới hạn nơi khám chữa bệnh bao gồm bệnh viện, phòng khám tư nhân, quốc tế</span>
                                </li>
                                <li>
                                    <span>7. Danh sách bảo lãnh viện phí trải dài khắp các tỉnh thành</span>
                                </li>
                                <li>
                                    <span>8. Ứng dụng bồi thường trực tuyến. Áp dụng đối với hồ sơ Ngoại trú và nha khoa (đối với chương trình từ B.5 đến B.10)</span>
                                </li>
                                <li>
                                    <span>9. 100% Trực tuyến: Tham gia bảo hiểm, tra cứu quyền lợi, hạn mức còn lại và trạng thái giải quyết bồi thường.</span>
                                </li>
                                <li>
                                    <span>10. Không nộp form khai báo y tế để tham gia bảo hiểm</span>
                                </li>
                            </ul>
                        </div>
                    }

                </Container>
            </Col>
            <Col md={9} className="position-relative">
                {!isViewMobile() &&
                    <Modal.Header closeButton></Modal.Header>
                }
                <div className="container-tab">
                    <Container>
                        <Tabs defaultActiveKey={isViewMobile() ? "outstanding" : "product-info"} id="uncontrolled-tab-example" className="mb-3">
                            {isViewMobile() &&
                                <Tab eventKey="outstanding" title="Điểm nổi bật">
                                    <Container className="container-participation">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Body>
                                                    <div className="modal-sidebar-insurance sidebar-insurance-highlights">
                                                        <ul className="list-highlights">
                                                            <li>
                                                                <span>Cam kết tái tục</span>
                                                            </li>
                                                            <li>
                                                                <span>Đảm báo mở rộng đối với</span>
                                                                <ul className="sub-list-highlights">
                                                                    <li>
                                                                        <span>Covid-19</span>
                                                                    </li>
                                                                    <li>
                                                                        <span>Biến chứng vaccine</span>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>Bệnh ung thư không bị loại trừ, bảo hiểm cho các bệnh hiểm nghèo</span>
                                                            </li>
                                                            <li>
                                                                <span>Trẻ em được tham gia độc lập mà không cần đi kèm cha mẹ</span>
                                                            </li>
                                                            <li>
                                                                <span>Bảo hiểm cho tất cả cơ sở y tế có giấy phép hợp pháp và cung cấp được chứng từ hợp.</span>
                                                            </li>
                                                            <li>
                                                                <span>Bảo lãnh không cần thẻ tại 150 cơ sở y tế</span>
                                                            </li>
                                                            <li>
                                                                <span>Ứng dụng bồi thường trực tuyến. Áp dụng đối với hồ sơ Ngoại trú và nha khoa</span>
                                                            </li>
                                                            <li>
                                                                <span>Trực tuyến: đăng ký, thanh toán, bồi thường</span>
                                                            </li>
                                                            <li>
                                                                <span>Không nộp form khai báo y tế</span>
                                                            </li>
                                                            <li>
                                                                <span>Chỉ dành riêng cho khách hàng của MMB</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Container>
                                </Tab>
                            }
                            <Tab eventKey="product-info" title="Thông tin sản phẩm">
                                <Container className="container-participation">
                                    <Accordion defaultActiveKey={!isViewMobile() ? "0" : "00"}>
                                        {
                                            (!isEmptyArray(package_main)) &&
                                            package_main.concat(additional).map((itemMain, index) => {
                                                if (itemMain.is_view !== 0) {
                                                    return (
                                                        <Accordion.Item eventKey={itemMain._id} key={itemMain._id}>
                                                            <Accordion.Header>
                                                                <div className="topic">
                                                                    {itemMain.description}
                                                                </div>
                                                                <div className="topic-price btn-outline-blue">
                                                                    {formatPrepaidAmount(itemMain.amount)}VNĐ
                                                                </div>
                                                            </Accordion.Header>
                                                            <Accordion.Body>{
                                                                (!isEmptyArray(itemMain.product_details)) ?
                                                                    itemMain.product_details.map((itemChild, index) => {
                                                                        return (
                                                                            <Accordion defaultActiveKey={itemChild} key={itemChild._id}>
                                                                                <Accordion.Item eventKey={itemChild._id} key={itemChild._id}>
                                                                                    <Accordion.Header disabled>
                                                                                        <div className="topic">
                                                                                            {itemChild.description || itemChild.name}
                                                                                        </div>
                                                                                        {!isStringNullOrEmpty(itemChild.amount) &&
                                                                                            <div className="topic-price btn-outline-blue">
                                                                                                {formatPrepaidAmount(itemChild.amount)}VNĐ
                                                                                            </div>
                                                                                        }
                                                                                    </Accordion.Header>
                                                                                    <Accordion.Body>
                                                                                        {htmlParserCode(itemChild.content)}
                                                                                    </Accordion.Body>
                                                                                </Accordion.Item>
                                                                            </Accordion>
                                                                        )
                                                                    })
                                                                    :
                                                                    htmlParserCode(itemMain.content)
                                                            }</Accordion.Body>
                                                        </Accordion.Item>
                                                    )
                                                } else {
                                                    return null;
                                                }
                                            })
                                        }

                                    </Accordion>
                                </Container>
                            </Tab>
                            <Tab eventKey="terms-of-participation" title="Điều khoản tham gia">
                                <Container className="container-participation">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.iconsProcessExclusion}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.iconsProcessExclusion2x} 2x, 
                                                            ${accessStyle.images.icons.iconsProcessExclusion3x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Quy định về đối tượng tham gia bảo hiểm
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>Công dân Việt Nam hoặc người nước ngoài đang cư trú tại Việt Nam</li>
                                                    <li>Định nghĩa cư trú tại Việt Nam:  Người Việt Nam hoặc nước ngoài sinh sống và làm việc trong lãnh thổ Việt Nam và không rời Việt Nam quá 180 ngày liên tục</li>
                                                    <li>Không bị bệnh tâm thần, động kinh, phong, chưa từng hoặc chưa có dấu hiệu bị ung thư tại thời điểm tham gia bảo hiểm năm đầu tiên</li>
                                                    <li>Không bị tàn tật hoặc thương tật vĩnh viễn từ 80% trở lên (áp dụng cho lần tham gia bảo hiểm đầu tiên)</li>
                                                    <li>Không đang nằm viện điều trị bệnh hoặc thương tật (áp dụng cho lần tham gia bảo hiểm đầu tiên)</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.iconsParticipant}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.iconsParticipant2x} 2x, 
                                                            ${accessStyle.images.icons.iconsParticipant3x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Độ tuổi tham gia từ
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>Từ 30 ngày tuổi đến 65 tuổi</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.iconsChildren}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.iconsChildren} 2x, 
                                                            ${accessStyle.images.icons.iconsChildren} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Trẻ em tham gia
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>+ Trẻ em từ 30 ngày đến dưới 6 tuổi: tăng phí 30% trên phí chuẩn, chỉ được tham gia chương trình 1, 2, 3, 4, áp dụng đồng chi trả 20%.</li>
                                                    <li>+ Người lớn từ 51 tuổi đến 65 tuổi, tăng phí 30% trên phí chuẩn</li>
                                                    <li>+ Trẻ em có thể tham gia độc lập, không cần cha mẹ cùng tham gia</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.waitTime}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.waitTime} 2x, 
                                                            ${accessStyle.images.icons.waitTime} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Thời gian chờ
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>Bệnh thông thường: 30 ngày</li>
                                                    <li>Viêm phế quản, tiểu phế quản, viêm phổi (trẻ em dưới 6 tuổi): 30 ngày </li>
                                                    <li>Bệnh đặc biệt: 365 ngày với điều trị, tử vong & thương tật/tàn tật bộ phận hoặc toàn bộ vĩnh viễn.</li>
                                                    <li>Bệnh có sẵn: 365 ngày với điều trị, tử vong & thương tật/tàn tật toàn bộ vĩnh viễn</li>
                                                    <li>Thai sản: 90 ngày đối với  sảy thai nạo thai theo chỉ định bác sỹ  và 365 ngày đối với sinh con và tử vong</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.copay}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.copay} 2x, 
                                                            ${accessStyle.images.icons.copay} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Đồng chi trả
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>Trẻ em dưới 6 tuổi  :  Đồng chi trả 20% dưới 6 tuổi khi điều trị tại tại tại tất cả các cơ sở y tế, áp dụng cho toàn bộ các quyền lợi</li>
                                                    <li>Thai sản: Đồng chi trả 20% tại bệnh viện tư nhân, quốc tế, bệnh viện công (khoa quốc tế/dịch vụ/tự nguyện)</li>
                                                    <li>Nha Khoa: Đồng chi trả 20% tại bệnh viện tư nhân, quốc tế. Bệnh viện công (khoa quốc tế/dịch vụ/tự nguyện)</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.copay}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.copay} 2x, 
                                                            ${accessStyle.images.icons.copay} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Bảo lãnh viện phí
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>Nội trú cho B1 đến B2. Nội trú, ngoại trú, thai sản, nha khoa cho B3 đến B10. Không bảo lãnh cho tai nạn</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                            </Tab>
                            <Tab eventKey="exclusion-terms" title="Điều khoản loại trừ">
                                <Container className="exclusion-term">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusionMedicine}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusionMedicine2x} 2x, 
                                                            ${accessStyle.images.icons.exclusionMedicine3x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Các chi phí điều trị bất hợp lý. Điều trị hoặc sử dụng thuốc không theo hướng dẫn của cơ sở y tế hoặc không theo chỉ định của bác sĩ.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion02}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion022x} 2x, 
                                                            ${accessStyle.images.icons.exclusion023x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Hành động cố ý gây thiệt hại của người được bảo hiểm hoặc người thừa kế hợp pháp.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion03}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion032x} 2x, 
                                                            ${accessStyle.images.icons.exclusion033x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Người được bảo hiểm vi phạm nghiêm trọng phápluật, nội quy, quy định của chính quyền địa phương hoặc các tổ chức xã hội.
                                                </div></Accordion.Header>
                                            <Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion04}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion042x} 2x, 
                                                            ${accessStyle.images.icons.exclusion043x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Dịch vụ điều trị tai nạn hoặc tại viện điều trị bằng thủy lực hoặc các phương pháp thiên nhiên
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion05}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion052x} 2x, 
                                                            ${accessStyle.images.icons.exclusion053x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Các hoạt động thể thao nguy hiểm, hoạt động vũ trang.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion06}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion062x} 2x, 
                                                            ${accessStyle.images.icons.exclusion063x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Tham gia các hoạt động hàng không.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion07}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion072x} 2x, 
                                                            ${accessStyle.images.icons.exclusion073x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Chiến tranh, nội chiến, đình công, khủng bố
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion08}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion082x} 2x, 
                                                            ${accessStyle.images.icons.exclusion083x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Hậu quả của việc sử dụng rượu bia, các chất kích thích gây tai nạn.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion09}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion092x} 2x, 
                                                            ${accessStyle.images.icons.exclusion093x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Điều khiển giao thông trong tình trạng có nồng độ cồn quá quy định.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>
                                                <div className="wrap-icons">
                                                    <Image
                                                        src={accessStyle.images.icons.exclusion10}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.exclusion102x} 2x, 
                                                            ${accessStyle.images.icons.exclusion103x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                    />
                                                </div>
                                                <div className="topic">
                                                    Các chấn thương do tác nhân hạt nhân gây ra hoặc do bị nhiễm chất phòng xạ.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                            </Tab>
                            <Tab eventKey="compensation-process" title="Quy trình bồi thường">
                                <Container className="container-process">
                                    <h4>Bao gồm 2 quy trình chính:</h4>
                                    <div className="group-process">
                                        <Stack direction="horizontal">
                                            <Col md={4} xs={12} className="process-item">
                                                <Stack direction="horizontal">
                                                    <Image
                                                        src={accessStyle.images.icons.process_security}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.process_security2x} 2x, 
                                                            ${accessStyle.images.icons.process_security3x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                        width={41}
                                                        height={41}
                                                    />
                                                    <span>Bảo lãnh viện phí</span>
                                                </Stack>
                                            </Col>
                                            <Col md={4} xs={12} className="process-item">
                                                <Stack direction="horizontal">
                                                    <Image
                                                        src={accessStyle.images.icons.prepaid}
                                                        srcSet={`
                                                            ${accessStyle.images.icons.prepaid2x} 2x, 
                                                            ${accessStyle.images.icons.prepaid3x} 3x
                                                        `}
                                                        alt="Icons process security"
                                                        width={41}
                                                        height={41}
                                                    />
                                                    <span>Trả trước thanh toán sau</span>
                                                </Stack>
                                            </Col>
                                        </Stack>
                                    </div>
                                </Container>
                            </Tab>
                            <Tab eventKey="hospital-fee-guarantee" title="Danh sách bảo lãnh viện phí">
                                Danh sách bảo lãnh viện phí
                            </Tab>
                        </Tabs>
                    </Container>
                </div>
                <Modal.Footer>
                    <div className="position-absolute insurance-rule">
                        <Image
                            src={accessStyle.images.icons.download}
                            srcSet={`
                                ${accessStyle.images.icons.download2x} 2x, 
                                ${accessStyle.images.icons.download3x} 3x
                            `}
                            alt="Icons download"
                            width={24}
                            height={24}
                        />
                        <span>Quy tắc bảo hiểm</span>
                    </div>
                    {/* <Button className="btn-outline-blue">So sánh</Button> */}
                    <Button className="btn-blue " onClick={props.onHidden}>Tiếp tục mua</Button>
                </Modal.Footer>
            </Col>
        </Modal>
    )
}

CommonModal.propTypes = {
    isShow: PropTypes.bool,
    onHidden: PropTypes.func
};
CommonModal.defaultProps = {
    isShow: false,
    onHidden: () => { },
};
export default CommonModal
