import moment from 'moment'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Stack, Table } from 'react-bootstrap'
import { formatIOSToDate, genderByText, isValidateEmail, validate } from '../../../../Common/Helper'
import CommonInput from '../../../Common/CommonInput'
import CommonButtonInsurance from '../CommonButtonInsurance'
import DatePicker from "react-datepicker";
import MaskedInput from 'react-input-mask';
import CommonComboBox from '../../../Common/CommonComboBox'
import { handleAddPerson } from '../../../../Reducers/Insurance/StepRedux';
import { useDispatch, useSelector } from 'react-redux'

const BuyInsuranceGroupStep1Component = () => {
    const dispatch = useDispatch();
    const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
    const { step1 } = dataStep;
    const { listPerson = [] } = step1;
    const [name, setName] = useState("");
    const [gender, setGender] = useState(0);
    const [birthday, setBirthday] = useState(formatIOSToDate());

    const handleName = (e) => {
        setName(e.target.value);
    }
    const onChangeGender = (sex) => {
        setGender(sex)
    }
    var datePlusOne = new Date();
    const onChangeBirthday = (date) => {
        setBirthday(date)
    }

    const handleAdd = () => {
        dispatch(handleAddPerson({
            name: name,
            gender: gender.key,
            birthday: moment(birthday).format('DD/MM/YYYY'),
        }))
    }

    console.log('listPerson>>>', listPerson);
    return (
        <div className='insurance-group-step1-content'>
            <h4>Bạn chưa có thành viên nào tham gia bảo hiểm</h4>
            <Container>
                <Row>
                    <Col md={10} sm={10} xs={12} className='m-auto'>
                        <Table responsive="sm" className="text-left">
                            <thead>
                                <tr>
                                    <th>Tên</th>
                                    <th>Năm sinh</th>
                                    <th>Giới tính</th>
                                    <th>Điều kiện</th>
                                    <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listPerson.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.birthday}</td>
                                                <td>{genderByText(item.gender)}</td>
                                                <td>{item.isEligible}</td>
                                                <td>Table cell</td>
                                            </tr>
                                        )

                                    })
                                }


                            </tbody>
                        </Table>


                    </Col>
                </Row>
                <Row>
                    <Col md={8} sm={8} xs={12} className='m-auto'>
                        <Stack direction='horizontal' className="box-upload justify-content-around">
                            <i className='mdi mdi-cloud-upload-outline'></i>
                            <div className='text-content-upload'>
                                <span>Chọn file tải lên hoặc kéo thả để upload file </span><br />
                                <small>Chỉ nhận file excel, dung lượng tối đa 10MB</small>
                            </div>
                            <Button variant={"outline-info"}
                            // disabled={props.validate}
                            // onClick={props.handleButtonContinue}
                            >
                                Chọn file
                            </Button>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col className="group-add-info">
                        <div className='wrapper-horizontal-line justify-content-center'>
                            <hr className='line-gradient' />
                            <span className='word text-gradient'>Hoặc</span>
                            <hr className='line-gradient' />
                        </div>
                        <h3>Nhập thông tin người được bảo hiểm</h3>
                        <Row>
                            <Col md={4} sm={4} xs={4} className="text-left">
                                <CommonInput
                                    require={true}
                                    label='Họ và tên'
                                    hint='Nhập họ và tên'
                                    defaultValue={name}
                                    value={name}
                                    onChange={(e) => handleName(e)}
                                />
                            </Col>
                            <Col md={4} sm={4} xs={4} className="text-left">
                                <CommonComboBox
                                    isSearch={false}
                                    require={true}
                                    data={[
                                        {
                                            key: '1',
                                            value: 'Nam',
                                        },
                                        {
                                            key: '0',
                                            value: 'Nữ',
                                        },
                                    ]}
                                    readOnly={false}
                                    viewValue="value"
                                    value={gender.value}
                                    defaultValue={gender.value}
                                    label='Giới tính'
                                    hint='Chọn Giới tính'
                                    onChange={(e) => onChangeGender(e)}
                                />
                            </Col>
                            <Col md={4} sm={4} xs={4} className="text-left">
                                <CommonInput
                                    inputType='date'
                                    require={true}
                                    label='Ngày sinh'
                                    hint='Nhập ngày/tháng/năm'
                                    defaultValue={birthday}
                                    value={birthday}
                                    minDate={datePlusOne.setDate(datePlusOne.getDate() + 1)}
                                    onChange={(e) => onChangeBirthday(e)}
                                />
                            </Col>

                        </Row>
                        <Button variant={"pink btn-md text-uppercase"} className="btn-add-person"
                            disabled={validate([name, gender, birthday])}
                            onClick={handleAdd}
                        >
                            <span className='text-plus'>+</span> Thêm người vào nhóm
                        </Button>
                    </Col>
                </Row>
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY VỀ TRANG CHỦ'
                textButtonContinue='TIẾP TỤC'
                validate={validate([''])}
                handleButtonGoBack={() => { }}
                handleButtonContinue={() => { }}
            // paidAmount={step2.paidAmount}
            // intoMoney={step2.intoMoney}
            // isViewStep={true}
            />
        </div >
    )
}

export default BuyInsuranceGroupStep1Component
