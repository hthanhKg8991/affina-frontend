import React, { useEffect, useState } from "react";
import { Button, Image, Nav, Navbar, Stack, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import accessStyle from "../../../Assets";
import {
  checkDays,
  formatPrepaidAmount,
  isStringNullOrEmpty,
  resetStore,
  vnConvert,
} from "../../../Common/Helper";
import configDefault from "../../../Config/app";
import {
  resetStateInsurance,
  selectPackage,
} from "../../../Reducers/Insurance/PackagesRedux";
import { resetState } from "../../../Reducers/Insurance/StepRedux";
import { BUY_NOW } from "../../../Routers/RoutePath";
import ProgressBarStep from "../../Common/ProgressBarStep";
import BuyInsuranceGroupComponent from "./BuyInsuranceGroup/BuyInsuranceGroupComponent";
import BuyInsurancePersonalStep1Component from "./BuyInsurancePersonalStep1Component";
import BuyInsurancePersonalStep2Component from "./BuyInsurancePersonalStep2Component";
import BuyInsurancePersonalStep3Component from "./BuyInsurancePersonalStep3Component";
import BuyInsurancePersonalStep4Component from "./BuyInsurancePersonalStep4Component";
import BuyInsuranceResponse from "./BuyInsuranceResponse";
// const configTab = {
//     single: 'tab-single',
//     group: 'tab-group',
// }
const BuyInsurancePersonalComponent = () => {
  const dispatch = useDispatch();

  const {
    isShowPaymentSuccess,
    orderData = {},
    isPackage,
  } = useSelector((state) => state.insurancePackagesRedux) || [];
  const { paymentData = {} } = useSelector((state) => state.PaymentRedux) || [];
  const { dataStep } = useSelector((state) => state.insuranceRedux) || [];
  const { step1, step2, step3 } = dataStep;
  const { data = {} } = orderData;

  const params = useParams();
  const navigate = useNavigate();
  const locationRoute = useLocation();
  const paramsSearch = new URLSearchParams(locationRoute.search);
  const [statusPayment, setStatusPayment] = useState(
    paramsSearch.get("status")
  );
  const [transaction, setTransaction] = useState(paramsSearch.get("session"));
  const [orderNo, setOrderNo] = useState(paramsSearch.get("order_no"));
  const [birthday, setBirthday] = useState(new Date());
  const [buyInsuranceStep, setBuyInsuranceStep] = useState(
    parseInt(paramsSearch.get("step")) || 1
  );
  const [standStep, setStandStep] = useState(
    parseInt(paramsSearch.get("standStep")) || 3
  );
  const [isShowPayment, setIsShowPayment] = useState(isShowPaymentSuccess);
  const [textCopy, setTextCopy] = useState("");
  const [tab, setTab] = useState(isPackage);

  const handleButtonContinue = () => {
    if (buyInsuranceStep < 4) {
      if (standStep < 4 && buyInsuranceStep === 3) {
        setBuyInsuranceStep(3);
        setStandStep(standStep + 1);
      } else {
        // setStandStep(standStep + 1)
        setBuyInsuranceStep(buyInsuranceStep + 1);
      }
    } else {
      setBuyInsuranceStep(5);
    }
  };
  const handleButtonGoBack = (step) => {
    if (buyInsuranceStep <= 1) {
      navigate("/");
    } else {
      if (!isStringNullOrEmpty(step)) {
        setBuyInsuranceStep(step);
        setStandStep(3);
      } else {
        if (standStep <= 4 && standStep > 3 && buyInsuranceStep === 3) {
          setBuyInsuranceStep(3);
          setStandStep(standStep - 1);
        } else {
          setBuyInsuranceStep(buyInsuranceStep - 1);
        }
      }
    }
  };

  const goBackHome = () => {
    navigate("/");
  };
  const paymentAgain = () => {
    setBuyInsuranceStep(1);
  };

  const handleCopyClipBoard = (valueCopy) => {
    console.log("handleCopyClipBoard:::", valueCopy);
    window.navigator.clipboard.writeText(valueCopy);
    setTextCopy(valueCopy);
  };

  let textButtonGoBack = "QUAY LẠI";
  const renderStep = () => {
    // var templateStep =
    switch (buyInsuranceStep) {
      case 1:
        textButtonGoBack = "Quay về trang chủ";
        return (
          <BuyInsurancePersonalStep1Component
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case 2:
        return (
          <BuyInsurancePersonalStep2Component
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case 3:
        return (
          <BuyInsurancePersonalStep3Component
            step={standStep}
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case 4:
        return (
          <BuyInsurancePersonalStep4Component
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case configDefault.MY_TRANSFER_QR:
        return (
          <div className="response-data response-success bg-white">
            <Image
              src={accessStyle.images.response.success}
              srcSet={`
                            ${accessStyle.images.response.success2x} 2x, 
                            ${accessStyle.images.response.success3x} 3x
                        `}
              className="width-auto"
              alt="Logo Affina"
              width={"auto"}
              height={"auto"}
            />
            <h4>Tạo hồ sơ bảo hiểm thành công!</h4>
            <p>
              Quí khách vui lòng thanh toán để kích hoạt thời gian hiệu lực bảo
              hiểm sớm nhất.
            </p>
            <h2 className="paid-amount text-success">
              <strong>
                {formatPrepaidAmount(Math.ceil(step2.paidAmount))}VNĐ{" "}
              </strong>
            </h2>
            <Stack
              direction="horizontal"
              gap={2}
              className="payment-content position-relative align-items-start"
            >
              <div className="qr-payment">
                <h5>Quẹt mã QR để thanh toán</h5>
                <div className="cut-border">
                  <div className="content-conner"></div>
                </div>
              </div>
              <div className="wrapper-line">
                <div className="vertical-line">
                  <span className="word">Hoặc</span>
                </div>
              </div>
              <div className="payment-info">
                <h5>Thông tin chuyển khoản</h5>
                <div className="info-transfer">
                  <p>
                    Tên Ngân hàng: <strong>Vietcombank</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      onClick={() => handleCopyClipBoard("Vietcombank")}
                    ></i>
                  </p>
                  <p>
                    Tên tài khoản: <strong>CONG TY TNHH AFFINA VIET NAM</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      onClick={() =>
                        handleCopyClipBoard("CONG TY TNHH AFFINA VIET NAM")
                      }
                    ></i>
                  </p>
                  <p>
                    Số tài khoản: <strong>1026967259</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      onClick={() => handleCopyClipBoard("1026967259")}
                    ></i>
                  </p>
                  <p>
                    Chi nhánh: <strong>Bình Tây</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      onClick={() => handleCopyClipBoard("Bình Tây")}
                    ></i>
                  </p>
                  <p>
                    Nội dung chuyển Khoản::{" "}
                    <strong>
                      {vnConvert(step3.name).split(" ").join("")} {step3.phone}{" "}
                      {orderData.data && orderData.data.order_code}
                    </strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      onClick={() =>
                        handleCopyClipBoard(
                          vnConvert(step3.name).split(" ").join("") +
                            " " +
                            step3.phone +
                            " " +
                            (orderData.data && orderData.data.order_code)
                        )
                      }
                    ></i>
                  </p>
                </div>
              </div>
            </Stack>
          </div>
        );
      case configDefault.BANK_TRANSFER_SUCCESS:
        return (
          <div className="response-data response-success bg-white">
            <Image
              src={accessStyle.images.response.success}
              srcSet={`
                            ${accessStyle.images.response.success2x} 2x, 
                            ${accessStyle.images.response.success3x} 3x
                        `}
              alt="Logo Affina"
              width={"auto"}
              height={"auto"}
            />
            <h4>Tạo hồ sơ bảo hiểm thành công!</h4>
            <p>Thông tin hợp đồng đã được gửi về email của quý khách.</p>
            <p>
              Quý khách vui lòng thanh toán để kích hoạt hiệu lực bảo hiểm trong
              thời gian sớm nhất theo thông tin sau:{" "}
            </p>
          </div>
        );
      case configDefault.FAILED:
        return (
          <div className="response-data response-fail bg-white">
            <Image
              src={accessStyle.images.response.fail}
              srcSet={`
                                ${accessStyle.images.response.fail2x} 2x, 
                                ${accessStyle.images.response.fail3x} 3x
                            `}
              alt="Logo Affina"
              width={"auto"}
              height={"auto"}
            />
            <h4>THANH TOÁN Thất bại!</h4>
            <p>
              Rất tiếc giao dịch của bạn không thành công! Vui lòng thực hiện
              lại giao dịch
            </p>
          </div>
        );
      default:
        textButtonGoBack = "Quay về trang chủ";
        return <BuyInsurancePersonalStep1Component />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (checkDays(step3.createOrder)) {
      dispatch(resetStateInsurance());
      dispatch(resetState());
      navigate(BUY_NOW);
    }
  }, [buyInsuranceStep, standStep]);

  const renderLayoutResponse = (status) => {
    console.log("status>>", status);
    switch (status) {
      case "1":
      case 1:
        return (
          <BuyInsuranceResponse
            statusPayment={status || statusPayment}
            transaction={transaction}
            orderNo={orderNo}
            downloadFile={orderNo}
          />
        );
      case "0":
      case 0:
        return (
          <div className="response-data response-success bg-white">
            <Image
              src={accessStyle.images.response.success}
              srcSet={`
                            ${accessStyle.images.response.success2x} 2x, 
                            ${accessStyle.images.response.success3x} 3x
                        `}
              alt="Logo Affina"
              width={"auto"}
              height={"auto"}
            />
            <h5>ĐÃ GỬI LINK THÀNH CÔNG</h5>
            <p>Hệ thống đã gửi link thành công đến khách hàng của bạn.</p>
            <p>
              Link:{" "}
              <a
                href={
                  "https://affina.com.vn/tham-gia-bao-hiem-BOne?step=3&standStep=4&contract_num=" +
                  data.order_code
                }
                target="_blank"
              >
                https://affina.com.vn/tham-gia-bao-hiem-BOne?step=3&standStep=4&contract_num=
                {orderData.data && orderData.data.order_code}
              </a>{" "}
            </p>
            {renderButton("1")}
          </div>
        );

      default:
        return (
          <>
            <ProgressBarStep
              current={buyInsuranceStep}
              step={[
                "Thông tin người được bảo hiểm",
                "Chọn nhà bảo hiểm",
                "Hoàn tất thông tin đơn bảo hiểm",
                "Thanh toán",
              ]}
            />
            {renderStep()}
          </>
        );
    }
  };

  const handleFinish = () => {
    setBuyInsuranceStep(1);
    dispatch(resetStateInsurance());
    dispatch(resetState());
    // resetStore();
    // window.location.reload();
    navigate(BUY_NOW);
  };

  const renderButton = (status) => {
    console.log("renderButton>>>", status);
    switch (status) {
      case "1":
      case configDefault.BANK_TRANSFER_SUCCESS:
      case configDefault.MY_TRANSFER_QR:
        return (
          <Navbar className="wrap-button">
            <Navbar.Collapse className="justify-content-center">
              <Nav.Item>
                <Button
                  variant="outline-primary btn-outline-blue btn-md text-uppercase"
                  onClick={goBackHome}
                >
                  {"Quay về trang chủ"}
                </Button>
              </Nav.Item>
              <Nav.Item className="sm-space-horizontal"></Nav.Item>
              <Nav.Item>
                <Button
                  variant={"blue btn-md text-uppercase"}
                  className="active"
                  // disabled
                  // onClick={handleButtonContinue}>
                  onClick={handleFinish}
                >
                  HOÀN TẤT
                </Button>
              </Nav.Item>
            </Navbar.Collapse>
          </Navbar>
        );
      case configDefault.FAILED:
        return (
          <Navbar className="wrap-button">
            <Navbar.Collapse className="justify-content-center">
              <Nav.Item>
                <Button
                  variant="outline-primary btn-outline-blue btn-md text-uppercase"
                  onClick={goBackHome}
                >
                  {"Quay về trang chủ"}
                </Button>
              </Nav.Item>
              <Nav.Item className="sm-space-horizontal"></Nav.Item>
              <Nav.Item>
                <Button
                  variant={"blue btn-md text-uppercase"}
                  className="active"
                  // disabled
                  onClick={paymentAgain}
                >
                  THANH TOÁN LẠI
                </Button>
              </Nav.Item>
            </Navbar.Collapse>
          </Navbar>
        );
      default:
        return null;
    }
  };

  const handleTab = (value) => {
    console.log("value>>>", value);
    setTab(value);
    dispatch(selectPackage(value));
  };
  return (
    <div className="insurance-content">
      <ul className="justify-content-center nav nav-tabs" role="tablist">
        <li
          className={
            tab === configDefault.configTab.single
              ? "nav-item active"
              : "nav-item"
          }
          role="presentation"
          onClick={() => handleTab(configDefault.configTab.single)}
        >
          <a
            type="button"
            id="tab-single"
            role="tab"
            data-rr-ui-event-key="single"
            aria-controls="tab-single"
            aria-selected="true"
            className="nav-link active"
          >
            Tham gia gói cá nhân
          </a>
        </li>
        <li
          className={
            tab === configDefault.configTab.group
              ? "nav-item active"
              : "nav-item"
          }
          role="presentation"
          onClick={() => handleTab(configDefault.configTab.group)}
        >
          <a
            type="button"
            id="tab-group"
            role="tab"
            data-rr-ui-event-key="group"
            aria-controls="tab-group"
            tabIndex="-1"
            className="nav-link"
          >
            Tham gia theo nhóm
          </a>
        </li>
      </ul>
      <div className="tab-content">
        {tab === configDefault.configTab.single && (
          <div role="tabpanel" id="tab-single" aria-labelledby="tab-single">
            {!isStringNullOrEmpty(statusPayment)
              ? renderLayoutResponse(statusPayment)
              : renderLayoutResponse(paymentData.status)}
            {/* THANH TOÁN THÀNH CÔNG! */}
            {!isStringNullOrEmpty(statusPayment)
              ? renderButton(statusPayment)
              : renderButton(buyInsuranceStep)}
          </div>
        )}
        {tab === configDefault.configTab.group && (
          <div role="tabpanel" id="tab-group" aria-labelledby="tab-group">
            {/* <h3 className='text-muted'>Chức năng sẽ sớm ra mắt</h3> */}
            <BuyInsuranceGroupComponent />
          </div>
        )}
      </div>
      {/* <Tabs defaultActiveKey="single" id="uncontrolled-tab-example" className='justify-content-center'>
                <Tab eventKey="single" title="Tham gia gói cá nhân" > */}
      {
        // (!isStringNullOrEmpty(statusPayment)) ?
        //     renderLayoutResponse(statusPayment)
        //     :
        //     renderLayoutResponse(paymentData.status)
      }
      {/* THANH TOÁN THÀNH CÔNG! */}
      {
        // (!isStringNullOrEmpty(statusPayment)) ?
        //     renderButton(statusPayment)
        //     :
        //     renderButton(buyInsuranceStep)
      }
      {/* </Tab>
                <Tab eventKey="group" title="Tham gia theo nhóm"> */}
      {/* <BuyInsuranceGroupComponent /> */}
      {/* </Tab> */}
      {/* </Tabs> */}
    </div>
  );
};

export default BuyInsurancePersonalComponent;
