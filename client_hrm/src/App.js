import "./App.css";
import Home from "./components/Home";
import {BrowserRouter,Route,Routes}from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ManagePage from "./page/ManagePage/ManagePage";
import HomePages from "./page/HomePage/HomePage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import LoginPage from "./page/LoginPage/LoginPage";
import SalariePage from "./page/SalariePage/SalariePage";
import { GlobalStyle } from "./components/Globalstyle/Globalstyle";
import { adminRouter } from "./routers/adminRouter";
import Layout from "./HOC/layout/Layout";
import PositionsPage from "./page/PositionsPage/PositionsPage";
import DepartmentsPage from "./page/DepartmentsPage/DepartmentsPage";
function App() {
  let renderRoutes = () => {
    return adminRouter.map(({path, Component}) => {
      return (
        <Route
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      );
    });
  };
  return (
    
    // <div className="App">
    //   <Home />
    // </div>
    <div>
        {/* <Login /> */}
        <GlobalStyle></GlobalStyle>
      <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePages />} />
          
          {/* <Route path="/usermanagement" element={<ManagePage />} /> */}

          {renderRoutes()}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
