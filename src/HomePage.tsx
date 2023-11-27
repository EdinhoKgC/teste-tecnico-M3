import AsideMain from "./components/AsideMain/AsideMain";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { CartProvider } from "./contexts/cart";

function HomePage() {
  return (
    <CartProvider>
      <Header />
      <AsideMain />
      <Footer />
    </CartProvider>
  );
}
export default HomePage;
