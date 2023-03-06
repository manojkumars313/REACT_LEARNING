import { BrowserRouter, Routes, Route } from "react-router-dom";

import CatListing from "../Pages/CatListing";
import CatDetail from "../Pages/CatDetail";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatListing />} />
        <Route path="/cat-detials/:catid" element={<CatDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
