import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { ButtonCart, CountProduct, Order, ProductBoxItem, TagsCoffee } from "./styles";

import { ProductAmountInput } from "../ProductAmountInput";
import { useEffect, useState } from "react";

import { useCart } from "../../hooks/useCart";


interface ProductItemProps {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string
  }
}

export function ProductItem({ coffee }: ProductItemProps ) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);


  const { addItem } = useCart();


  function handelDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1); 
    }
  }

  function handelIncrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity: quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  },[isItemAdded]);
  
  return (
    <ProductBoxItem>
      <img src={coffee.image} alt={coffee.title}/>
      <TagsCoffee>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsCoffee>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <Order>
        <p>R$<span>{coffee.price.toFixed(2)}</span></p>
        <CountProduct>
          <ProductAmountInput
            quantity={quantity}
            handelDecrementQuantity={handelDecrementQuantity}
            handelIncrementQuantity={handelIncrementQuantity}
          />
          <ButtonCart $itemAdded={isItemAdded} disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} />
            ) : (
             <ShoppingCart size={22} weight="fill"/>
            )}
           
          </ButtonCart>
        </CountProduct>
      </Order>
    </ProductBoxItem>
  );
}