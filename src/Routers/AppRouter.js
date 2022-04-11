import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
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
import AboutContainer from "../Containers/Client/AboutContainer";
import BuyInsuranceContainer from "../Containers/Client/BuyInsuranceContainer";
import CategoryDetailContainer from "../Containers/Client/CategoryDetailContainer";
import HomeContainer from "../Containers/Client/HomeContainer";
import LandingPageContainer from "../Containers/Client/LandingPageContainer";
import PrivacyPolicyContainer from "../Containers/Client/PrivacyPolicyContainer";
import TermConditionsContainer from "../Containers/Client/TermConditionsContainer";
import { ABOUT, BUY_NOW, LANDING_PAGE, PRIVACY_POLICY, STORY_AFFINA, TERM_CONDITIONS } from "./RoutePath";

const AdminRouter = (props) => {

    return (
        <Suspense fallback={<Spinner />}>
                <Routes>
                    {
                        (props.isToken === undefined) ?
                            <>
                                <Route index element={<HomeContainer />} />
                                <Route path={LANDING_PAGE} element={<LandingPageContainer />} />
                                <Route path={ABOUT} element={<AboutContainer />} />
                                <Route path={PRIVACY_POLICY} element={<PrivacyPolicyContainer />} />
                                <Route path={TERM_CONDITIONS} element={<TermConditionsContainer />} />
                                <Route path={BUY_NOW} element={<BuyInsuranceContainer />} />
                                <Route path={STORY_AFFINA} element={<CategoryDetailContainer />} />
                            </>
                            :
                            <>
                                <Route path="/login" element={<LoginContainer />} />
                                <Route path="/dashboard" element={<DashboardContainer />} />
                                <Route path="/category" element={<GetAllCategoryContainer />} />
                                <Route path="/category/:type" element={<GetTypeCategoryContainer />} />
                                <Route path="/category/create" element={<CreateCategoryContainer />} />
                                <Route path="/category/edit/:id" element={<CreateCategoryContainer />} />
                                <Route path="/customer" element={<CustomerContainer />} />
                                <Route path="/products" element={<GetAllProductContainer />} />
                                <Route path="/products/create" element={<CreateProductContainer />} />
                            </>
                    }
                    {/* <Route path="*" element={<Navigate to={(props.isToken < 3) ? "/" : '/login'} replace />} /> */}
                </Routes>
        </Suspense>
    )
}
export default AdminRouter