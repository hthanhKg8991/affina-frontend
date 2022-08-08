import 'aos/dist/aos.css';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Assets/js/myFunction';
import './Assets/Styles/ClientStyle/styles.scss';
import LoginContainer from './Containers/Admin/Auth/LoginContainer';
// import './Assets/Styles/ClientStyle';
import AppRouter from './Routers/AppRouter';
import FooterAdmin from './Templates/Admin/Footer';
import Navbar from './Templates/Admin/Navbar';
import Sidebar from './Templates/Admin/Sidebar';
import Footer from './Templates/Client/Footer';
import Header from './Templates/Client/Header';

const Server = (props) => {
  import('./Assets/Styles/mainStyles.scss');
  return (
    (props.isToken && props.path !== '/login') ?
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              {props.children}
            </div>
            <FooterAdmin />
          </div>
        </div>
      </div>
      :
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <LoginContainer />
            </div>
          </div>
        </div>
      </div>
  )
}
const Client = (props) => {
  import('./Assets/Styles/ClientStyle/styles.scss');
  return (
    <div className="wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
const App = (props) => {
  const [location, setLocation] = useState('/');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const locationRoute = useLocation();
  var position = -1;
  const onRouteChange = useCallback(() => {
    const layoutAdmin = [' ', '/admin/login', '/dashboard', '/category/*', '/customer', '/products', '/products/create'];
    console.log(locationRoute);
    position = layoutAdmin.findIndex((element) => locationRoute.pathname.startsWith(element));
    console.log('locationRoute.pathname', locationRoute.pathname.startsWith('/login'), locationRoute.pathname);
    if (position > 0) {
      setLocation(layoutAdmin[position]);
      setIsAdmin(true)
      // setIsLogin(true)
      if (isLogin !== 0) {
        navigate('/login');
      } else {
        navigate(layoutAdmin[position]);
      }
    }
  })

  useEffect(() => {
    onRouteChange()
  }, [location]);


  return (
    (isAdmin) ?
      <Server isToken={isLogin}>
        <AppRouter isToken={isAdmin} path={location} />
      </Server>
      :
      <Client>
        <AppRouter />
      </Client>
  );
}

export default App;
