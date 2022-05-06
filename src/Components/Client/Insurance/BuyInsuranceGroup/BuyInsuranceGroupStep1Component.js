import React from 'react'
import { Button, Col, Container, Row, Stack, Table } from 'react-bootstrap'
import { validate } from '../../../../Common/Helper'
import CommonButtonInsurance from '../CommonButtonInsurance'

const BuyInsuranceGroupStep1Component = () => {
    return (
        <div className='insurance-group-step1-content'>
            <h4>Nội dung tải lên</h4>
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
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>

                            </tbody>
                        </Table>
                        <Button variant={"pink btn-md text-uppercase"} className="btn-add-person"
                        // disabled={props.validate}
                        // onClick={props.handleButtonContinue}
                        >
                            <span className='text-plus'>+</span> Thêm người vào nhóm
                        </Button>

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
            </Container>
            <CommonButtonInsurance
                textButtonGoBack='QUAY LẠI'
                textButtonContinue='TIẾP TỤC'
                validate={validate([''])}
                handleButtonGoBack={()=>{}}
                handleButtonContinue={()=>{}}
                // paidAmount={step2.paidAmount}
                // intoMoney={step2.intoMoney}
                // isViewStep={true}
            />
        </div >
    )
}

export default BuyInsuranceGroupStep1Component
