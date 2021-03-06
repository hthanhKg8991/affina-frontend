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
                            <h5>B???o hi???m b??u ??i???n  - {props.data.supplier && props.data.supplier.name}</h5>
                            <strong>{props.data && props.data.name}</strong>
                        </div>
                    </Stack>
                </div>
                <Container>
                    <div className="modal-sidebar-insurance sidebar-insurance-benefit">
                        <h5>QUY???N L???I CH??NH</h5>
                        <Stack direction="horizontal">
                            <span>H???n m???c b???o v???</span>
                            <span className="ms-auto">{formatPrepaidAmount(props.data && props.data.price)}VN??</span>
                        </Stack>
                        <Stack direction="horizontal">
                            <span>Ph??</span>
                            <span className="ms-auto">{formatPrepaidAmount(props.data && props.data.price_fee)}VN??/n??m</span>
                        </Stack>
                    </div>
                    <Line type="dashed" color='e6e6e6' />
                    {/* <div className="modal-sidebar-insurance sidebar-insurance-benefit-additional">
                        <h5>QUY???N L???I B??? SUNG</h5>
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
                            <h5>??I???M N???I B???T</h5>
                            <ul className="list-highlights">
                                <li>
                                    <span>1. Cam k???t t??i t???c trong nh???ng n??m ti???p theo.</span>
                                </li>
                                <li>
                                    <span>2.??Th???i gian ch??? t???i ??u nh???t th??? tr?????ng </span>
                                </li>
                                <li>
                                    <span>3. Quy???n l???i b???o hi???m cho ??i???u tr??? COVID-19 v?? bi???n ch???ng do ti??m vaccine </span>
                                    {/* <ul className="sub-list-highlights">
                                        <li>
                                            <span>Covid-19</span>
                                        </li>
                                        <li>
                                            <span>Bi???n ch???ng vaccine</span>
                                        </li>
                                    </ul> */}
                                </li>
                                <li>
                                    <span>4. L???a ch???n ph???m vi ?????a l?? trong v?? ngo??i ph???m vi l??nh th??? Vi???t Nam ????? b???n t??? do l???a ch???n n??i ??i???u tr??? ph?? h???p nh???t</span>
                                </li>
                                <li>
                                    <span>5. B???o hi???m cho tr??? em t??? 30 ng??y tu???i c?? th??? tham gia ?????c l???p m?? kh??ng c???n b??? m??? tham gia c??ng</span>
                                </li>
                                <li>
                                    <span>6. Kh??ng gi???i h???n n??i kh??m ch???a b???nh bao g???m b???nh vi???n, ph??ng kh??m t?? nh??n, qu???c t???</span>
                                </li>
                                <li>
                                    <span>7. Danh s??ch b???o l??nh vi???n ph?? tr???i d??i kh???p c??c t???nh th??nh</span>
                                </li>
                                <li>
                                    <span>8. ???ng d???ng b???i th?????ng tr???c tuy???n. ??p d???ng ?????i v???i h??? s?? Ngo???i tr?? v?? nha khoa (?????i v???i ch????ng tr??nh t??? B.5 ?????n B.10)</span>
                                </li>
                                <li>
                                    <span>9. 100% Tr???c tuy???n: Tham gia b???o hi???m, tra c???u quy???n l???i, h???n m???c c??n l???i v?? tr???ng th??i gi???i quy???t b???i th?????ng.</span>
                                </li>
                                <li>
                                    <span>10. Kh??ng n???p form khai b??o y t??? ????? tham gia b???o hi???m</span>
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
                                <Tab eventKey="outstanding" title="??i???m n???i b???t">
                                    <Container className="container-participation">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Body>
                                                    <div className="modal-sidebar-insurance sidebar-insurance-highlights">
                                                        <ul className="list-highlights">
                                                            <li>
                                                                <span>Cam k???t t??i t???c</span>
                                                            </li>
                                                            <li>
                                                                <span>?????m b??o m??? r???ng ?????i v???i</span>
                                                                <ul className="sub-list-highlights">
                                                                    <li>
                                                                        <span>Covid-19</span>
                                                                    </li>
                                                                    <li>
                                                                        <span>Bi???n ch???ng vaccine</span>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <span>B???nh ung th?? kh??ng b??? lo???i tr???, b???o hi???m cho c??c b???nh hi???m ngh??o</span>
                                                            </li>
                                                            <li>
                                                                <span>Tr??? em ???????c tham gia ?????c l???p m?? kh??ng c???n ??i k??m cha m???</span>
                                                            </li>
                                                            <li>
                                                                <span>B???o hi???m cho t???t c??? c?? s??? y t??? c?? gi???y ph??p h???p ph??p v?? cung c???p ???????c ch???ng t??? h???p.</span>
                                                            </li>
                                                            <li>
                                                                <span>B???o l??nh kh??ng c???n th??? t???i 150 c?? s??? y t???</span>
                                                            </li>
                                                            <li>
                                                                <span>???ng d???ng b???i th?????ng tr???c tuy???n. ??p d???ng ?????i v???i h??? s?? Ngo???i tr?? v?? nha khoa</span>
                                                            </li>
                                                            <li>
                                                                <span>Tr???c tuy???n: ????ng k??, thanh to??n, b???i th?????ng</span>
                                                            </li>
                                                            <li>
                                                                <span>Kh??ng n???p form khai b??o y t???</span>
                                                            </li>
                                                            <li>
                                                                <span>Ch??? d??nh ri??ng cho kh??ch h??ng c???a MMB</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Container>
                                </Tab>
                            }
                            <Tab eventKey="product-info" title="Th??ng tin s???n ph???m">
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
                                                                    {formatPrepaidAmount(itemMain.amount)}VN??
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
                                                                                                {formatPrepaidAmount(itemChild.amount)}VN??
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
                            <Tab eventKey="terms-of-participation" title="??i???u kho???n tham gia">
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
                                                    Quy ?????nh v??? ?????i t?????ng tham gia b???o hi???m
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>C??ng d??n Vi???t Nam ho???c ng?????i n?????c ngo??i ??ang c?? tr?? t???i Vi???t Nam</li>
                                                    <li>?????nh ngh??a c?? tr?? t???i Vi???t Nam:  Ng?????i Vi???t Nam ho???c n?????c ngo??i sinh s???ng v?? l??m vi???c trong l??nh th??? Vi???t Nam v?? kh??ng r???i Vi???t Nam qu?? 180 ng??y li??n t???c</li>
                                                    <li>Kh??ng b??? b???nh t??m th???n, ?????ng kinh, phong, ch??a t???ng ho???c ch??a c?? d???u hi???u b??? ung th?? t???i th???i ??i???m tham gia b???o hi???m n??m ?????u ti??n</li>
                                                    <li>Kh??ng b??? t??n t???t ho???c th????ng t???t v??nh vi???n t??? 80% tr??? l??n (??p d???ng cho l???n tham gia b???o hi???m ?????u ti??n)</li>
                                                    <li>Kh??ng ??ang n???m vi???n ??i???u tr??? b???nh ho???c th????ng t???t (??p d???ng cho l???n tham gia b???o hi???m ?????u ti??n)</li>
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
                                                    ????? tu???i tham gia t???
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>T??? 30 ng??y tu???i ?????n 65 tu???i</li>
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
                                                    Tr??? em tham gia
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>+ Tr??? em t??? 30 ng??y ?????n d?????i 6 tu???i: t??ng ph?? 30% tr??n ph?? chu???n, ch??? ???????c tham gia ch????ng tr??nh 1, 2, 3, 4, ??p d???ng ?????ng chi tr??? 20%.</li>
                                                    <li>+ Ng?????i l???n t??? 51 tu???i ?????n 65 tu???i, t??ng ph?? 30% tr??n ph?? chu???n</li>
                                                    <li>+ Tr??? em c?? th??? tham gia ?????c l???p, kh??ng c???n cha m??? c??ng tham gia</li>
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
                                                    Th???i gian ch???
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>B???nh th??ng th?????ng: 30 ng??y</li>
                                                    <li>Vi??m ph??? qu???n, ti???u ph??? qu???n, vi??m ph???i (tr??? em d?????i 6 tu???i): 30 ng??y </li>
                                                    <li>B???nh ?????c bi???t: 365 ng??y v???i ??i???u tr???, t??? vong & th????ng t???t/t??n t???t b??? ph???n ho???c to??n b??? v??nh vi???n.</li>
                                                    <li>B???nh c?? s???n: 365 ng??y v???i ??i???u tr???, t??? vong & th????ng t???t/t??n t???t to??n b??? v??nh vi???n</li>
                                                    <li>Thai s???n: 90 ng??y ?????i v???i  s???y thai n???o thai theo ch??? ?????nh b??c s???  v?? 365 ng??y ?????i v???i sinh con v?? t??? vong</li>
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
                                                    ?????ng chi tr???
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>Tr??? em d?????i 6 tu???i  :  ?????ng chi tr??? 20% d?????i 6 tu???i khi ??i???u tr??? t???i t???i t???i t???t c??? c??c c?? s??? y t???, ??p d???ng cho to??n b??? c??c quy???n l???i</li>
                                                    <li>Thai s???n: ?????ng chi tr??? 20% t???i b???nh vi???n t?? nh??n, qu???c t???, b???nh vi???n c??ng (khoa qu???c t???/d???ch v???/t??? nguy???n)</li>
                                                    <li>Nha Khoa: ?????ng chi tr??? 20% t???i b???nh vi???n t?? nh??n, qu???c t???. B???nh vi???n c??ng (khoa qu???c t???/d???ch v???/t??? nguy???n)</li>
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
                                                    B???o l??nh vi???n ph??
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="list-content">
                                                    <li>N???i tr?? cho B1 ?????n B2. N???i tr??, ngo???i tr??, thai s???n, nha khoa cho B3 ?????n B10. Kh??ng b???o l??nh cho tai n???n</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                            </Tab>
                            <Tab eventKey="exclusion-terms" title="??i???u kho???n lo???i tr???">
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
                                                    C??c chi ph?? ??i???u tr??? b???t h???p l??. ??i???u tr??? ho???c s??? d???ng thu???c kh??ng theo h?????ng d???n c???a c?? s??? y t??? ho???c kh??ng theo ch??? ?????nh c???a b??c s??.
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
                                                    H??nh ?????ng c??? ?? g??y thi???t h???i c???a ng?????i ???????c b???o hi???m ho???c ng?????i th???a k??? h???p ph??p.
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
                                                    Ng?????i ???????c b???o hi???m vi ph???m nghi??m tr???ng ph??plu???t, n???i quy, quy ?????nh c???a ch??nh quy???n ?????a ph????ng ho???c c??c t??? ch???c x?? h???i.
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
                                                    D???ch v??? ??i???u tr??? tai n???n ho???c t???i vi???n ??i???u tr??? b???ng th???y l???c ho???c c??c ph????ng ph??p thi??n nhi??n
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
                                                    C??c ho???t ?????ng th??? thao nguy hi???m, ho???t ?????ng v?? trang.
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
                                                    Tham gia c??c ho???t ?????ng h??ng kh??ng.
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
                                                    Chi???n tranh, n???i chi???n, ????nh c??ng, kh???ng b???
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
                                                    H???u qu??? c???a vi???c s??? d???ng r?????u bia, c??c ch???t k??ch th??ch g??y tai n???n.
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
                                                    ??i???u khi???n giao th??ng trong t??nh tr???ng c?? n???ng ????? c???n qu?? quy ?????nh.
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
                                                    C??c ch???n th????ng do t??c nh??n h???t nh??n g??y ra ho???c do b??? nhi???m ch???t ph??ng x???.
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                            </Tab>
                            <Tab eventKey="compensation-process" title="Quy tr??nh b???i th?????ng">
                                <Container className="container-process">
                                    <h4>Bao g???m 2 quy tr??nh ch??nh:</h4>
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
                                                    <span>B???o l??nh vi???n ph??</span>
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
                                                    <span>Tr??? tr?????c thanh to??n sau</span>
                                                </Stack>
                                            </Col>
                                        </Stack>
                                    </div>
                                </Container>
                            </Tab>
                            <Tab eventKey="hospital-fee-guarantee" title="Danh s??ch b???o l??nh vi???n ph??">
                                Danh s??ch b???o l??nh vi???n ph??
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
                        <span>Quy t???c b???o hi???m</span>
                    </div>
                    {/* <Button className="btn-outline-blue">So s??nh</Button> */}
                    <Button className="btn-blue " onClick={props.onHidden}>Ti???p t???c mua</Button>
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
