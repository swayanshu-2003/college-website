import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./sections/header/Header";
import Navbar from "./sections/header/Navbar";
import Footer from "./sections/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import QuickLinks from "./sections/quickLinks/QuickLinks";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    AOS.init({ offset: 0, duration: 1500 });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        {routes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
      <QuickLinks />
      <Footer />
    </Router>
  );
}

export default App;
