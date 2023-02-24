import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elements={<HTMLOutputElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;
