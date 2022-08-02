import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "../Common/Spinner";
// Admin
import LoginContainer from "../Containers/Admin/Auth/LoginContainer";
import CreateCategoryContainer from "../Containers/Admin/Categories/CreateCategoryContainer";
import GetAllCategoryContainer from "../Containers/Admin/Categories/GetAllCategoryContainer";
import GetTypeCategoryContainer from "../Containers/Admin/Categories/GetTypeCategoryContainer";
import CustomerContainer from "../Containers/Admin/CustomerContainer";
import DashboardContainer from "../Containers/Admin/DashboardContainer";
import CreateProductContainer from "../Containers/Admin/Products/CreateProductContainer";
import GetAllProductContainer from "../Containers/Admin/Products/GetAllProductContainer";
// Client
import AuthLoginContainer from "../Containers/Client/Authentication/LoginContainer";
import AboutContainer from "../Containers/Client/AboutContainer";
import BuyInsuranceContainer from "../Containers/Client/BuyInsuranceContainer";
import CategoryDetailContainer from "../Containers/Client/CategoryDetailContainer";
import HomeContainer from "../Containers/Client/HomeContainer";
import LandingPageContainer from "../Containers/Client/LandingPageContainer";
import PrivacyPolicyContainer from "../Containers/Client/PrivacyPolicyContainer";
import TermConditionsContainer from "../Containers/Client/TermConditionsContainer";
import NewsContainer from "../Containers/Client/NewsContainer";
import RecruitContainer from "../Containers/Client/RecruitContainer";
import ContactContainer from "../Containers/Client/ContactContainer";
import OftenQuestionsContainer from "../Containers/Client/OftenQuestionsContainer";
import ShoppingGuideContainer from "../Containers/Client/ShoppingGuideContainer";
import PaymentPolicyContainer from "../Containers/Client/PaymentPolicyContainer";
import RefundPolicyContainer from "../Containers/Client/RefundPolicyContainer";
import {
  ABOUT,
  BUY_NOW,
  LANDING_PAGE,
  LIST_SEND_REQUEST,
  LOGIN,
  PRIVACY_POLICY,
  SEND_REQUEST,
  STORY_AFFINA,
  TERM_CONDITIONS,
  NEWS,
  RECRUIT,
  CONTACT,
  OFTEN_QUESTIONS,
  SHOPPING_GUIDE,
  PAYMENT_POLICY,
  REFUND_POLICY,
} from "./RoutePath";
import SendRequestContainer from "../Containers/Client/SendRequestContainer";
import ListSentRequestComponent from "../Components/Client/LinkExample/ListSentRequestComponent";
import LayoutMail from "../Common/LayoutMail";
import BillContainer from "../Containers/Admin/BillContainer";

const AdminRouter = (props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {props.isToken === undefined ? (
          <>
            <Route index element={<HomeContainer />} />
            <Route path={LOGIN} element={<AuthLoginContainer />} />
            <Route path={LANDING_PAGE} element={<LandingPageContainer />} />
            <Route path={ABOUT} element={<AboutContainer />} />
            <Route path={PRIVACY_POLICY} element={<PrivacyPolicyContainer />} />
            <Route
              path={TERM_CONDITIONS}
              element={<TermConditionsContainer />}
            />
            <Route path={BUY_NOW} element={<BuyInsuranceContainer />} />
            <Route path={STORY_AFFINA} element={<CategoryDetailContainer />} />
            <Route path={SEND_REQUEST} element={<SendRequestContainer />} />
            <Route
              path={LIST_SEND_REQUEST}
              element={<ListSentRequestComponent />}
            />
            <Route path={NEWS} element={<NewsContainer />} />
            <Route path={RECRUIT} element={<RecruitContainer />} />
            <Route path={CONTACT} element={<ContactContainer />} />
            <Route path={OFTEN_QUESTIONS} element={<OftenQuestionsContainer />} />
            <Route path={SHOPPING_GUIDE} element={<ShoppingGuideContainer />} />
            <Route path={PAYMENT_POLICY} element={<PaymentPolicyContainer />} />
            <Route path={REFUND_POLICY} element={<RefundPolicyContainer />} />
            <Route path="demo" element={<LayoutMail />} />
          </>
        ) : (
          <>
            <Route path="/admin/login" element={<LoginContainer />} />
            <Route path="/dashboard" element={<DashboardContainer />} />
            <Route path="/category" element={<GetAllCategoryContainer />} />
            <Route
              path="/category/:type"
              element={<GetTypeCategoryContainer />}
            />
            <Route
              path="/category/create"
              element={<CreateCategoryContainer />}
            />
            <Route
              path="/category/edit/:id"
              element={<CreateCategoryContainer />}
            />
            <Route path="/customer" element={<CustomerContainer />} />
            <Route path="/bill" element={<BillContainer />} />
            <Route path="/products" element={<GetAllProductContainer />} />
            <Route
              path="/products/create"
              element={<CreateProductContainer />}
            />
          </>
        )}
        {/* <Route path="*" element={<Navigate to={(props.isToken < 3) ? "/" : '/login'} replace />} /> */}
      </Routes>
    </Suspense>
  );
};
export default AdminRouter;