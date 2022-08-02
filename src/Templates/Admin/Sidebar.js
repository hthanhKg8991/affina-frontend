import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const [basicUiMenuOpen, setBasicUiMenuOpen] = useState('');
  const [formElementsMenuOpen, setFormElementsMenuOpen] = useState('');
  const [tablesMenuOpen, setTablesMenuOpen] = useState('');
  const [iconsMenuOpen, setIconsMenuOpen] = useState('');
  const [chartsMenuOpen, setChartsMenuOpen] = useState('');
  const [userPagesMenuOpen, setUserPagesMenuOpen] = useState('');
  const [errorPagesMenuOpen, setErrorPagesMenuOpen] = useState('');
  const [generalPagesMenuOpen, setGeneralPagesMenuOpen] = useState('');


  const toggleMenuState = (menuState) => {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (props.location !== prevProps.location) {
  //     onRouteChanged();
  //   }
  // }

  // const onRouteChanged = () => {
  //   document.querySelector('#sidebar').classList.remove('active');
  //   Object.keys(this.state).forEach(i => {
  //     this.setState({ [i]: false });
  //   });

  //   const dropdownPaths = [
  //     { path: '/apps', state: 'appsMenuOpen' },
  //     { path: '/basic-ui', state: 'basicUiMenuOpen' },
  //     { path: '/advanced-ui', state: 'advancedUiMenuOpen' },
  //     { path: '/form-elements', state: 'formElementsMenuOpen' },
  //     { path: '/tables', state: 'tablesMenuOpen' },
  //     { path: '/maps', state: 'mapsMenuOpen' },
  //     { path: '/icons', state: 'iconsMenuOpen' },
  //     { path: '/charts', state: 'chartsMenuOpen' },
  //     { path: '/user-pages', state: 'userPagesMenuOpen' },
  //     { path: '/error-pages', state: 'errorPagesMenuOpen' },
  //     { path: '/general-pages', state: 'generalPagesMenuOpen' },
  //     { path: '/ecommerce', state: 'ecommercePagesMenuOpen' },
  //   ];

  //   dropdownPaths.forEach((obj => {
  //     if (isPathActive(obj.path)) {
  //       this.setState({ [obj.state]: true })
  //     }
  //   }));

  // }

  const isPathActive = (path) => {
    return window.location.pathname.startsWith(path);
  }

  useEffect(() => {
    // this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }, [])

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link" onClick={evt => evt.preventDefault()}>
            <div className="nav-profile-image">
              <img src={require("../../Assets/Images/faces/face1.jpg")} alt="profile" />
              <span className="login-status online"></span> {/* change to offline or busy as needed */}
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li className={isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        {/* <li className={isPathActive('/category') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/category">
            <span className="menu-title">Categories</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li> */}
        <li className={isPathActive('/sale') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/sale">
            <span className="menu-title">Nhân viên</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/bill') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/bill">
            <span className="menu-title">Hóa đơn</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        {/* <li className={isPathActive('/products') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/products">
            <span className="menu-title">Products</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item'}>
          <div className={basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('basicUiMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Basic UI Elements</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </div>
          <Collapse in={basicUiMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'} to="/basic-ui/buttons">Buttons</Link></li>
              <li className="nav-item"> <Link className={isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link'} to="/basic-ui/dropdowns">Dropdowns</Link></li>
              <li className="nav-item"> <Link className={isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link'} to="/basic-ui/typography">Typography</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/form-elements') ? 'nav-item active' : 'nav-item'}>
          <div className={formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('formElementsMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Form Elements</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </div>
          <Collapse in={formElementsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link'} to="/form-elements/basic-elements">Basic Elements</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/tables') ? 'nav-item active' : 'nav-item'}>
          <div className={tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('tablesMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Tables</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-table-large menu-icon"></i>
          </div>
          <Collapse in={tablesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link'} to="/tables/basic-table">Basic Table</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/icons') ? 'nav-item active' : 'nav-item'}>
          <div className={iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('iconsMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Icons</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-contacts menu-icon"></i>
          </div>
          <Collapse in={iconsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link'} to="/icons/mdi">Material</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/charts') ? 'nav-item active' : 'nav-item'}>
          <div className={chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('chartsMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Charts</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-chart-bar menu-icon"></i>
          </div>
          <Collapse in={chartsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link'} to="/charts/chart-js">Chart Js</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/user-pages') ? 'nav-item active' : 'nav-item'}>
          <div className={userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('userPagesMenuOpen')} data-toggle="collapse">
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-lock menu-icon"></i>
          </div>
          <Collapse in={userPagesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link'} to="/user-pages/login-1">Login</Link></li>
              <li className="nav-item"> <Link className={isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link'} to="/user-pages/register-1">Register</Link></li>
              <li className="nav-item"> <Link className={isPathActive('/user-pages/lockscreen') ? 'nav-link active' : 'nav-link'} to="/user-pages/lockscreen">Lockscreen</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/error-pages') ? 'nav-item active' : 'nav-item'}>
          <div className={errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('errorPagesMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Error Pages</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-security menu-icon"></i>
          </div>
          <Collapse in={errorPagesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link'} to="/error-pages/error-404">404</Link></li>
              <li className="nav-item"> <Link className={isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link'} to="/error-pages/error-500">500</Link></li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/general-pages') ? 'nav-item active' : 'nav-item'}>
          <div className={generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('generalPagesMenuOpen')} data-toggle="collapse">
            <span className="menu-title">General Pages</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-medical-bag menu-icon"></i>
          </div>
          <Collapse in={generalPagesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link'} to="/general-pages/blank-page">Blank Page</Link></li>
            </ul>
          </Collapse>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
            <span className="menu-title">Documentation</span>
            <i className="mdi mdi-file-document-box menu-icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;