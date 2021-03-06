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
            <h4>T???o h??? s?? b???o hi???m th??nh c??ng!</h4>
            <p>
              Qu?? kh??ch vui l??ng thanh to??n ????? k??ch ho???t th???i gian hi???u l???c b???o
              hi???m s???m nh???t.
            </p>
            <h2 className="paid-amount text-success">
              <strong>
                {/* {formatPrepaidAmount(Math.ceil(step2.paidAmount))}VN??{" "} */}
              </strong>
            </h2>
            <Stack
              direction="horizontal"
              gap={2}
              className="payment-content position-relative align-items-start"
            >
              <div className="qr-payment">
                <h5>Qu???t m?? QR ????? thanh to??n</h5>
                <div className="cut-border">
                  <div className="content-conner"></div>
                </div>
              </div>
              <div className="wrapper-line">
                <div className="vertical-line">
                  <span className="word">Ho???c</span>
                </div>
              </div>
              <div className="payment-info">
                <h5>Th??ng tin chuy???n kho???n</h5>
                <div className="info-transfer">
                  <p>
                    T??n Ng??n h??ng: <strong>Vietcombank</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() => handleCopyClipBoard("Vietcombank")}
                    ></i>
                  </p>
                  <p>
                    T??n t??i kho???n: <strong>CONG TY TNHH AFFINA VIET NAM</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() =>
                      //   handleCopyClipBoard("CONG TY TNHH AFFINA VIET NAM")
                      // }
                    ></i>
                  </p>
                  <p>
                    S??? t??i kho???n: <strong>1026967259</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() => handleCopyClipBoard("1026967259")}
                    ></i>
                  </p>
                  <p>
                    Chi nh??nh: <strong>B??nh T??y</strong>
                    <i
                      className="cursor-pointer mdi mdi-content-copy ms-2"
                      // onClick={() => handleCopyClipBoard("B??nh T??y")}
                    ></i>
                  </p>
                  <p>
                    N???i dung chuy???n Kho???n::{" "}
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
            <h4>T???o h??? s?? b???o hi???m th??nh c??ng!</h4>
            <p>Th??ng tin h???p ?????ng ???? ???????c g???i v??? email c???a qu?? kh??ch.</p>
            <p>
              Qu?? kh??ch vui l??ng thanh to??n ????? k??ch ho???t hi???u l???c b???o hi???m trong
              th???i gian s???m nh???t theo th??ng tin sau:{" "}
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
            <h4>THANH TO??N Th???t b???i!</h4>
            <p>
              R???t ti???c giao d???ch c???a b???n kh??ng th??nh c??ng! Vui l??ng th???c hi???n
              l???i giao d???ch
            </p>
          </div>
        );
      default:
        // textButtonGoBack = "Quay v??? trang ch???";
        return <BuyInsuranceGroupStep1Component />;
    }
  };
  return (
    <div>
      <ProgressBarStep
        current={buyStep}
        step={[
          "Th??ng tin ng?????i ???????c b???o hi???m",
          "Ch???n nh?? b???o hi???m",
          "Ho??n t???t th??ng tin ????n b???o hi???m",
          "Thanh to??n",
        ]}
      />
      {_renderStep()}
    </div>
  );
};

export default BuyInsuranceGroupComponent;
