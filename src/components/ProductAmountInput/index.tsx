import { Minus, Plus } from "@phosphor-icons/react";
import { ProductAmountInputBox } from "./styles";


interface ProductAmountInputProps {
  quantity: number;
  handelDecrementQuantity: () => void;
  handelIncrementQuantity: () => void;
}

export function ProductAmountInput({  quantity, handelDecrementQuantity, handelIncrementQuantity }: ProductAmountInputProps) {

  return (
    <ProductAmountInputBox>
      <button onClick={handelDecrementQuantity}><Minus size={14} /></button>
      <span>{quantity}</span>
      <button  onClick={handelIncrementQuantity}><Plus size={14} /></button>
    </ProductAmountInputBox>
  );
}

