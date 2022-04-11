import PropTypes from "prop-types";

import React from 'react'
import { Accordion, Button, Col, Container, Image, Modal, Row, Stack, Tab, Tabs } from 'react-bootstrap'
import accessStyle from "../../Assets";
import { formatPrepaidAmount } from "../../Common/Helper";
import Line from "../../Common/Line";
import configDefault from "../../Config/app";

const CommonModal = (props) => {
    const { step2 = {}, step3 } = props.data;
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
                    </Stack>
                </Container>
                <div className="modal-sidebar-insurance-topic">
                    <h5>Bảo hiểm bưu điện  - {props.data.supplier && props.data.supplier.name}</h5>
                    <strong>{props.data && props.data.name}</strong>
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
                    <div className="modal-sidebar-insurance sidebar-insurance-benefit-additional">
                        <h5>QUYỀN LỢI BỔ SUNG</h5>
                        <div className="group-child">
                            <Stack direction="horizontal">
                                <span>Điều trị ngoại trú</span>
                                <span className="ms-auto">Nha khoa</span>
                            </Stack>
                            <Stack direction="horizontal">
                                <span>không hỗ trợ</span>
                                <span className="ms-auto">không hỗ trợ</span>
                            </Stack>
                        </div>
                        <div className="group-child">
                            <Stack direction="horizontal">
                                <span>Thai sản</span>
                                <span className="ms-auto">Bệnh hiểm nghèo</span>
                            </Stack>
                            <Stack direction="horizontal">
                                <span>không hỗ trợ</span>
                                <span className="ms-auto">không hỗ trợ</span>
                            </Stack>
                        </div>
                    </div>
                    <Line type="dashed" color='e6e6e6' />
                    <div className="modal-sidebar-insurance sidebar-insurance-highlights">
                        <h5>ĐIỂM NỔI BẬT</h5>
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
                </Container>
            </Col>
            <Col md={9} className="position-relative">
                <Modal.Header closeButton></Modal.Header>
                <div className="container-tab">
                    <Container>
                        <Tabs defaultActiveKey="product-info" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="product-info" title="Thông tin sản phẩm">
                                <Container className="container-participation">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className="topic">
                                                    Tử vong hoặc thương tật toàn bộ/bộ phận vĩnh viễn do tai nạn
                                                </div>
                                                <div className="topic-price btn-outline-blue">
                                                    80.000.000VNĐ
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <div className="topic">
                                                    Chi phí y tế điều trị thương tật do tai nạn/năm
                                                </div>
                                                <div className="topic-price btn-outline-blue">
                                                    20.000.000VNĐ
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <div className="topic">
                                                    Tử vong/tàn tật, thương tật toàn bộ do ốm đau , bệnh tật, thai sản
                                                </div>
                                                <div className="topic-price btn-outline-blue">
                                                    20.000.000VNĐ
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                <div className="topic">
                                                    Quyền lợi nội trú và trong ngày do ốm bệnh
                                                </div>
                                                <div className="topic-price btn-outline-blue">
                                                    40.000.000VNĐ
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content list-style-numbered">
                                                    <li>Chi phí nằm viện phát sinh trong thời gian nằm viện do bác sĩ kê đơn. Tối đa 60 ngày / năm</li>
                                                    <li>Chi phí y tế liên quan đến phẫu thuật nội trú, trong ngày, ngoại trú</li>
                                                    <li>Chi phí vận chuyển cấp cứu / năm (loại trừ đường hàng không/ SOS/ IPA) áp dụng cho tất cả người được bảo hiểm có tên trong danh sách</li>
                                                    <li>Trợ cấp nằm viện tại bệnh viện tối đa 60 ngày/ năm</li>
                                                    <li>Chi phí trước nhập viện (trong vòng 30 ngày trước khi nhập viện)</li>
                                                    <li>Điều trị sau khi xuất viện (trong vòng 30 ngày sau khi xuất viện, không giới hạn số lần tái khám)</li>
                                                    <li>Y tá chăm sóc tại nhà (trong vòng 15 ngày sau khi xuất viện, phải được chỉ định của bác sĩ và là dịch vụ cung cấp bởi y tá có giấy phép hành nghề)</li>
                                                    <li>Trợ cấp mai táng</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
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
                                            <div className="process-item">
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
                                            </div>
                                            <div className="process-item">
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
                                            </div>
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
                    <Button className="btn-outline-blue">So sánh</Button>
                    <Button className="btn-blue ">Tiếp tục mua</Button>
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
