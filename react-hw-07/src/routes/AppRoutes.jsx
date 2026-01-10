import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Contacts from "../pages/Contacts"
import PaymentRules from "../pages/PaymentRules"
import Shop from "../pages/products/Shop";
import ProductDetail from "../pages/products/ProductDetail";
import Page404 from "../pages/Page404"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="rules" element={<PaymentRules />} />
                <Route path="products" element={<Shop />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="*" element={<Page404 />} />

            </Route>
        </Routes>
    );
}

export default AppRoutes;