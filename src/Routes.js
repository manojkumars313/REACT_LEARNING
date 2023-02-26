import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import PageNotFound from "./Pages/PageNotFound";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProoductDetails";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
