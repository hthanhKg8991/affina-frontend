import React, { useState } from "react";
import { Image, Stack } from "react-bootstrap";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import configDefault from "../../../../Config/app";
import ProgressBarStep from "../../../Common/ProgressBarStep";
import BuyInsuranceGroupStep1Component from "./BuyInsuranceGroupStep1Component";
import BuyInsuranceGroupStep2Component from "./BuyInsuranceGroupStep2Component";
import BuyInsuranceGroupStep3Component from "./BuyInsuranceGroupStep3Component";
import BuyInsuranceGroupStep4Component from "./BuyInsuranceGroupStep4Component";

const BuyInsuranceGroupComponent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const locationRoute = useLocation();
  const paramsSearch = new URLSearchParams(locationRoute.search);
  const [buyStep, setBuyStep] = useState(1);
  const [standStep, setStandStep] = useState(parseInt(paramsSearch.get("standStep")) || 3);

 const handleButtonGoBack = (step) => {
    if (buyStep <= 1) {
      navigate("/");
    } else if (standStep ===4 && buyStep === 3) {
      setStandStep(standStep - 1);
    } else {setBuyStep(buyStep-1);}
  };

  const handleButtonContinue = (step) => {
    console.log("buyStep>>>", buyStep);
    if (buyStep < 4) {
      if (standStep < 4 && buyStep === 3) {
        setBuyStep(3);
        setStandStep(standStep + 1);
      } else {
        setBuyStep(buyStep + 1);
        // navigate("/");
      }
    } else {
      setBuyStep(step);
    }
  };

  const _renderStep = () => {
    switch (buyStep) {
      case 1:
        return (
          <BuyInsuranceGroupStep1Component
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case 2:
        return (
          <BuyInsuranceGroupStep2Component
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case 3:
        return (
          <BuyInsuranceGroupStep3Component
            step={standStep}
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case 4:
        return (
          <BuyInsuranceGroupStep4Component
            handleButtonGoBack={handleButtonGoBack}
            handleButtonContinue={handleButtonContinue}
          />
        );
      case configDefault.MY_TRANSFER_QR:
        // return (
        //   <BuyInsuranceGroupStep1Component
        //     handleButtonGoBack={handleButtonGoBack}
        //     handleButtonContinue={handleButtonContinue}
        //   />
        // );
        return (
          <div className="response-data response-success bg-white">
            <Image
              // src={accessStyle.images.response.success}
              // srcSet={`
              //               ${accessStyle.images.response.success2x} 2x,
              //               ${accessStyle.images.response.success3x} 3x
              //           `}
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
                {/* {formatPrepaidAmount(Math.ceil(step2.paidAmount))}VNĐ{" "} */}
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
                      // onClick={() => handleCopyClipBoard("Vietcombank")}
                    ></i>
                  </p>
                  <p>
                    Tên tài khoản: <strong>CONG TY TNHH AFFINA VIET NAM</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() =>
                      //   handleCopyClipBoard("CONG TY TNHH AFFINA VIET NAM")
                      // }
                    ></i>
                  </p>
                  <p>
                    Số tài khoản: <strong>1026967259</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() => handleCopyClipBoard("1026967259")}
                    ></i>
                  </p>
                  <p>
                    Chi nhánh: <strong>Bình Tây</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() => handleCopyClipBoard("Bình Tây")}
                    ></i>
                  </p>
                  <p>
                    Nội dung chuyển Khoản::{" "}
                    <strong>
                      {/* {vnConvert(step3.name).split(" ").join("")} {step3.phone}{" "}
                      {orderData.data && orderData.data.order_code} */}
                    </strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() =>
                      //   handleCopyClipBoard(
                      //     vnConvert(step3.name).split(" ").join("") +
                      //       " " +
                      //       step3.phone +
                      //       " " +
                      //       (orderData.data && orderData.data.order_code)
                      //   )
                      // }
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
              // src={accessStyle.images.response.success}
              // srcSet={`
              //               ${accessStyle.images.response.success2x} 2x, 
              //               ${accessStyle.images.response.success3x} 3x
              //           `}
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
              // src={accessStyle.images.response.fail}
              // srcSet={`
              //                   ${accessStyle.images.response.fail2x} 2x, 
              //                   ${accessStyle.images.response.fail3x} 3x
              //               `}
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
        // textButtonGoBack = "Quay về trang chủ";
        return <BuyInsuranceGroupStep1Component />;
    }
  };
  return (
    <div>
      <ProgressBarStep
        current={buyStep}
        step={[
          "Thông tin người được bảo hiểm",
          "Chọn nhà bảo hiểm",
          "Hoàn tất thông tin đơn bảo hiểm",
          "Thanh toán",
        ]}
      />
      {_renderStep()}
    </div>
  );
};

export default BuyInsuranceGroupComponent;
