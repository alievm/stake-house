import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import CartPage from "./components/cart/CartPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import TrackOrders from "./pages/TrackOrders.jsx";
import SettingsTab from "./pages/admin/SettingsTab.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route path="cart-page" element={<CartPage />} />
              <Route path="info-page" element={<InfoPage />} />
              <Route path="track-orders" element={<TrackOrders />} />

              {/*Admin*/}
              <Route path="admin/settings" element={<SettingsTab />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
  )
}

export default App
