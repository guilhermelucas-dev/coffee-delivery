import styled from "styled-components";

export const InputBox = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 1.6rem;
    right: 1.2rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-label']};
  }
`
interface LabelProps {
  $isFocused: boolean;
  $hasContent: boolean;
}

export const StyledLabel = styled.label<LabelProps>`
  position: absolute;
  left: 1.2rem;
  top: 1.4rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme['base-label']};
  opacity: ${(props) => (props.$isFocused || props.$hasContent ? 0 : 1)};
  cursor: text;
  transition: opacity 0.3s ease;
`

export const StyledInput = styled.input`
  font-size: 1.4rem;
  line-height: 18.2px;
  padding: 1.2rem;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: .4rem;
  width: 100%;
`