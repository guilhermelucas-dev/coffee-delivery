import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react"
import { ActionItem, CheckoutContent, FieldsetLegend, Form, FormAddress, ListItem, Options, OrderList, OrderListContent } from "./styles";
import { ProductAmountInput } from "../../components/ProductAmountInput";
import { InputContent } from "../../components/InputContent/intex";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from 'zod';

import { coffees } from '../../../data.json';
import { useCart } from "../../hooks/useCart";
import { useTheme } from "styled-components";

const formOrderValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'money'])
});

export type formOrderData = zod.infer<typeof formOrderValidationSchema>

const shippingPrice = 3.5;

export function Checkout() {
  const theme = useTheme();
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem
  } = useCart();

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0);

  const { register, handleSubmit } = useForm<formOrderData>({
    resolver: zodResolver(formOrderValidationSchema),
  });

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId); 
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }
   
  function handleOrderCheckout(data: formOrderData) {

    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho');
    }
    checkout(data);
  }

  return (
    <CheckoutContent>
      <div>

        <h2>Complete seu pedido</h2>

        <Form id="formOrder" onSubmit={handleSubmit(handleOrderCheckout)}>
          <fieldset>
            <FieldsetLegend>
              <MapPinLine size={22} color={theme['yellow-dark']}/>
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FieldsetLegend>
          
            <FormAddress>
      
              <InputContent 
                inputName={"cep"}
                inputType={"text"}
                labelText={"CEP"}
                {...register('cep')}
              />

              <InputContent
                inputName={"street"}
                inputType={"text"}
                labelText={"Rua"}
                {...register('street')} 
              />

              <InputContent
                inputName={"number"}
                inputType={"text"}
                labelText={"Número"}
                {...register('number')} 
              />

              <InputContent
                inputName={"complement"}
                inputType={"text"}
                labelText={"Complemento"}
                optional={"optional"}
                {...register('complement')} 
              />

              <InputContent 
                inputName={"neighborhood"}
                inputType={"text"}
                labelText={"Bairro"}
                {...register('neighborhood')} 
              />

              <InputContent
                inputName={"city"}
                inputType={"text"}
                labelText={"Cidade"}
                {...register('city')} 
              />

              <InputContent
                inputName={"state"}
                inputType={"text"}
                labelText={"UF"}
                {...register('state')} 
              />

            </FormAddress>
  
          </fieldset>
          
          <fieldset>
            <FieldsetLegend>
              <CurrencyDollar size={22} color={theme['purple']} />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </FieldsetLegend>
          
          <Options>
            <input
              type="radio"
              id="credit"
              value="credit"
              {...register("paymentMethod")}
            />
            <label htmlFor="credit"><CreditCard size={16} color={theme['purple']} />Cartão de crédito</label>

            <input
              type="radio"
              id="debit"
              value="debit"
              {...register("paymentMethod")}
            />
            <label htmlFor="debit"><Bank size={16} color={theme['purple']}/>Cartão de débito</label>

            <input
              type="radio"
              id="money"
              value="money"
              {...register("paymentMethod")}
            />
              
            <label htmlFor="money"><Money size={16} color={theme['purple']}/>Dinheiro</label>
          </Options>
          </fieldset>
        </Form>
      </div>

      <aside>
        <h2>Café Selecionados</h2>
        <OrderListContent>
          <OrderList>
          {coffeesInCart.map((coffee) => (
             <ListItem>
             <img src={coffee.image} alt={coffee.title}/>
             <div>
               <h3>{coffee.title}</h3>
               <ActionItem>
                 <ProductAmountInput
                    quantity={coffee.quantity}
                    handelIncrementQuantity={() => handleItemIncrement(coffee.id)}
                    handelDecrementQuantity={() => handleItemDecrement(coffee.id)}

                  />
                 <button onClick={() => handleItemRemove(coffee.id)}><span><Trash size={16} color={theme['purple']} /></span>Remover</button>
               </ActionItem>
             </div>
             <p><strong>R$ {coffee.price?.toFixed(2)}</strong></p>
           </ListItem>
          ))}
           
          </OrderList>
        
          <div>
            <p>Total de itens</p>
            <p>{new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(totalItemsPrice)}</p>
          </div>

          <div>
            <p>Entrega</p>
            <p>{new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(shippingPrice)}</p>
          </div>

          <div>
            <p>Total</p>
            <p>{new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(totalItemsPrice + shippingPrice)}</p>
          </div>
    

          <button type="submit" form="formOrder">Confirmar pedido</button>

        </OrderListContent>
         
      </aside>

    </CheckoutContent>
  );
}