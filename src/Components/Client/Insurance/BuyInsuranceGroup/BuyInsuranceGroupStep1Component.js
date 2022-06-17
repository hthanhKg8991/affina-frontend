import moment from "moment";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Stack,
  Table,
  FormLabel,
} from "react-bootstrap";
import {
  formatIOSToDate,
  genderByText,
  isValidateEmail,
  validate,
} from "../../../../Common/Helper";
import CommonInput from "../../../Common/CommonInput";
import CommonButtonInsurance from "../CommonButtonInsurance";
import DatePicker from "react-datepicker";
import MaskedInput from "react-input-mask";
import CommonComboBox from "../../../Common/CommonComboBox";
import { handleAddPerson } from "../../../../Reducers/Insurance/StepRedux";
import { useDispatch, useSelector } from "react-redux";
import upLoad from "../../../../Assets/Images/public/icons/feather_upload-cloud.png";

const BuyInsuranceGroupStep1Component = (props) => {
  const dispatch = useDispatch();
  const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
  const { step1 } = dataStep;
  const { listPerson = [] } = step1;
  const [name, setName] = useState("");
  const [gender, setGender] = useState(0);
  const [birthday, setBirthday] = useState(formatIOSToDate());
  const [isFile, setIsFile] = useState(false);

  const resetInputState = () => {
    setName("");
    setGender("");
    setBirthday("");
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (sex) => {
    setGender(sex);
  };
  var datePlusOne = new Date();
  const onChangeBirthday = (date) => {
    console.log("date>>", date);
    setBirthday(date);
  };

  const handleAdd = () => {
    dispatch(
      handleAddPerson({
        name: name,
        gender: gender.key,
        birthday: moment(birthday).format("DD/MM/YYYY"),
      })
    );
    resetInputState();
  };
  const handleGoBack = () => {
    props.handleButtonGoBack && props.handleButtonGoBack();
  };
  const handleContinue = () => {
    props.handleButtonContinue && props.handleButtonContinue();
  };

  console.log("listPerson>>>", listPerson);

  const handleFile = (event) => {
    console.log("ok");
    let file = event.target.files[0];
    console.log("listperson", file);
    setIsFile(true);
  };
  const handleSubmitFile = () => {
    setIsFile(false);
  };
  return (
    <div className="insurance-group-step1-content">
      <h4>Bạn chưa có thành viên nào tham gia bảo hiểm</h4>
      <Container>
        {/* <Row>
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
                </Row> */}
        <Row>
          <Col md={8} sm={8} xs={12}>
            <Stack
              direction="horizontal"
              className="box-upload justify-content-around"
            >
              <img
                src={upLoad}
                alt="not found"
                style={{ marginBottom: "16px" }}
              ></img>
              <div className="text-content-upload">
                <span>Chọn file tải lên hoặc kéo thả để upload file </span>
                <br />
                <br />
                <small>Chỉ nhận file excel, dung lượng tối đa 10MB</small>
              </div>
              {isFile ? (
                <Button
                  type="submit"
                  className="button-submit"
                  onClick={handleSubmitFile}
                >
                  <lable className="Chn-submit">SUBMIT</lable>
                </Button>
              ) : (
                <>
                  <input
                    type="file"
                    // accept="file_extension"
                    name="uploadfile"
                    id="listperson"
                    hidden
                    onChange={(e) => handleFile(e)}
                  />{" "}
                  <label for="listperson" className="button-load-file">
                    <label for="listperson" className="Chn-file">
                      Chọn file
                    </label>
                  </label>
                </>
              )}
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col className="group-add-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "-10px",
              }}
            >
              <hr className="line-or-left" />
              <span style={{ color: "#095efb", fontSize: "16px" }}>Hoặc</span>
              <hr className="line-or-right" />
            </div>
            <div
              style={{
                marginBottom: "40px",
              }}
            >
              <h3>Nhập thông tin người được bảo hiểm</h3>
            </div>

            <Row>
              <Col md={4} sm={4} xs={4} className="text-left">
                <CommonInput
                  require={true}
                  label="Họ và tên"
                  hint="Nhập họ và tên"
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
                      key: "1",
                      value: "Nam",
                    },
                    {
                      key: "0",
                      value: "Nữ",
                    },
                  ]}
                  readOnly={false}
                  viewValue="value"
                  value={gender.value}
                  defaultValue={gender.value}
                  label="Giới tính"
                  hint="Chọn Giới tính"
                  onChange={(e) => onChangeGender(e)}
                />
              </Col>
              <Col md={4} sm={4} xs={4} className="text-left">
                <div className="box-input box-input-active">
                  <FormLabel>
                    <small className="text-danger">*</small>Ngày sinh
                  </FormLabel>
                  <DatePicker
                    className="form-control"
                    selected={birthday}
                    onChange={(date) => onChangeBirthday(date)}
                    placeholderText="Nhập ngày/tháng/năm sinh*"
                    dateFormat="dd/MM/yyyy"
                    // minDate={new Date()}
                    customInput={<MaskedInput mask="99/99/9999" />}
                  />
                </div>
              </Col>
            </Row>
            <Button
              variant={"pink btn-md text-uppercase"}
              className="btn-add-person"
              disabled={validate([name, gender, birthday])}
              onClick={handleAdd}
            >
              <span className="text-plus">+</span> Thêm người vào nhóm
            </Button>
          </Col>
        </Row>
      </Container>
      <CommonButtonInsurance
        textButtonGoBack="QUAY VỀ TRANG CHỦ"
        textButtonContinue="TIẾP TỤC"
        validate={validate([listPerson.length > 0])}
        handleButtonGoBack={handleGoBack}
        handleButtonContinue={handleContinue}
        // paidAmount={step2.paidAmount}
        // intoMoney={step2.intoMoney}
        // isViewStep={true}
      />
    </div>
  );
};

export default BuyInsuranceGroupStep1Component;
