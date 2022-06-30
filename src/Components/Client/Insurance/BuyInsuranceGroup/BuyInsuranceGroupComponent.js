import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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

  const handleButtonContinue = () => {
    console.log("buyStep>>>", buyStep);
    if (standStep < 4 && buyStep === 3) {
      setBuyStep(3);
      setStandStep(standStep + 1);
    } else {
      setBuyStep(buyStep + 1);
      // navigate("/");
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
      default:
        // return (
        //   <BuyInsuranceGroupStep1Component
        //     handleButtonGoBack={handleButtonGoBack}
        //     handleButtonContinue={handleButtonContinue}
        //   />
        // );
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
