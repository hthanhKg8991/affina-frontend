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
import { uploadFile } from "../../../../Reducers/Upload/UploadFileRedux";

const BuyInsuranceGroupStep1Component = (props) => {
  const dispatch = useDispatch();
  const { dataStep } = useSelector((state) => state.insuranceGroup) || [];
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
    dispatch(
      uploadFile(file)
    )
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
      (person) => person.isEligible === "Kh??ng ????? ??i???u ki???n"
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
          <h4>Ki????m tra th??ng tin</h4>
          {listPerson.some((person)=>person.isEligible === "Kh??ng ????? ??i???u ki???n") ? (<><div
            style={{
              color:  "red", fontWeight: 500, fontSize: "20px", fontFamily: "Manrope", marginTop: "-20px", marginBottom: "5px"
            }}
          >
            Co?? {listPerson.filter((person)=>person.isEligible === "Kh??ng ????? ??i???u ki???n").length} kh??ch h??ng kh??ng ????? ??i???u ki???n tham gia (30 ng??y tu???i - 65
            tu???i)
          </div>
          <div  style={{
              color:  "red", fontWeight: 500, fontSize: "20px", fontFamily: "Manrope", marginBottom: "30px"
            }}>Vui l??ng nh????p ??u??ng nga??y sinh ho???c b??? kh??ch h??ng ra kh???i danh s??ch</div></>
          ) : ""}
          
        </>
      ) : (
        <h4>B???n ch??a c?? th??nh vi??n n??o tham gia b???o hi???m</h4>
      )}
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12} className="m-auto">
            <Table responsive="sm" className="text-left">
              <thead>
                <tr>
                  <th>T??n</th>
                  <th>N??m sinh</th>
                  <th>Gi???i t??nh</th>
                  <th>??i???u ki???n</th>
                  <th>Ghi Chu??</th>
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
                            // label="H??? v?? t??n"
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
                              <small className="text-danger">*</small>Ng??y sinh
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
                                item.isEligible === "????? ??i???u ki???n"
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
                                value: "N???",
                              },
                            ]}
                            readOnly={false}
                            viewValue="value"
                            value={gender.value}
                            defaultValue={gender.value}
                            // label="Gi???i t??nh"
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
                              item.isEligible === "????? ??i???u ki???n"
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
                  <small> Ta??i file m????u </small>
                </a>
              </div>
              <div className="text-content-upload">
                <span>Ch???n file t???i l??n ho???c k??o th??? ????? upload file </span>
                <br />
                <br />
                <small>Ch??? nh???n file excel, dung l?????ng t???i ??a 10MB</small>
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
                  Ch???n file
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
              <span style={{ color: "#095efb", fontSize: "16px" }}>Ho???c</span>
              <hr className="line-or-right" />
            </div>
            <div
              style={{
                marginBottom: "40px",
              }}
            >
              <h3>Nh???p th??ng tin ng?????i ???????c b???o hi???m</h3>
            </div>

            <Row>
              <Col md={4} sm={4} xs={4} className="text-left">
                <CommonInput
                  require={true}
                  label="H??? v?? t??n"
                  hint="Nh???p h??? v?? t??n"
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
                      value: "N???",
                    },
                  ]}
                  readOnly={false}
                  viewValue="value"
                  value={gender.value}
                  defaultValue={gender.value}
                  label="Gi???i t??nh"
                  hint="Ch???n Gi???i t??nh"
                  onChange={(e) => onChangeGender(e)}
                />
              </Col>
              <Col md={4} sm={4} xs={4} className="text-left">
                <div className="box-input box-input-active">
                  <FormLabel>
                    <small className="text-danger">*</small>Ng??y sinh
                  </FormLabel>
                  <DatePicker
                    className="form-control"
                    selected={birthday}
                    onChange={(date) => onChangeBirthday(date)}
                    placeholderText="Nh???p ng??y/th??ng/n??m sinh*"
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
              <span className="text-plus">+</span> Th??m ng?????i v??o nh??m
            </Button>
          </Col>
        </Row>
      </Container>
      <CommonButtonInsurance
        textButtonGoBack="QUAY V??? TRANG CH???"
        textButtonContinue="TI???P T???C"
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
