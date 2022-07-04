import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, FormLabel, ListGroup, Row, Image, Stack} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAge, formatIOSToDate, genderByText, isStringNullOrEmpty, isValidateEmail, isValidatePhone, validate } from '../../../../Common/Helper';
import District from '../../../../Config/districts';
import ProvinceData from '../../../../Config/provinces';
import Ward from '../../../../Config/wards';
import { handleSelectItem, pushItem } from '../../../../Reducers/Insurance/GroupStepRedux';
import CommonComboBox from '../../../Common/CommonComboBox';
import CommonInput from '../../../Common/CommonInput';
import CommonButtonInsurance from '../CommonButtonInsurance';
import accessStyle from "../../../../Assets";
import Line from "../../../../Common/Line";

const BuyInsuranceGroupStep3PreviewComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { dataStep } = useSelector((state) => state.InsuranceGroup) || [];
    const { groupStep1 } = dataStep;
    const { listPerson = [], personDetail = {} } = groupStep1;
    console.log('personDetail>>>', personDetail);
    // 
    const [state, setState] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const stateProvince = state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].code || '';
    const stateDistrict = state[personDetail.id + 'District'] && state[personDetail.id + 'District'].code || '';
    const DistrictData = District.filter(element => element.province_code === stateProvince);
    const WardData = Ward.filter(element => element.district_code === stateDistrict);

    var datePlusOne = new Date();
    const handleCheckBilling = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: !value,
        })
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: !value })
        )
    }
    const handleCheckConfirm = () => {
        setIsConfirm(!isConfirm)
    }

    const handleGoBackButton = () => {
        props.handleButtonGoBack && props.handleButtonGoBack()
    }
    const handleValidateButton = () => {
       const findPersonNotEnoughInfor = listPerson.find((item, index) => {
            console.log('item.address>>', item.province);
            if(item.isbilling){
                if (
                    !isStringNullOrEmpty(item.name)
                    && !isStringNullOrEmpty(item.gender)
                    && !isStringNullOrEmpty(item.identity)
                    && !isStringNullOrEmpty(item.birthday)
                    && !isStringNullOrEmpty(item.phone)
                    && isValidatePhone(item.phone)
                    && !isStringNullOrEmpty(item.email)
                    && isValidateEmail(item.email)
                    // && !isStringNullOrEmpty(item.timeexp)
                    && !isStringNullOrEmpty(item.starttimeinsure)
                    && !isStringNullOrEmpty(item.province)
                    && !isStringNullOrEmpty(item.district)
                    && !isStringNullOrEmpty(item.ward)
                    && !isStringNullOrEmpty(item.address)
                    // is billing
                    && !isStringNullOrEmpty(item.taxnumber)
                    && !isStringNullOrEmpty(item.companyaddress)
                    && !isStringNullOrEmpty(item.companyname)
    
                ) {
                    return false;
                } else {
                    return true;
                }
            }else{
                if (
                    !isStringNullOrEmpty(item.name)
                    && !isStringNullOrEmpty(item.gender)
                    && !isStringNullOrEmpty(item.identity)
                    && !isStringNullOrEmpty(item.birthday)
                    && !isStringNullOrEmpty(item.phone)
                    && isValidatePhone(item.phone)
                    && !isStringNullOrEmpty(item.email)
                    && isValidateEmail(item.email)
                    // && !isStringNullOrEmpty(item.timeexp)
                    && !isStringNullOrEmpty(item.starttimeinsure)
                    && !isStringNullOrEmpty(item.province)
                    && !isStringNullOrEmpty(item.district)
                    && !isStringNullOrEmpty(item.ward)
                    && !isStringNullOrEmpty(item.address)
                ) {
                    return false;
                } else {
                    return true;
                }
            }
       
       });
        if (findPersonNotEnoughInfor === undefined) { return true } else { return false };
    }

    const handleCreateOrder = () => {

    }

    const handleContinue = () => {
        props.handleButtonContinue && props.handleButtonContinue()
    }

    const handleProvince = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: value,
            [personDetail.id + 'District']: '',
            [personDetail.id + 'Ward']: ''
        })
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: value })
        )
    }

    const handleDistrict = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: value,
            [personDetail.id + 'Ward']: ''
        })
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: value })
        )
    }

    const onsetStateDropdown = (key, value) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        setState({
            ...state,
            [key]: value
        });
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: value })
        )
    }
    const onsetStateInput = (key, e) => {
        let pushKey = key.substring(1, key.length).toLowerCase();
        console.log('pushKey>>>', pushKey);
        setState({
            ...state,
            [key]: e.target.value
        });
        dispatch(
            pushItem({ id: personDetail.id, [pushKey]: e.target.value })
        )
    }

    const onSelectDetail = (item) => {
        setState({
            ...state,
            [personDetail.id + 'Name']: personDetail.name,
            [personDetail.id + 'Identity']: personDetail.identity
        })
        dispatch(
            handleSelectItem(item.id)
        )
    }
    useMemo(() => {
        let initState = {
            [personDetail.id + 'Name']: personDetail.name,
            [personDetail.id + 'Identity']: personDetail.identity,
            [personDetail.id + 'StartTimeInsure']: formatIOSToDate(personDetail.starttimeinsure),
            [personDetail.id + 'TimeExp']: personDetail.timeexp,
            [personDetail.id + 'Province']: personDetail.province,
            [personDetail.id + 'District']: personDetail.district,
            [personDetail.id + 'Ward']: personDetail.ward,
            [personDetail.id + 'Address']: personDetail.address,
            [personDetail.id + 'Email']: personDetail.email,
            [personDetail.id + 'Phone']: personDetail.phone,
            [personDetail.id + 'IsBilling']: personDetail.isbilling,
            [personDetail.id + 'CompanyName']: personDetail.companymame,
            [personDetail.id + 'TaxNumber']: personDetail.taxnumber,
            [personDetail.id + 'CompanyAddress']: personDetail.companyaddress,
        }
        Object.assign(state, initState);
    }, [personDetail])
    console.log('onsetStateInput>>>', handleValidateButton());
    return (
        <div className="insurance-group-step3-input">
        <Container className="text-left">
            <h5 className="text-center">Vui lòng kiểm tra lại thông tin </h5>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="title"> Danh sách người được bảo hiểm
                            </ListGroup.Item>
                            {
                                listPerson.map((item, index) => {
                                    return (
                                        <ListGroup.Item style={{fontWeight: item.id === personDetail.id ? "Bold" : ""}} key={index} onClick={() => onSelectDetail(item)}>
                                            {index + 1}. {item.name}
                                            {item.id === personDetail.id && (
                                                <i className="mdi mdi-check-bold ms-auto is-select"></i>
                                            )}
                                        </ListGroup.Item>
                                    )
                                })
                            }
                          </ListGroup>
                    </Col>
                    <Col sm={9} md={9}>
                        <div className="group-info">
                            <div className="header">
                                <Container style={{padding: "0px"}}>
                                    <Container>
                                        <Stack direction="horizontal">
                                            <div className="icon-header">
                                                <Image
                                                    src={accessStyle.images.icons.user}
                                                    srcSet={`
                                                        ${accessStyle.images.icons.user2x} 2x,
                                                        ${accessStyle.images.icons.user3x} 3x
                                                        `}
                                                    alt="icon user"
                                                    width={19}
                                                    height={22}
                                                />
                                            </div>
                                            <div className="title-header">
                                                <h3>THÔNG TIN NGƯỜI ĐƯỢC BẢO HIỂM</h3>
                                            </div>
                                            <div className="ms-auto">
                                                <Image
                                                    src={accessStyle.images.icons.edit}
                                                    srcSet={`
                                                        ${accessStyle.images.icons.edit2x} 2x,
                                                        ${accessStyle.images.icons.edit3x} 3x
                                                    `}
                                                        className="cursor-pointer"
                                                     // onClick={() => isHasDataApi() ? {} : handleEditStep()}
                                                        alt="icon edit"
                                                        width={19}
                                                        height={22}
                                                />
                                            </div>
                                        </Stack>
                                    </Container>
                                </Container>
                            </div>
                            <Container className="insurance-info text-left" style={{padding: "0px"}}>
                                <Container>
                                    <section className="list-info">
                                        <Row>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Họ và tên</p>
                                                <strong>Nguyễn Hoàng Tấn</strong>
                                            </Col>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Giới tính</p>
                                                <strong>Name</strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={2} xs={6}>
                                                <p className="title-info">Ngày sinh</p>
                                                <strong>15/08/1995</strong>
                                            </Col>
                                            <Col md={4} xs={6}>
                                                <p className="title-info">Số CMND / CCCD / Passport</p>
                                                <strong>264465727</strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2" />
                                        </Row>
                                        <Line type="solid" className="xs-hidden" />
                                        <Row>
                                            <Col md={3} xs={12}>
                                                <p className="title-info">Địa chỉ</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={3} xs={12}>
                                                <p className="title-info">Phường</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={3} xs={12}>
                                                <p className="title-info">Quận/huyện</p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={3} xs={12}>
                                                <p className="title-info">Thành phố</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mb-2 mb-2"/>
                                        </Row>
                                        <Line type="solid" className="xs-hidden" />
                                        <Row>
                                            <Col md={3} xs={12}>
                                                <p className="title-info">Số điện thoại</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={3} xs={12}>
                                                <p className="title-info">Email</p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={4} xs={6}>
                                                <p className="title-info">Tên người yêu cầu bảo hiểm </p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={2} xs={6}>
                                                <p className="title-info">Mối quan hệ</p>
                                                <strong></strong>
                                            </Col>
                                        </Row>
                                        <Line type="solid" />
                                        <div className="table-footer">Yêu cầu xuất hoá đơn đỏ: <strong></strong></div>
                                    </section>
                                </Container>
                            </Container>
                        </div>
                        <div className="group-info">
                            <div className="header">
                                <Container style={{padding: "0px"}}>
                                    <Container>
                                        <Stack direction="horizontal">
                                            <div className="icon-header">
                                                <Image
                                                    src={accessStyle.images.icons.security}
                                                    srcSet={`
                                                        ${accessStyle.images.icons.security2x} 2x,
                                                        ${accessStyle.images.icons.security3x} 3x
                                                    `}
                                                    alt="Logo Affina"
                                                    width={19}
                                                    height={22}
                                                />
                                            </div>
                                            <div className="title-header">
                                                <h3>THÔNG TIN GÓI BẢO HIỂM</h3>
                                            </div>
                                            <div className="ms-auto">
                                                <Image
                                                    src={accessStyle.images.icons.edit}
                                                    srcSet={`
                                                        ${accessStyle.images.icons.edit2x} 2x,
                                                        ${accessStyle.images.icons.edit3x} 3x
                                                    `}
                                                    // onClick={() => isHasDataApi() ? {} : handleEditStep()}
                                                    alt="icon edit"
                                                    width={19}
                                                    height={22}
                                                />
                                            </div>
                                        </Stack>
                                    </Container>
                                </Container>
                            </div>
                            <Container className="insurance-info text-left" style={{padding: "0px"}}>
                                <Container>
                                    <section className="list-info">
                                        <Row>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Nhà bảo hiểm</p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Tên gói</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Số tiền được bảo hiểm</p>
                                                <strong></strong>
                                            </Col>
                                            <Col className="col"> </Col>
                                            <Line type="solid" className="xs-visibility mt-2" />
                                        </Row>
                                        <Line type="solid" className="xs-hidden" />
                                        <Row>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Ngày bắt đầu bảo hiểm</p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Ngày hết hạn bảo hiểm</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={3} xs={6}></Col>
                                            <Col md={3} xs={6}></Col>
                                        </Row>
                                        <Line type="solid" className="xs-hidden" />
                                        <Row>
                                            <Col md={6} xs={12}>
                                                <p className="title-info">Quyền lợi chính</p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={6} xs={12}>
                                                <p className="title-info">Quyền lợi bổ sung </p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2" />
                                        </Row>
                                        <Line type="solid" className="xs-hidden" />
                                        <Row>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Phí gói chính</p>
                                                <strong></strong>
                                            </Col>
                                            <Col md={3} xs={6}>
                                                <p className="title-info">Tổng phí gói phụ</p>
                                                <strong></strong>
                                            </Col>
                                            <Line type="solid" className="xs-visibility mt-2 mb-2"/>
                                            <Col md={3} xs={6}></Col>
                                            <Col md={3} xs={12} className="d-flex justify-content-end">
                                                <div className="total"> TỔNG: <strong>VNĐ</strong> </div>
                                            </Col>
                                            <Line type="solid" className="xs-hidden" />
                                        </Row>
                                    </section>
                                </Container>
                            </Container>
                        </div>
               
                    </Col>
                </Row>
            </Container>
        </Container>
        <CommonButtonInsurance
          textButtonGoBack="QUAY LẠI"
          textButtonContinue="TIẾP TỤC"
        //   validate={validate([isConfirm, handleValidateButton()])}
          // validate={false}
          handleButtonGoBack={handleGoBackButton}
          handleButtonContinue={handleContinue}
        />
      </div>
    );
}

export default BuyInsuranceGroupStep3PreviewComponent;
