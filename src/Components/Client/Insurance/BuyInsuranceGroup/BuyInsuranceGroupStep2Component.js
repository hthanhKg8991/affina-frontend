import htmlParserCode from 'html-react-parser';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Accordion, Col, Container, Form, Image, Nav, PageItem, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import accessStyle from '../../../../Assets';
import { dynamicSort, formatPrepaidAmount, isEmptyArray, matchRound, numFormatter, validate, isStringNullOrEmpty, checkAge, checkAgeOver51YearsOld, checkAge30daysTo6YearsOld, genderByText, viewTextAge } from '../../../../Common/Helper';
import Line from '../../../../Common/Line';
import configDefault from '../../../../Config/app';
import { pushAdditionalItem, pushItem, resetAdditional, handleSelectPerson, handleClickAccordion, handleAllAccordion } from '../../../../Reducers/Insurance/GroupStepRedux';
import { getAllSuppliers, packagesGetAll, packagesGetBySupplier, postPackageBySupplier } from '../../../../Reducers/Insurance/PackagesRedux';
import { handleSelectAdditional, handleStep2, resetAdditionalState } from '../../../../Reducers/Insurance/StepRedux';
import CommonModal from '../../../Common/CommonModal';
import MultiRangeSlider from '../../../Common/MultiRangeSlider';
import BriefGroupComponent from '../BriefGroupComponent';
import CommonButtonInsurance from '../CommonButtonInsurance';

const STEP = 500000;
const MIN = 0;
const MAX = 75000000;

