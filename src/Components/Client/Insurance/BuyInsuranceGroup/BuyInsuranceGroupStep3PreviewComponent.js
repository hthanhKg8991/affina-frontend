import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, FormLabel, ListGroup, Row, Image, Stack } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkAge, checkAgeHadIdentity, formatIOSToDate, formatPrepaidAmount, genderByText, isBillingByText, isbillingByText, isEmptyArray, isStringNullOrEmpty, isValidateEmail, isValidatePhone, matchRound, validate } from '../../../../Common/Helper';
import District from '../../../../Config/districts';
import ProvinceData from '../../../../Config/provinces';
import Ward from '../../../../Config/wards';
import CommonComboBox from '../../../Common/CommonComboBox';
import CommonInput from '../../../Common/CommonInput';
import CommonButtonInsurance from '../CommonButtonInsurance';
import accessStyle from "../../../../Assets";
import Line from "../../../../Common/Line";
import { createOrdersGroup, handleSelectItem, pushItem } from '../../../../Reducers/Insurance/PackagesRedux';

const BuyInsuranceGroupStep3PreviewComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataAuth = {} } = useSelector((state) => state.AuthRedux) || {};
  const { dataStep } = useSelector((state) => state.insuranceGroup) || [];
  const { groupData = [], personDetail={} } = useSelector((state) => state.insurancePackagesRedux) || [];

  const { groupStep1 } = dataStep;
  const { listPerson = [] } = groupStep1;
  // console.log('personDetail>>>', listPerson);
  // 
  const [state, setState] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);
  const stateProvince = state[personDetail.id + 'Province'] && state[personDetail.id + 'Province'].code || '';
  const stateDistrict = state[personDetail.id + 'District'] && state[personDetail.id + 'District'].code || '';
  const DistrictData = District.filter(element => element.province_code === stateProvince);
  const WardData = Ward.filter(element => element.district_code === stateDistrict);

  let total_additional_fee = 0;
  let total_extra_package = 0;
  personDetail.selectAddition && personDetail.selectAddition.forEach((addition) => {
    total_additional_fee += addition.fee;
    total_extra_package += parseInt(addition.amount);
  }
  );

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
    const findPersonNotEnoughInfor = groupData.find((item, index) => {
      console.log('item.address>>', item.province);
      if (item.isbilling) {
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
      } else {
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

  const paramCreate = (item) => {
    let a = moment(item.starttimeinsure, 'DD/MM/YYYY').add(364, 'days').format('DD/MM/YYYY');
    console.log('paramCreate>>>', item.starttimeinsure, a);
    console.log('personDetail>>>', groupData);
    return {
      "sale": {
        partner: dataAuth.data && dataAuth.data.partner || '',
        region: dataAuth.data && dataAuth.data.region || '',
        area: dataAuth.data && dataAuth.data.area || '',
        employee_unit: dataAuth.data && dataAuth.data.employee_unit || '',
        employee_code: dataAuth.data && dataAuth.data.employee_code || '',
        staff_name: dataAuth.data && dataAuth.data.staff_name || '',
      },
      "contract_cate": {
        "contract_num": "",
        "group_code": "",
        "partner_code": "",
        "cus_source": ""
      },
      "product_package": {
        "cus_type": "Individual",
        "package_id": item.packageId,
        "package": item.packageCode,
        "quantily": groupData.length,
        "fee_primary_package": item.fee,
        "additional": JSON.stringify(item.additional),
        "package_main": JSON.stringify(item.packageMain),
        "fee_additional_package_5": "",
        "fee_additional_package_6": "",
        "fee_additional_package_7": "",
        "fee_additional_package_8": "",
        "total_additional_fee": item.totalAdditionalFee,
        "total_insurance_fee": item.intoMoney,
        "amount_insured": item.intoMoneyAmount,
        "total_group_insurance_fee": ""
      },
      "contract_detail": {
        "effective_date": "",
        "end_date": "",
        "duration": moment(moment(item.startTimeInsure).toDate()).add(364, 'days').format('DD/MM/YYYY'),
        "create_date": moment(moment(item.startTimeInsure).toDate()).format('DD/MM/YYYY'),
        "update_date": "",
        "first_date_confirm": ""
      },
      "insured_info": {
        "fullname": item.name,
        "gender": item.gender,
        "id_card": item.identity,
        "phone": item.phone,
        "email": item.email,
        "address": item.address,
        "city": item.province.name,
        "province": item.province.name,
        "district": item.district.name,
        "ward": item.ward.name,
        "birthday": moment(item.birthday).format('DD/MM/YYYY'),
        "note": "",
        // Require billing
        "is_billing": item.isBilling,
        "company_name": item.companyName,
        "tax_number": item.taxNumber,
        "company_address": item.companyAddress,
      },
      "insurance_buyer": {
        "fullname": checkAgeHadIdentity(item.birthday) ? item.relationshipName : '',
        "relationship": checkAgeHadIdentity(item.birthday) ? item.relationship && item.relationship.key : '',
        "id_card": item.identity,
        "phone": item.phone,
        "email": item.email,
        "note": ""
      },
      "insurance_fee": {
        "pecent_discount_original": "",
        "price_discount_original": "",
        "pecent_discount_camp1": "",
        "price_discount_camp1": "",
        "id_camp1": "",
        "code_discount_camp2": "",
        "price_discount_camp2": "",
        "id_camp2": "",
        "total_fee_after_discount": ""
      },
      "commission": {
        "commission": "",
        "fee_after_commission": "",
        "fee_after_commission_discount": ""
      },
      "contract_status": "GD đang chờ"
    }
  }

  const handleCreateOrder = () => {

    let params = {
      "group_code": "1234566666666",
      "user": dataAuth.data && dataAuth.data._id || '',
      list: []
    }

    groupData.forEach((item, index) => {
      params.list.push(paramCreate(item));
    })
    console.log('handleCreateOrder>>>>', params);
    dispatch(createOrdersGroup(params))
  }

  const handleContinue = () => {
    handleCreateOrder();
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
                <ListGroup.Item className="title">
                  {" "}
                  Danh sách người được bảo hiểm
                </ListGroup.Item>
                {groupData.map((item, index) => {
                  return (
                    <ListGroup.Item
                      style={{
                        fontWeight: item.id === personDetail.id ? "Bold" : "",
                      }}
                      key={index}
                      onClick={() => onSelectDetail(item)}
                    >
                      {index + 1}. {item.name}
                      {item.id === personDetail.id && (
                        <i className="mdi mdi-check-bold ms-auto is-select"></i>
                      )}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
            <Col sm={9} md={9}>
              <div className="group-info">
                <div className="header">
                  <Container style={{ padding: "0px" }}>
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
                            // onClick={handleGoBackButton}
                            alt="icon edit"
                            width={19}
                            height={22}
                          />
                        </div>
                      </Stack>
                    </Container>
                  </Container>
                </div>
                <Container
                  className="insurance-info text-left"
                  style={{ padding: "0px" }}
                >
                  <Container>
                    <section className="list-info">
                      <Row>
                        <Col md={3} xs={6}>
                          <p className="title-info">Họ và tên</p>
                          <strong>{personDetail.name}</strong>
                        </Col>
                        <Col md={3} xs={6}>
                          <p className="title-info">Giới tính</p>
                          <strong>{genderByText(personDetail.gender)}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={2} xs={6}>
                          <p className="title-info">Ngày sinh</p>
                          <strong>{moment(personDetail.birthday).format('DD/MM/YYYY')}</strong>
                        </Col>
                        <Col md={4} xs={6}>
                          <p className="title-info">
                            Số CMND / CCCD / Passport
                          </p>
                          <strong>{personDetail.identity}</strong>
                        </Col>
                        <Line type="solid" className="xs-visibility mt-2" />
                      </Row>
                      <Line type="solid" className="xs-hidden" />
                      <Row>
                        <Col md={3} xs={12}>
                          <p className="title-info">Địa chỉ</p>
                          <strong>{personDetail.address}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={3} xs={12}>
                          <p className="title-info">Phường</p>
                          <strong>{personDetail?.ward?.name}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={3} xs={12}>
                          <p className="title-info">Quận/huyện</p>
                          <strong>{personDetail?.district?.name}</strong>
                        </Col>
                        <Col md={3} xs={12}>
                          <p className="title-info">Thành phố</p>
                          <strong>{personDetail?.province?.name}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mb-2 mb-2"
                        />
                      </Row>
                      <Line type="solid" className="xs-hidden" />
                      <Row>
                        <Col md={3} xs={12}>
                          <p className="title-info">Số điện thoại</p>
                          <strong>{personDetail.phone}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={3} xs={12}>
                          <p className="title-info">Email</p>
                          <strong>{personDetail.email}</strong>
                        </Col>
                        {checkAgeHadIdentity(personDetail.birthday) &&
                          <>
                            <Col md={4} xs={6}>
                              <p className="title-info">
                                Tên người yêu cầu bảo hiểm{" "}
                              </p>
                              <strong>{personDetail.relationshipname}</strong>
                            </Col>
                            <Col md={2} xs={6}>
                              <p className="title-info">Mối quan hệ</p>
                              <strong>{personDetail.relationship}</strong>
                            </Col>
                          </>
                        }
                      </Row>
                      <Line type="solid" />
                      <div className="table-footer">
                        Yêu cầu xuất hoá đơn đỏ: <strong>{isbillingByText(personDetail.isbilling)}</strong>
                      </div>
                    </section>
                  </Container>
                </Container>
              </div>
              <div className="group-info">
                <div className="header">
                  <Container style={{ padding: "0px" }}>
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
                            // onClick={handleGoBackButton}
                            alt="icon edit"
                            width={19}
                            height={22}
                          />
                        </div>
                      </Stack>
                    </Container>
                  </Container>
                </div>
                <Container
                  className="insurance-info text-left"
                  style={{ padding: "0px" }}
                >
                  <Container>
                    <section className="list-info">
                      <Row>
                        <Col md={3} xs={6}>
                          <p className="title-info">Nhà bảo hiểm</p>
                          <strong>{personDetail.package.supplier.name}</strong>
                        </Col>
                        <Col md={3} xs={6}>
                          <p className="title-info">Tên gói</p>
                          <strong>{personDetail.package.name}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={3} xs={6}>
                          <p className="title-info">Số tiền được bảo hiểm</p>
                          <strong>{formatPrepaidAmount(matchRound(personDetail.package.price + total_extra_package))}VNĐ</strong>
                        </Col>
                        <Col className="col"> </Col>
                        <Line type="solid" className="xs-visibility mt-2" />
                      </Row>
                      <Line type="solid" className="xs-hidden" />
                      <Row>
                        <Col md={3} xs={6}>
                          <p className="title-info">Ngày bắt đầu bảo hiểm</p>
                          <strong>{moment(personDetail.starttimeinsure).format('DD/MM/YYYY')}</strong>
                        </Col>
                        <Col md={3} xs={6}>
                          <p className="title-info">Ngày hết hạn bảo hiểm</p>
                          <strong>{moment(personDetail.starttimeinsure).add(364, 'days').format('DD/MM/YYYY')}</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={3} xs={6}></Col>
                        <Col md={3} xs={6}></Col>
                      </Row>
                      <Line type="solid" className="xs-hidden" />
                      <Row>
                        <Col md={6} xs={12}>
                          <p className="title-info">Quyền lợi chính</p>
                          {
                            (!isEmptyArray(personDetail.package.package_main)) &&
                            personDetail.package.package_main.map((itemMain, index) => {
                              return (
                                <div className='sub-info-insure' key={itemMain._id}>
                                  <strong className='benefits-title'>{itemMain.name}</strong>
                                  <p className='benefits-price d-flex justify-content-md-start justify-content-between'>
                                    <span>Số tiền được bảo hiểm:</span>
                                    <span>{formatPrepaidAmount(matchRound(itemMain.amount))}VNĐ</span>
                                  </p>
                                </div>
                              )
                            })
                          }
                        </Col>
                        <Col md={6} xs={12}>
                          <p className="title-info">Quyền lợi bổ sung </p>
                          {
                            (!isEmptyArray(personDetail.selectAddition)) &&
                            personDetail.selectAddition.map((itemMain, index) => {
                              return (
                                <div className='sub-info-insure' key={itemMain._id}>
                                  <strong className='benefits-title'>{itemMain.name}</strong>
                                  <p className='benefits-price d-flex justify-content-md-start justify-content-between'>
                                    <span>Số tiền được bảo hiểm:</span>
                                    <span>{formatPrepaidAmount(matchRound(itemMain.amount))}VNĐ</span>
                                  </p>
                                </div>
                              )
                            })
                          }
                        </Col>
                        <Line type="solid" className="xs-visibility mt-2" />
                      </Row>
                      <Line type="solid" className="xs-hidden" />
                      <Row>
                        <Col md={3} xs={6}>
                          <p className="title-info">Phí gói chính</p>
                          <strong>{formatPrepaidAmount(matchRound(personDetail.package.price_fee))}VNĐ</strong>
                        </Col>
                        <Col md={3} xs={6}>
                          <p className="title-info">Tổng phí gói phụ</p>
                          <strong>{formatPrepaidAmount(matchRound(total_additional_fee))}VNĐ</strong>
                        </Col>
                        <Line
                          type="solid"
                          className="xs-visibility mt-2 mb-2"
                        />
                        <Col md={3} xs={6}></Col>
                        <Col
                          md={3}
                          xs={12}
                          className="d-flex justify-content-end"
                        >
                          <div className="total">
                            {" "}
                            TỔNG: <strong>{formatPrepaidAmount(matchRound(personDetail.package.price_fee + total_additional_fee))}VNĐ</strong>{" "}
                          </div>
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
