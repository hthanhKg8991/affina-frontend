import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Form, FormControl, Image, InputGroup, Nav, Navbar, Row, Stack, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import accessStyle from '../../../Assets';
import { dynamicSort, formatPrepaidAmount, isEmptyArray, validate } from '../../../Common/Helper';
import Line from '../../../Common/Line';
import { getAllSuppliers, packagesGetAll, packagesGetDetail, packagesGetBySupplier } from '../../../Reducers/Insurance/PackagesRedux';
import CommonModal from '../../Common/CommonModal';
import MultiRangeSlider from '../../Common/MultiRangeSlider';
import CommonButtonInsurance from './CommonButtonInsurance';
import { handleCurrentStep, handleStep2 } from '../../../Reducers/Insurance/StepRedux';
import configDefault from '../../../Config/app';
const STEP = 500000;
const MIN = 0;
const MAX = 1500000;

const BuyInsurancePersonalStep2Component = (props) => {
    const dispatch = useDispatch();
    const { data = [], dataAdditional = [], supplier = [], dataBySupplier = [], isLoading, countDataSupplier } = useSelector((state) => state.insurancePackagesRedux) || [];
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1, step2 } = dataStep;
    console.log('dataDetail::', dataStep);
    const [isSwap, setIsSwap] = useState(false);

    // handle api
    const [values, setValues] = useState([50])
    const [additional, setAdditional] = useState(dataAdditional);
    const [isAdditional, setIsAdditional] = useState(false);
    const [packageRemain, SetPackageRemain] = useState([]);
    const [isPackageRemain, setIsPackageRemain] = useState(false);
    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isPackage, setIsPackage] = useState({});
    const [packageDetail, setPackageDetail] = useState({});
    const handleSwap = () => {
        setIsSwap(!isSwap)
    }
    const callAPI = () => {
        dispatch(getAllSuppliers());
        dispatch(packagesGetAll());
    }
    useEffect(() => {
        callAPI()
    }, [dispatch])
    const handleAdditional = (id) => {
        if (id === isAdditional) {
            setIsAdditional(false)
        } else {
            dispatch(packagesGetDetail(id))
            setIsAdditional(id)
        }
        setIsPackageRemain(false)
    }
    const handlePackageRemain = (code, supplier) => {
        if (code === isPackageRemain) {
            setIsPackageRemain(false);
        } else {
            dispatch(packagesGetBySupplier(supplier))
            setIsPackageRemain(code);
        }
        setIsAdditional(false);
    }
    const handleViewDetail = (item = {}) => {
        setIsShowDetail(!isShowDetail)
        setPackageDetail(item)
    }

    const rateStart = (rate) => {
        var rateTemplate = []
        for (var i = 0; i <= 4; i++) {
            if (i < rate) {
                rateTemplate.push(
                    <Nav.Item className="icons-star star-active">
                        <i className="mdi mdi-star"></i>
                    </Nav.Item>
                )
            } else {
                rateTemplate.push(
                    <Nav.Item className="icons-star star-inactive">
                        <i className="mdi mdi-star"></i>
                    </Nav.Item>
                )
            }
        }

        return rateTemplate
    }

    const handleSelectPackage = (item) => {
        console.log('item:::', item);
        dispatch(handleStep2({
            packageName: item.name,
            packageCode: item.package_code,
            price: item.price,
            fee: item.price_fee,
            supplier: item.supplier,
        }))
        setIsPackage(item)
    }

    const handleContinue = () => {
        dispatch(handleCurrentStep({
            currentStep: 3,
            holdStep: 3,
        }))
        props.handleButtonContinue && props.handleButtonContinue()
    }
    return (
        <Container>
            <Container className='insurance-content-step2'>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className='insurance-search-center'>
                            <Row>
                                <Col className='group-search'>
                                    <div className="input-group">
                                        <input className="form-control py-2" type="search" defaultValue="" id="example-search-input" placeholder='Nhập từ khoá cần tìm' />
                                        <span className="input-group-append">
                                            <button className="btn btn-search" type="button">
                                                <Image
                                                    src={require("../../../Assets/Images/public/icons/search.webp")}
                                                    srcSet={`
                                                    ${require('../../../Assets/Images/public/icons/search@2x.webp')} 2x, 
                                                    ${require('../../../Assets/Images/public/icons/search@3x.webp')} 3x
                                                `}
                                                    alt="Logo Affina"
                                                    width={21}
                                                    height={21}
                                                />
                                            </button>
                                        </span>
                                        <button className="btn swap-vertical" type="button" onClick={handleSwap}>
                                            <Image
                                                src={require("../../../Assets/Images/public/icons/swap-vertical.webp")}
                                                srcSet={`
                                                    ${require('../../../Assets/Images/public/icons/swap-vertical@2x.webp')} 2x, 
                                                    ${require('../../../Assets/Images/public/icons/swap-vertical@3x.webp')} 3x
                                                `}
                                                alt="icon swap"
                                                width={34}
                                                height={39}
                                            />
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className='insurance-sidebar'>
                            <Form.Label className='justify-content-start'>Chọn giá</Form.Label>
                            <MultiRangeSlider
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                            />
                        </div>
                        <div className='insurance-sidebar'>
                            <Form.Label className='justify-content-start'>Sắp xếp theo</Form.Label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="selling" />
                                <label className="form-check-label" htmlFor="selling">
                                    Bán chạy
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="popular" />
                                <label className="form-check-label" htmlFor="popular">
                                    Phổ biến
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="onSale" />
                                <label className="form-check-label" htmlFor="onSale">
                                    Đang giảm giá
                                </label>
                            </div>
                        </div>
                        <div className='insurance-sidebar'>
                            <Form.Label className='justify-content-start'>Nhà Bảo Hiểm</Form.Label>
                            {

                                (!isEmptyArray(supplier)) &&
                                supplier.map((item, index) => {
                                    return (
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id={item.code} />
                                            <label className="form-check-label" htmlFor={item.code}>
                                                {item.name}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>

                    <Col md={6} className='insurance-center'>
                        {
                            (!isEmptyArray(data)) &&
                            [].concat(data)
                                .sort(dynamicSort('name', isSwap))
                                .map((item, index) => {
                                    return (
                                        <Row className={(item.package_code === isPackage.package_code) ? 'group-item group-item-active' : 'group-item'} key={item._id}>
                                            {/* <Stack direction='horizontal' className='align-items-start'> */}
                                            <Col md={3} className='reset-padding-right '>
                                                <div className="box-left text-center">
                                                    <div className='wrap-image'>
                                                        <Image
                                                            src={item.supplier && configDefault.URL_IMG + item.supplier.image}
                                                            srcSet={`
                                                                ${item.supplier && configDefault.URL_IMG + item.supplier.image} 2x, 
                                                                ${item.supplier && configDefault.URL_IMG + item.supplier.image} 3x
                                                            `}
                                                            className="cursor-pointer"
                                                            onClick={() => handleSelectPackage(item)}
                                                            alt="logo gic"
                                                            width={'100%'}
                                                            height={'auto'}
                                                        />
                                                    </div>
                                                    <strong className='insure-package-name' onClick={() => handleSelectPackage(item)}>{item.supplier && item.supplier.name}</strong>
                                                    <Nav className='justify-content-center wrap-star'>
                                                        {rateStart(item.rate)}
                                                        {/* <Nav.Item className='icons-star star-active'>
                                                            <i className="mdi mdi-star"></i>
                                                        </Nav.Item>
                                                        <Nav.Item className='icons-star star-active'>
                                                            <i className="mdi mdi-star"></i>
                                                        </Nav.Item>
                                                        <Nav.Item className='icons-star star-active'>
                                                            <i className="mdi mdi-star"></i>
                                                        </Nav.Item>
                                                        <Nav.Item className='icons-star star-active'>
                                                            <i className="mdi mdi-star"></i>
                                                        </Nav.Item>
                                                        <Nav.Item className='icons-star star-inactive'>
                                                            <i className="mdi mdi-star"></i>
                                                        </Nav.Item> */}
                                                    </Nav>
                                                </div>
                                            </Col>
                                            <Col md={9} className="box-right">
                                                <Stack direction="horizontal" className="align-items-start">
                                                    <Stack className='align-items-start'>
                                                        <Stack direction="horizontal" gap={3} className="align-items-start">
                                                            <h6 className='insure-package' onClick={() => handleSelectPackage(item)}>{item.name}</h6>
                                                            <span className='discount-price'>-{item.discount}%</span>
                                                        </Stack>
                                                        <i className="package-detail" onClick={() => handleViewDetail(item)}>Chi tiết gói &raquo;</i>
                                                    </Stack>
                                                    <div className="text-right ms-auto">
                                                        <p className='package-price'>{formatPrepaidAmount(item.price)}VNĐ</p>
                                                        <p className='package-fee'>Phí: {formatPrepaidAmount(item.price_fee)}VNĐ/năm</p>
                                                    </div>
                                                </Stack>
                                                <Line type="dashed" color='e6e6e6' />
                                                <div className='procedure-text text-left'>
                                                    <i>{item.description}</i>
                                                </div>
                                                <Line type="dashed" />
                                                <Stack direction="horizontal" gap={3} className="align-items-start">
                                                    {
                                                        (!isEmptyArray(additional)) &&
                                                        <p className='additional-benefits' onClick={() => handleAdditional(item._id)}>
                                                            Quyền lợi bổ sung
                                                            {
                                                                (isAdditional === item._id) ?
                                                                    <i className='mdi mdi-chevron-up'></i>
                                                                    :
                                                                    <i className='mdi mdi-chevron-down'></i>
                                                            }
                                                        </p>
                                                    }
                                                    <div className="text-right ms-auto">
                                                        {
                                                            (!isEmptyArray(packageRemain)) &&
                                                            <p className='preview-package' onClick={(code, supplier) => handlePackageRemain(item.package_code, item.supplier)}>
                                                                Xem 7 gói bảo hiểm còn lại
                                                                {
                                                                    (isPackageRemain === item.package_code) ?
                                                                        <i className='mdi mdi-chevron-up'></i>
                                                                        :
                                                                        <i className='mdi mdi-chevron-down'></i>
                                                                }
                                                            </p>
                                                        }
                                                    </div>
                                                </Stack>
                                            </Col>
                                            {
                                                (isAdditional === item._id) && (
                                                    additional.map((item, index) =>
                                                        <div className='sub-item' key={index}>
                                                            <div className='package-additional-preview '>
                                                                <Stack direction='horizontal'>
                                                                    <div className='wrap-check position-relative'>
                                                                        <input type="radio" name="radio" id={index} checked={true} onChange={() => { }} />
                                                                        <span className='check-mark'></span>
                                                                    </div>
                                                                    <Stack className='align-items-start'>
                                                                        <Stack direction="horizontal" gap={3} className="align-items-start">
                                                                            <label htmlFor={index} className='insure-package'>Gói bảo hiểm B1</label>
                                                                            <span className='selling'>Bán chạy</span>
                                                                        </Stack>
                                                                        <i className="package-detail">Chi tiết gói &raquo;</i>
                                                                    </Stack>
                                                                    <div className="text-right ms-auto">
                                                                        <p className='package-price'>{formatPrepaidAmount(item.price)}VNĐ</p>
                                                                        <p className='package-fee'>Phí: {formatPrepaidAmount(item.price_fee)}VNĐ/năm</p>
                                                                    </div>
                                                                </Stack>
                                                                <Line type="dashed" color='e6e6e6' />
                                                                <div className='procedure-text text-left'>
                                                                    <i>Bao gồm 1 quyền lợi bổ sung</i>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <Line type="solid" color='e6e6e6' />
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }
                                            {
                                                (isPackageRemain === item.package_code) &&
                                                packageRemain.map((item, index) =>
                                                    <div className='sub-item' key={item._id}>
                                                        <div className='package-additional-preview '>
                                                            <Stack direction='horizontal'>
                                                                <Stack className='justify-content-center'>
                                                                    <Stack direction="horizontal" gap={3}>
                                                                        <input className="form-check-input" type="checkbox" defaultValue="" id={'packageRemain' + index} />
                                                                        <label htmlFor={index} className='insure-package'>{item.name}</label>
                                                                    </Stack>
                                                                </Stack>
                                                                <div className="text-right ms-auto">
                                                                    <p className='package-price'>45.000.000VNĐ</p>
                                                                    <p className='package-fee'>Phí: 405.000VNĐ/năm</p>
                                                                </div>
                                                            </Stack>
                                                        </div>
                                                        <div className='row'>
                                                            <Line type="solid" color='e6e6e6' />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </Row>
                                    )
                                })
                        }
                    </Col>

                    <Col md={3}>
                        <div className='insurance-sidebar bg-white sidebar-right-content'>
                            <Form.Label className='justify-content-start'>Tóm tắt đơn bảo hiểm</Form.Label>
                            <label className='unit'> *Đơn vị: VNĐ</label>
                            <Line type='dotted' />
                            <div className='brief-info'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Đối tượng bảo hiểm:</Nav.Item>
                                    <Nav.Item>Cá nhân</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Ngày sinh:</Nav.Item>
                                    <Nav.Item>{moment(step1.birthday).format('DD/MM/YYYY')}</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Nhà bảo hiểm:</Nav.Item>
                                    <Nav.Item>{step2.supplier && step2.supplier.name}</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Tên gói: </Nav.Item>
                                    <Nav.Item>{step2.packageName}</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Tổng số tiền được bảo hiểm:</Nav.Item>
                                    <Nav.Item>{formatPrepaidAmount(step2.price)}</Nav.Item>
                                </Nav>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Thời hạn bảo hiểm:</Nav.Item>
                                    <Nav.Item></Nav.Item>
                                </Nav>
                            </div>
                            <Line type='dotted' />
                            <div className='main-package-fee'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item><strong>Phí gói chính:</strong></Nav.Item>
                                    <Nav.Item>{formatPrepaidAmount(step2.fee)}</Nav.Item>
                                </Nav>
                            </div>
                            <Line type='dotted' />
                            <div className='package-additional'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item><strong>Gói bổ sung:</strong></Nav.Item>
                                    <Nav.Item></Nav.Item>
                                </Nav>
                            </div>
                            <Line type='dotted' />
                            <div className='into-money'>
                                <Nav className='justify-content-between'>
                                    <Nav.Item>Thành tiền:</Nav.Item>
                                    <Nav.Item>{formatPrepaidAmount(step2.fee)}</Nav.Item>
                                </Nav>
                            </div>
                            <div className='promotion'>
                                <input defaultValue="" placeholder='Nhập mã khuyến mãi' />
                            </div>
                            <Line type='dotted' />
                            <div className='total-money'>
                                <Stack direction='horizontal'>
                                    <label>TỔNG TIỀN: </label>
                                    <label className='ms-auto'>{formatPrepaidAmount(step2.fee)}</label>
                                </Stack>
                            </div>
                        </div>
                        <div className='insurance-sidebar bg-white sidebar-right-content'>
                            <Form.Label className='justify-content-start'>Những quyền lợi chính</Form.Label>
                            <ul className='list-benefit-main position-relative'>
                                <li>
                                    <div className='topic-benefit'>
                                        <span>Tử vong, thương tật toàn bộ vĩnh viễn do tại nạn</span>
                                    </div>
                                    <b>Số tiền được bảo hiểm: 20 triệu</b>
                                </li>
                                <li>
                                    <div className='topic-benefit'>
                                        <span>Chi phí y tế do tai nạn</span>
                                    </div>
                                    <b>Số tiền được bảo hiểm: 5 triệu</b>
                                </li>
                                <li>
                                    <div className='topic-benefit'>
                                        <span>Tử vong, thương tật toàn bộ vĩnh viễn do bệnh</span>
                                    </div>
                                    <b>Số tiền được bảo hiểm: 10 triệu</b>
                                </li>
                                <li>
                                    <div className='topic-benefit'>
                                        <span>Điều trị nội trú, phẫu thuật do bệnh</span>
                                    </div>
                                    <b>Số tiền được bảo hiểm: 10 triệu</b>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container >
            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                validate={validate([isPackage.package_code])}
                handleButtonGoBack={props.handleButtonGoBack}
                handleButtonContinue={handleContinue}
            />
            <CommonModal
                isShow={isShowDetail}
                onHidden={handleViewDetail}
                data={packageDetail}
            >

            </CommonModal>
        </Container >
    )
}

export default BuyInsurancePersonalStep2Component