var amountSecondary = 0;
const BuyInsuranceGroupStep2Component = (props) => {
    const dispatch = useDispatch();
    const { data = [], dataAdditional = [], supplier = [], dataBySupplier = [], isLoading, countDataSupplier } = useSelector((state) => state.insurancePackagesRedux) || [];
    const { dataStep } = useSelector((state) => state.insuranceGroup) || [];
    const { groupStep1 } = dataStep;
    const { listPerson = [] } = groupStep1;
    console.log('dataAdditional::', listPerson);
    console.log("personrender", listPerson);
    const [isSwap, setIsSwap] = useState(false);
    // handle api
    // const [amountSecondary, setAmountSecondary] = useState(0)
    const [isAdditional, setIsAdditional] = useState(false);
    const [isSelectAdditional, setIsSelectAdditional] = useState('');
    const [selectAdditional, setSelectAdditional] = useState();
    const [packageRemain, SetPackageRemain] = useState([]);
    const [isPackageRemain, setIsPackageRemain] = useState(false);
    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isPackage, setIsPackage] = useState({});
    const [packageDetail, setPackageDetail] = useState({});
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [selectSupplier, setSelectSupplier] = useState([]);
    const [selectSort, setSelectSort] = useState([]);
    const [isFilterMobile, setFilterMobile] = useState(false);
    const [isBenefitMainMobile, setIsBenefitMainMobile] = useState(false);
    const [isRemainingPack, setIsRemainingPack] = useState(false);
    const handleSwap = () => {
        setIsSwap(!isSwap)
    }
    const handleSearch = (keywords) => {

        console.log('keywords:::', keywords);
        if (keywords === '') {
            return data;
        }
        const regex = new RegExp(`${keywords.trim()}`, 'i');
        // const data =  arrayData.filter(item => vnConvert(item.name).search(regex) >= 0);
        return data.filter(item => (item.name.search(regex) >= 0));

    }

    const handleFilter = () => {
        let params = {
            // age: moment().format('YYYY') - moment(step1.birthday).format('YYYY'),
            // age: moment(step1.birthday).format('YYYY/MM/DD'),
            // gender: step1.gender,
            fee_min: min,
            fee_max: max,
            supplier: selectSupplier,
            sort: selectSort,
        }
        console.log('params>>>', params);
        dispatch(postPackageBySupplier(params))
    }
    useEffect(() => {
        handleFilter();
    }, [min, max, selectSupplier, selectSort])
    const callAPI = () => {
        // dispatch(packagesGetAll());
        dispatch(getAllSuppliers());
    }
    useEffect(async () => {
        await callAPI()
    }, [dispatch])

    const handleAdditional = (id) => {
        if (id === isAdditional) {
            setIsAdditional(false)
        } else {
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

    const handleSelectPackage = (buyer, item) => {
        console.log('item:::', buyer, item);
        handleAdditional(item._id);
        dispatch(
            pushItem(
                {
                    id: buyer.id,
                    package: item
                }
            )
        )
        if (buyer.package.package_code !== item.package_code) {
            dispatch(resetAdditional({buyerId : buyer.id}));
        }
    }

    const onSelectAdditional = (buyer, item, packageSelect) => {
        // if (step2.packageCode === packageSelect) {
        dispatch(pushAdditionalItem({
            buyerId: buyer.id,
            packageCode: packageSelect,
            item: item
        }))
        setIsSelectAdditional(item)
        // }
    }

    const handleSetMinMax = (min, max) => {
        setMin(min)
        setMax(max)
    }
    const handleSetSupplier = (value) => {
        const removeId = selectSupplier.findIndex(item => item === value);
        if (removeId >= 0) {
            selectSupplier.splice(removeId, 1);
            console.log('removeId>>', selectSupplier);
            setSelectSupplier(selectSupplier)
        } else {
            setSelectSupplier([...selectSupplier, value])
        }
    }

    const handleCheckSort = (id) => {
        setSelectSort([id])
    }

    const handleCheckAdditional = (id, buyerId) => {
        let person = listPerson.find((person) => person.id === buyerId)
        let selectAdditionPerson = person.selectAddition
        if (!isEmptyArray(selectAdditionPerson)) {
          return selectAdditionPerson.some((el) => el._id === id);
        } else {
          return false;
        }
    }
    const handleGoBack = () => {
        console.log("personrender");
        dispatch(handleAllAccordion());
        props.handleButtonGoBack && props.handleButtonGoBack()
    }

    const handleContinue = () => {
        props.handleButtonContinue && props.handleButtonContinue()
    }
    let dataSearch = handleSearch('');

    const handleViewFilterMobile = () => {
        setFilterMobile(!isFilterMobile)
    }

    const handleViewBenefitMainMobile = () => {
        setIsBenefitMainMobile(!isBenefitMainMobile)
    }
    
    const checkPerson = (buyerSelect) => {
        dispatch(handleSelectPerson(buyerSelect));
    }

    const handleAccordion = (buyerSelect) => {
        dispatch(handleClickAccordion(buyerSelect));
    }
    const handleValidateButton = () => {
        let personNotPackage = listPerson.find((person) => 
            person.package === undefined
        )
        if (personNotPackage) {return false} else {return true}
    }
    const handleSetRemainingPack = () => {
        setIsRemainingPack(!isRemainingPack);
    }
    const handleResetRemainingPack = () => {
        setIsRemainingPack(false);
    }
    const _renderTextViewAdditional = (buyer, item) => {
        let _isTitleAdditional;
        _isTitleAdditional = (!isEmptyArray(item.additional)) &&
            <p className='additional-benefits'
                onClick={() => {
                handleAdditional(item._id);
                handleSelectPackage(buyer, item);
                checkPerson(buyer);
                }}
            >
                Quyền lợi bổ sung
                {
                    (isAdditional === item._id) ?
                        <i className='mdi mdi-chevron-up'></i>
                        :
                        <i className='mdi mdi-chevron-down'></i>
                }
            </p>
        return _isTitleAdditional;
    }

    const _renderAdditional = (buyer, item) => {
        let _templateAdditional;
        _templateAdditional = (buyer.selectPerson) && (isAdditional === item._id) && (
            (!isEmptyArray(item.additional)) &&
            item.additional.map((additionalItem, index) => {
                return (
                    <div className='sub-item' key={additionalItem._id}>
                        <div className='package-additional-preview '>
                            {
                                (additionalItem.fee !== 0) ?

                                    <Stack direction='horizontal'>
                                        <Stack className='justify-content-center'>
                                            <Stack direction="horizontal" gap={3} className="align-items-start">
                                                <input className="form-check-input" type="checkbox" id={additionalItem._id}
                                                    checked={handleCheckAdditional(additionalItem._id, buyer.id)}
                                                    // checked={additionalItem.isChecked}
                                                    onChange={() => onSelectAdditional(buyer, additionalItem, item.package_code)} />
                                                <label htmlFor={additionalItem._id} className='insure-package' >{additionalItem.name}</label>
                                            </Stack>
                                        </Stack>
                                        <div className="text-right ms-auto">
                                            {
                                                (additionalItem.fee !== 0) ?
                                                    <>
                                                        <p className='package-price'>{formatPrepaidAmount(matchRound(additionalItem.amount))}VNĐ</p>
                                                        <p className='package-fee'>Phí: {formatPrepaidAmount(matchRound(additionalItem.fee))}/năm</p>
                                                    </>
                                                    :
                                                    <>
                                                        {/* <p className='package-price'>{formatPrepaidAmount(matchRound(additionalItem.amount))}VNĐ</p> */}
                                                        {/* <p className='package-fee'>Phí: {formatPrepaidAmount(matchRound(calculatorFee(additionalItem.amount, additionalItem.rate)))}/năm</p> */}
                                                        {/* <p className='package-fee'>Phí: {formatPrepaidAmount(matchRound(additionalItem.fee))}/năm</p> */}
                                                    </>
                                            }
                                        </div>
                                    </Stack>
                                    :
                                    <></>
                            }
                        </div>
                        <div className='row'>
                            <Line type="solid" color='e6e6e6' />
                        </div>
                    </div>
                )
            })
        )
        return _templateAdditional;
    }

    const _renderListPackage = (buyer = {}) => {
        console.log('buyer>>>', buyer);
        let buyerPackage = buyer.package && buyer.package.package_code;
        let _templateListPackage;
        _templateListPackage = [].concat(data)
            .sort(dynamicSort('price_fee', isSwap))
            .map((item, index) => {
                return (
                    <Row className={(item.package_code === buyerPackage) ? 'group-item group-item-active cursor-pointer' : 'group-item cursor-pointer'} key={item._id + '' + item.name}>
                        <Col md={3} xs={3} sm={3} className='reset-padding-right '
                            onClick={() => {
                                handleSelectPackage(buyer, item);
                                handleAdditional(item._id);
                                checkPerson(buyer);
                            }}
                        >
                            <div className="box-left text-center">
                                <div className='wrap-image'>
                                    <Image
                                        src={item.supplier && configDefault.URL_IMG + item.supplier.image}
                                        srcSet={`
                                            ${item.supplier && configDefault.URL_IMG + item.supplier.image} 2x, 
                                            ${item.supplier && configDefault.URL_IMG + item.supplier.image} 3x
                                        `}
                                        className="cursor-pointer"
                                        alt="logo gic"
                                        width={'100%'}
                                        height={'auto'}
                                    />
                                </div>
                                <strong className='insure-package-name'
                                >{item.supplier && item.supplier.name}</strong>
                                <Nav className='justify-content-center wrap-star'>
                                    {rateStart(item.rate)}
                                </Nav>
                            </div>
                        </Col>
                        <Col md={9} xs={9} sm={9} className="box-right">
                            <Stack direction="horizontal" className="align-items-start"
                                onClick={() => {
                                    handleSelectPackage(buyer, item);
                                    handleAdditional(item._id);
                                    checkPerson(buyer);
                                }}
                            >
                                <Stack className='align-items-start'>
                                    <Stack direction="horizontal" gap={3} className="align-items-start">
                                        <h6 className='insure-package'>{item.name}</h6>
                                        {
                                            (item.discount > 0 && !isStringNullOrEmpty(item.discount)) ?
                                                <span className='discount-price'>-{item.discount}%</span>
                                                : ''
                                        }
                                    </Stack>
                                    <i className="package-detail" onClick={() => handleViewDetail(item)}>Chi tiết gói &raquo;</i>
                                </Stack>
                                <div className="text-right ms-auto">
                                    <p className='package-price'>{formatPrepaidAmount(item.price)}VNĐ</p>
                                    <p className='package-fee'>Phí: {formatPrepaidAmount(item.price_fee)}VNĐ/năm</p>
                                </div>
                            </Stack>
                            <Line type="dashed" color='e6e6e6' />
                            <Stack direction='horizontal'>
                                <div className='procedure-text text-left'
                                    onClick={() => {
                                        handleAdditional(item._id);
                                        handleSelectPackage(buyer, item);
                                        checkPerson(buyer);
                                    }}
                                >
                                    <i>{item.description}</i>
                                </div>
                            </Stack>
                            <Line type="dashed" />
                            <Stack direction="horizontal" gap={3} className="align-items-start">
                                {_renderTextViewAdditional(buyer, item)}
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
                        {_renderPackageRemain(item)}
                        {_renderAdditional(buyer, item)}
                    </Row>
                )
            })
        return _templateListPackage;

    }

     const _renderListRemainPackage = (buyer = {}) => {
        console.log('buyer>>>', buyer);
        let buyerPackage = buyer.package && buyer.package.package_code;
        let _templateListRemainPackage;
        _templateListRemainPackage = [].concat(data)
            .sort(dynamicSort('price_fee', isSwap))
            .map((item, index) => {
                return (
                    <Row className={(item.package_code === buyerPackage) ? 'group-item group-item-active cursor-pointer' : 'group-item cursor-pointer'} key={item._id + '' + item.name}>
                        <Col md={3} xs={3} sm={3} className='reset-padding-right '
                            onClick={() => {
                                handleSelectPackage(buyer, item);
                                handleAdditional(item._id);
                                checkPerson(buyer);
                            }}
                        >
                            <div className="box-left text-center">
                                <div className='wrap-image'>
                                    <Image
                                        src={item.supplier && configDefault.URL_IMG + item.supplier.image}
                                        srcSet={`
                                            ${item.supplier && configDefault.URL_IMG + item.supplier.image} 2x, 
                                            ${item.supplier && configDefault.URL_IMG + item.supplier.image} 3x
                                        `}
                                        className="cursor-pointer"
                                        alt="logo gic"
                                        width={'100%'}
                                        height={'auto'}
                                    />
                                </div>
                                <strong className='insure-package-name'
                                >{item.supplier && item.supplier.name}</strong>
                                <Nav className='justify-content-center wrap-star'>
                                    {rateStart(item.rate)}
                                </Nav>
                            </div>
                        </Col>
                        <Col md={9} xs={9} sm={9} className="box-right">
                            <Stack direction="horizontal" className="align-items-start"
                                onClick={() => {
                                    handleSelectPackage(buyer, item);
                                    handleAdditional(item._id);
                                    checkPerson(buyer);
                                }}
                            >
                                <Stack className='align-items-start'>
                                    <Stack direction="horizontal" gap={3} className="align-items-start">
                                        <h6 className='insure-package'>{item.name}</h6>
                                        {
                                            (item.discount > 0 && !isStringNullOrEmpty(item.discount)) ?
                                                <span className='discount-price'>-{item.discount}%</span>
                                                : ''
                                        }
                                    </Stack>
                                    <i className="package-detail" onClick={() => handleViewDetail(item)}>Chi tiết gói &raquo;</i>
                                </Stack>
                                <div className="text-right ms-auto">
                                    <p className='package-price'>{formatPrepaidAmount(item.price)}VNĐ</p>
                                    <p className='package-fee'>Phí: {formatPrepaidAmount(item.price_fee)}VNĐ/năm</p>
                                </div>
                            </Stack>
                            <Line type="dashed" color='e6e6e6' />
                            <Stack direction='horizontal'>
                                <div className='procedure-text text-left'
                                    onClick={() => {
                                        handleAdditional(item._id);
                                        handleSelectPackage(buyer, item);
                                        checkPerson(buyer);
                                    }}
                                >
                                    <i>{item.description}</i>
                                </div>
                            </Stack>
                            <Line type="dashed" />
                            <Stack direction="horizontal" gap={3} className="align-items-start">
                                {_renderTextViewAdditional(buyer, item)}
                            </Stack>
                        </Col>
                        {_renderPackageRemain(item)}
                        {_renderAdditional(buyer, item)}
                    </Row>
                )
            })
        return _templateListRemainPackage;

    }

    const _renderChoosePackage = (buyer, item) => {
        return (
            <Row className='group-item group-item-active cursor-pointer' key={item._id + '' + item.name}>
                        <Col md={3} xs={3} sm={3} className='reset-padding-right '
                            onClick={() => {
                                handleAdditional(item._id);
                                handleSelectPackage(buyer, item);
                                checkPerson(buyer);
                            }}
                        >
                            <div className="box-left text-center">
                                <div className='wrap-image'>
                                    <Image
                                        src={item.supplier && configDefault.URL_IMG + item.supplier.image}
                                        srcSet={`
                                            ${item.supplier && configDefault.URL_IMG + item.supplier.image} 2x, 
                                            ${item.supplier && configDefault.URL_IMG + item.supplier.image} 3x
                                        `}
                                        className="cursor-pointer"
                                        alt="logo gic"
                                        width={'100%'}
                                        height={'auto'}
                                    />
                                </div>
                                <strong className='insure-package-name'
                                >{item.supplier && item.supplier.name}</strong>
                                <Nav className='justify-content-center wrap-star'>
                                    {rateStart(item.rate)}
                                </Nav>
                            </div>
                        </Col>
                        <Col md={9} xs={9} sm={9} className="box-right">
                            <Stack direction="horizontal" className="align-items-start"
                                onClick={() => {
                                    handleAdditional(item._id);
                                    handleSelectPackage(buyer, item);
                                    checkPerson(buyer);
                                }}
                            >
                                <Stack className='align-items-start'>
                                    <Stack direction="horizontal" gap={3} className="align-items-start">
                                        <h6 className='insure-package'>{item.name}</h6>
                                        {
                                            (item.discount > 0 && !isStringNullOrEmpty(item.discount)) ?
                                                <span className='discount-price'>-{item.discount}%</span>
                                                : ''
                                        }
                                    </Stack>
                                    <i className="package-detail" onClick={() => handleViewDetail(item)}>Chi tiết gói &raquo;</i>
                                </Stack>
                                <div className="text-right ms-auto">
                                    <p className='package-price'>{formatPrepaidAmount(item.price)}VNĐ</p>
                                    <p className='package-fee'>Phí: {formatPrepaidAmount(item.price_fee)}VNĐ/năm</p>
                                </div>
                            </Stack>
                            <Line type="dashed" color='e6e6e6' />
                            <Stack direction='horizontal'>
                                <div className='procedure-text text-left'
                                    onClick={() => {
                                        handleAdditional(item._id);
                                        handleSelectPackage(buyer, item);
                                        checkPerson(buyer);
                                    }}
                                >
                                    <i>{item.description}</i>
                                </div>
                            </Stack>
                            <Line type="dashed" />
                            <Stack direction="horizontal" gap={3} className="align-items-start">
                                {_renderTextViewAdditional(buyer, item)}
                                <div className="text-right ms-auto">
                                    {
                                        // (!isEmptyArray(packageRemain)) &&
                                        <p className='preview-package'
                                            // onClick={(code, supplier) => handlePackageRemain(item.package_code, item.supplier)}
                                    onClick={() => {
                                        handleSetRemainingPack();
                                        checkPerson(buyer);
                                    }}
                                         >
                                            Xem {data.length - 1} gói bảo hiểm còn lại
                                            {
                                                isRemainingPack ? <i className='mdi mdi-chevron-up'></i> : <i className='mdi mdi-chevron-down'></i>
                                            }
                                        </p>
                                    }
                                </div>
                            </Stack>
                        </Col>
                        {_renderPackageRemain(item)}
                        {_renderAdditional(buyer, item)}
                    </Row>
        )
    }

    const _renderListPerson = () => {
        return listPerson.map((item, index) => {
            
            return (
                <Accordion  flush defaultActiveKey="0" className='group-insurance active' style={{marginBottom: "20px", borderRadius: "20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header onClick={() => { handleAccordion(item); checkPerson(item); handleResetRemainingPack();}} style={{borderBottom: checkAge30daysTo6YearsOld(item.birthday) || checkAgeOver51YearsOld(item.birthday) ? "1px dashed rgba(146, 67, 153, 0.25)" : ""}}>
                            <div className='text-header'>
                                <label className='text-uppercase'>{item.name} - <span>({genderByText(item.gender)})</span></label> <br />
                                <small className=''>Độ tuổi: {viewTextAge(item.birthday)}</small> <br />
                            </div>

                        </Accordion.Header>
                            <div style={{textAlign: "start", padding: checkAge30daysTo6YearsOld(item.birthday) || checkAgeOver51YearsOld(item.birthday) ? "16px" : ""}}>
                                 {checkAge30daysTo6YearsOld(item.birthday) ? (
                                    <small style={{ fontSize: "14px", fontStyle: "italic", color: "#924399" }} className=''>Trẻ em dưới 6 tuổi phí bảo hiểm sẽ tăng 30% so với phí bảo hiểm gốc</small>
                                ) :
                                    ""}
                                {checkAgeOver51YearsOld(item.birthday) ? (
                                    <small style={{ fontSize: "14px", fontStyle: "italic", color: "#924399" }} className=''>51 tuổi - 65 tuổi phí bảo hiểm sẽ tăng 30% so với phí bảo hiểm gốc</small>
                                ) :
                                    ""}
                        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                            {!item.Accordion && item.package ? _renderChoosePackage(item, item.package) : ""}
                        </div>
                        <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                            {item.selectPerson && isRemainingPack ? _renderListRemainPackage(item) : ""}
                        </div>
                        </div>
                            
                        <Accordion.Body>
                            {_renderListPackage(item)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        })

    }

    const _renderPackageRemain = (item) => {
        let _templatePackage;
        _templatePackage = (isPackageRemain === item.package_code) && (
            packageRemain.map((packageRemainItem, indexPackageMain) =>
                <div className='sub-item' key={packageRemainItem._id}>
                    <div className='package-additional-preview '>
                        <Stack direction='horizontal'>
                            <div className='wrap-check position-relative'>
                                <input type="radio" name="radio" id={indexPackageMain} checked={true} />
                                <span className='check-mark'></span>
                            </div>
                            <Stack className='align-items-start'>
                                <Stack direction="horizontal" gap={3} className="align-items-start">
                                    <label htmlFor={indexPackageMain} className='insure-package'>{packageRemainItem.name}</label>
                                    <span className='selling'>Bán chạy</span>
                                </Stack>
                                {/* <i className="package-detail">Chi tiết gói &raquo;</i> */}
                            </Stack>
                            <div className="text-right ms-auto">
                                <p className='package-price'>{formatPrepaidAmount(packageRemainItem.price)}VNĐ</p>
                                <p className='package-fee'>Phí: {formatPrepaidAmount(packageRemainItem.price_fee)}VNĐ/năm</p>
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
        return _templatePackage;
    }
    return (
        <Container className='insurance-groups-step2'>
            <Container className='insurance-content-step2'>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className='insurance-search-center'>
                            <Row>
                                <Col className='group-search'>
                                    <div className="input-group">
                                        <input className="form-control py-2" type="search" id="example-search-input"
                                            placeholder='Nhập từ khoá cần tìm' onChange={(e) => handleSearch(e.target.value)} />
                                        <span className="input-group-append">
                                            <button className="btn btn-search" type="button">
                                                <Image
                                                    src={accessStyle.images.icons.search}
                                                    srcSet={`
                                                    ${accessStyle.images.icons.search2x} 2x, 
                                                    ${accessStyle.images.icons.search3x} 3x
                                                `}
                                                    alt="Logo Affina"
                                                    width={21}
                                                    height={21}
                                                />
                                            </button>
                                        </span>
                                        <button className="btn swap-vertical" type="button" onClick={handleSwap}>
                                            <Image
                                                src={accessStyle.images.icons.swapVertical}
                                                srcSet={`
                                                    ${accessStyle.images.icons.swapVertical2x} 2x, 
                                                    ${accessStyle.images.icons.swapVertical3x} 3x
                                                `}
                                                alt="icon swap"
                                                width={34}
                                                height={39}
                                            />
                                        </button>
                                        <button className="btn filter-vertical xs-visibility" type="button" onClick={handleViewFilterMobile}>
                                            <i className='mdi mdi-filter-outline toggle-filter'></i>
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <div className='xs-visibility mobile-topic' onClick={handleViewBenefitMainMobile}>Những quyền lợi chính</div>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className={isFilterMobile ? 'wrap-sidebar open' : 'wrap-sidebar'}>
                            <div className='wrap-mobile-filter background-gradient-to-bottom position-relative xs-visibility'>
                                <h5>Bộ lọc tìm kiếm</h5>
                                <span className='close' onClick={handleViewFilterMobile}>X</span>
                            </div>
                            <div className='wrap-sidebar-content'>
                                <div className='insurance-sidebar'>
                                    <Form.Label className='justify-content-start'>Chọn giá</Form.Label>
                                    <MultiRangeSlider
                                        step={STEP}
                                        min={MIN}
                                        max={MAX}
                                        defaultMinValue={MIN}
                                        defaultMaxValue={MAX}
                                        onChange={({ min, max }) => handleSetMinMax(min, max)}
                                    />
                                </div>
                                <div className='insurance-sidebar'>
                                    <Form.Label className='justify-content-start'>Sắp xếp theo</Form.Label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio" id="selling" onChange={() => handleCheckSort('selling')} />
                                        <label className="form-check-label" htmlFor="selling">
                                            Bán chạy
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio" id="popular" onChange={() => handleCheckSort('popular')} />
                                        <label className="form-check-label" htmlFor="popular">
                                            Phổ biến
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radio" id="discount" onChange={() => handleCheckSort('discount')} />
                                        <label className="form-check-label" htmlFor="discount">
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
                                                <div className="form-check" key={item._id}>
                                                    <input className="form-check-input" type="checkbox" id={item.code} onChange={() => handleSetSupplier(item._id)} />
                                                    <label className="form-check-label" htmlFor={item.code}>
                                                        {item.name}
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={"insurance-sidebar bg-white sidebar-right-content my-sticky-top xs-hidden " + `${isBenefitMainMobile ? 'open' : ''}` + ""}>
                            <Form.Label className='justify-content-start'>Những quyền lợi chính</Form.Label>
                            <ul className='list-benefit-main position-relative'>
                                {
                                    // (!isEmptyArray(step2.packageMain)) &&
                                    // step2.packageMain.map((itemMain, index) => {
                                    //     return (
                                    //         <li key={itemMain._id}>
                                    //             <div className='topic-benefit'>
                                    //                 <span>{
                                    //                     htmlParserCode(itemMain.description)
                                    //                 }</span>
                                    //             </div>
                                    //             <b>Số tiền được bảo hiểm: {numFormatter(itemMain.amount)}</b>
                                    //         </li>
                                    //     )
                                    // })
                                }
                            </ul>
                        </div>
                    </Col>

                    <Col md={6} className='insurance-center'>
                        {
                            // (!isEmptyArray(data)) ?
                            //     _renderListPackage()
                            //     :
                            //     <div className='empty-data'>
                            //         <span>Không có sản phẩm phù hợp, vui lòng chọn lại.</span>
                            //     </div>
                            _renderListPerson()
                        }
                    </Col>

                    <Col md={3}>
                        <BriefGroupComponent selectAdditional={selectAdditional} />
                        {
                            isBenefitMainMobile &&
                            <div className='bg-overlay' onClick={handleViewBenefitMainMobile}></div>
                        }
                        {/* quyen loi chinh */}
                    </Col>
                </Row>
            </Container >

            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                // validate={validate([isPackage.package_code])}
                validate={validate([handleValidateButton()])}
                handleButtonGoBack={handleGoBack}
                handleButtonContinue={handleContinue}
                // paidAmount={step2.paidAmount}
                // intoMoney={step2.intoMoney}
                isViewStep={true}
            />
            <CommonModal
                isShow={isShowDetail}
                onHidden={handleViewDetail}
                data={packageDetail}
            />
        </Container >
    )
}

export default BuyInsuranceGroupStep2Component
