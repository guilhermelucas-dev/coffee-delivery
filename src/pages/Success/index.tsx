import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { SuccessContent } from "./styles";

import ilustration from "../../assets/Illustration.svg";
import { Info } from "../../components/Info";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";

export function Success() {
  const theme = useTheme();
  const { orders } = useCart();
  const { orderId } = useParams();
  
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymantMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dingheiro',
  }

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <SuccessContent>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <section>
          <div>
            <Info backgroundIconColor={'purple'}>
              <span><MapPin size={16} weight="fill" color={theme['white']} /></span>
              <p>
                Entrega em <strong>{orderInfo.street}, {orderInfo.number}</strong><br /> {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state} RS
              </p>
            </Info>
            
            <Info backgroundIconColor={'yellow'}>
              <span><Timer size={16} weight="fill" color={theme['white']} /></span>
              <p>
                Previsão de entrega<br /> <strong>20 min - 30 min</strong>
              </p>
            </Info>

            <Info backgroundIconColor={'orange'}>
              <span><CurrencyDollar size={16} color={theme['white']} /></span>
              <p>
                Pagamento na entrega<br /> <strong>{paymantMethod[orderInfo.paymentMethod]}</strong>
              </p>
            </Info>
          </div>
        <img src={ilustration}/>
      </section>
    </SuccessContent>
  );
}