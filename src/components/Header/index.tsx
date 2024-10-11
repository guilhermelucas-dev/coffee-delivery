import { Address, Cart, CartAndAdreessContent, HeaderContainer } from "./styles";


import logoCoffeDelivery from  "./../../assets/coffe-delivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
   <HeaderContainer>
     <NavLink to="/"><img src={logoCoffeDelivery} /></NavLink>
     <CartAndAdreessContent >
      <Address>
        <MapPin size={22} weight="fill" />
        <span>Aimorés, MG</span>
      </Address>
      <Cart to="/checkout">
        <ShoppingCart size={22} weight="fill" />
        {cart.length > 0 ? <span>{cart.length}</span> : null}
      </Cart>
     </CartAndAdreessContent>
   </HeaderContainer>
  );  
}