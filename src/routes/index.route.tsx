import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SubmitOrder } from "../pages/SubmitOrder";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/fazer-pedido" element={<SubmitOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
