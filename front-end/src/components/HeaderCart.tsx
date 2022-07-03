import Image from "next/image";
import { useAppSelector } from "../redux/AppHooks";
import cartLogo from "../../public/cartLogo.png";

const HeaderCart = () => {
  const cart = useAppSelector((store) => store.ecommerce.cart);

  const getTotalItems = () => {
    if (cart.length === 0) return cart.length;
    return cart.reduce((total, p) => total + p.quantity,0)
  }

  return (
    <div className="cart">
      <Image src={cartLogo} alt="wine" width="55px" height="55px" />
      <span>{getTotalItems()}</span>
  </div>
  )
}

export default HeaderCart;
