import { ChangeEvent, FocusEvent, forwardRef, InputHTMLAttributes, LegacyRef, useState } from "react";
import { InputBox, StyledInput, StyledLabel } from "./styled";

type InputContentProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: string;
  inputType: string;
  labelText: string;
  optional?: string;
}

export const InputContent = forwardRef(function InputContent({ inputName, inputType, labelText, optional, onFocus, onBlur, onChange, ...rest }: InputContentProps, ref: LegacyRef<HTMLInputElement>) {
  
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);


  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }



  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 0 ) {
      setHasContent(true);
    } else {
      setHasContent(false)
    }
    onChange?.(event);
  }

  return(
  <InputBox>
    <StyledLabel htmlFor={inputName} $isFocused={isFocused} $hasContent={hasContent}>
      {labelText}
    </StyledLabel>
    <StyledInput 
      id={inputName}
      type={inputType} name={inputName}
      //placeholder={inputName}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(event) => handleChange(event)}
      ref={ref}
      {...rest}
    />

    {optional ? <span><i>Opcional</i></span> : null}  
  </InputBox>
  );
})