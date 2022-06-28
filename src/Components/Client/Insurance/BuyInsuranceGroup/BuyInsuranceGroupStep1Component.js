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
import { Button as MuiButton } from "@mui/material";
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
import {
  handleAddPerson,
  handleUpdatePerson,
  handleRemovePersonFromGroup,
} from "../../../../Reducers/Insurance/GroupStepRedux";
import { useDispatch, useSelector } from "react-redux";
import upLoad from "../../../../Assets/Images/public/icons/feather_upload-cloud.png";
import TemplateImportDataGruop from "../../../../Assets/FileExcelMau/TemplateImportDataGruop.xlsx";
import edit from "../../../../Assets/Images/public/icons/edit.webp";
import deleted from "../../../../Assets/Images/public/icons/delete.png";

const BuyInsuranceGroupStep1Component = (props) => {
  const dispatch = useDispatch();
  const { dataStep } = useSelector((state) => state.InsuranceGroup) || [];
  const { groupStep1 } = dataStep;
  const { listPerson = [] } = groupStep1;
  const [name, setName] = useState("");
  const [gender, setGender] = useState(0);
  const [birthday, setBirthday] = useState(formatIOSToDate());
  const [isEdit, setIsEdit] = useState(false);
  const [indexDefaul, setIndexDefaul] = useState(-1);

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
        id: listPerson.length + 1,
        name: name,
        gender: gender.key,
        birthday: moment(birthday).format("DD/MM/YYYY"),
        identity: "",
        phone: "",
        email: "",
        duration: "",
        createdate: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        isBilling: false,
        companyname: "",
        taxnumber: "",
        companyaddress: "",
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
  };

  const handleEdit = (index) => {
    setIndexDefaul(index);
    setIsEdit(true);
  };

  const handleUpdate = (index, person) => {
    console.log("person.birthday", typeof person.birthday);
    const personBirthday = moment(birthday).format("DD/MM/YYYY") === "Invalid date" ? moment(person.birthday).format("DD/MM/YYYY") : moment(birthday).format("DD/MM/YYYY");
    dispatch(
      handleUpdatePerson({
        index: index,
        name: name || person.name,
        gender: gender.key || person.gender,
        birthday: personBirthday,
      })
    );
    setIsEdit(false);
    resetInputState();
  };
  const handleDelete = (index) => {
    dispatch(handleRemovePersonFromGroup(index));
  };

  const checkCondition = () => {
    const isCondition = listPerson.find(
      (person) => person.isEligible === "Không đủ điều kiện"
    );
    if (isCondition) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="insurance-group-step1-content">
      {listPerson.length > 0 ? (
        <>
          <h4>Kiểm tra thông tin</h4>
          {listPerson.some((person)=>person.isEligible === "Không đủ điều kiện") ? (<><div
            style={{
              color:  "red", fontWeight: 500, fontSize: "20px", fontFamily: "Manrope", marginTop: "-20px", marginBottom: "5px"
            }}
          >
            Có {listPerson.filter((person)=>person.isEligible === "Không đủ điều kiện").length} khách hàng không đủ điều kiện tham gia (30 ngày tuổi - 65
            tuổi)
          </div>
          <div  style={{
              color:  "red", fontWeight: 500, fontSize: "20px", fontFamily: "Manrope", marginBottom: "30px"
            }}>Vui lòng nhập đúng ngày sinh hoặc bỏ khách hàng ra khỏi danh sách</div></>
          ) : ""}
          
        </>
      ) : (
        <h4>Bạn chưa có thành viên nào tham gia bảo hiểm</h4>
      )}
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12} className="m-auto">
            <Table responsive="sm" className="text-left">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Năm sinh</th>
                  <th>Giới tính</th>
                  <th>Điều kiện</th>
                  <th>Ghi Chú</th>
                </tr>
              </thead>
              <tbody>
                {listPerson.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ paddingLeft: "0", paddingRight: "0" }}>
                        {isEdit && indexDefaul === index ? (
                          <CommonInput
                            require={true}
                            // label="Họ và tên"
                            hint={item.name}
                            defaultValue={name}
                            value={name}
                            onChange={(e) => handleName(e)}
                          />
                        ) : (
                          item.name
                        )}
                      </td>
                      <td style={{ paddingLeft: "0", paddingRight: "0" }}>
                        {isEdit && indexDefaul === index ? (
                          <div className="box-input box-input-active">
                            {/* <FormLabel>
                              <small className="text-danger">*</small>Ngày sinh
                            </FormLabel> */}
                            <DatePicker
                              className="form-control"
                              selected={birthday}
                              onChange={(date) => onChangeBirthday(date)}
                              placeholderText={item.birthday}
                              dateFormat="dd/MM/yyyy"
                              // minDate={new Date()}
                              customInput={<MaskedInput mask="99/99/9999" />}
                            />
                          </div>
                        ) : (
                          <div
                            style={{
                              color:
                                item.isEligible === "Đủ điều kiện"
                                  ? "black"
                                  : "red",
                            }}
                          >
                            {" "}
                            {item.birthday}
                          </div>
                        )}
                      </td>
                      <td style={{ paddingLeft: "0", paddingRight: "0" }}>
                        {isEdit && indexDefaul === index ? (
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
                            // label="Giới tính"
                            hint={genderByText(item.gender)}
                            onChange={(e) => onChangeGender(e)}
                          />
                        ) : (
                          genderByText(item.gender)
                        )}
                      </td>
                      <td>
                        <div
                          style={{
                            color:
                              item.isEligible === "Đủ điều kiện"
                                ? "black"
                                : "red",
                          }}
                        >
                          {item.isEligible}
                        </div>
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {isEdit && indexDefaul === index ? (
                            <>
                              <MuiButton
                                variant="outlined"
                                // disabled={validate([name, gender, birthday])}
                                onClick={() => handleUpdate(index, item)}
                              >
                                <div style={{ fontWeight: "600" }}>Update</div>
                              </MuiButton>
                              <MuiButton onClick={() => handleDelete(index)}>
                                <img src={deleted} alt="not found"></img>
                              </MuiButton>
                            </>
                          ) : (
                            <>
                              <MuiButton onClick={() => handleEdit(index)}>
                                <img src={edit} alt="not found"></img>
                              </MuiButton>
                              <MuiButton onClick={() => handleDelete(index)}>
                                <img src={deleted} alt="not found"></img>
                              </MuiButton>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md={8} sm={8} xs={12}>
            <Stack
              direction="horizontal"
              className="box-upload justify-content-around"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href={TemplateImportDataGruop} download>
                  <img
                    src={upLoad}
                    alt="not found"
                    style={{ marginBottom: "16px" }}
                  ></img>
                </a>
                <a href={TemplateImportDataGruop} download>
                  <small> Tải file mẫu </small>
                </a>
              </div>
              <div className="text-content-upload">
                <span>Chọn file tải lên hoặc kéo thả để upload file </span>
                <br />
                <br />
                <small>Chỉ nhận file excel, dung lượng tối đa 10MB</small>
              </div>
              <input
                type="file"
                // accept="file_extension"
                name="uploadfile"
                id="listperson"
                hidden
                // onChange={(e) => handleFile(e)}
              />{" "}
              <label htmlFor="listperson" className="button-load-file">
                <label htmlFor="listperson" className="Chn-file">
                  Chọn file
                </label>
              </label>
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
        validate={validate([listPerson.length > 0, checkCondition() === true])}
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
