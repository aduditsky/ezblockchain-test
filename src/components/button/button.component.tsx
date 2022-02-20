import { IButton } from './button.interfaces';
import { ButtonStyles } from './button.styles';

const Button = ({ text, onClick }: IButton) => {
  return (
    <ButtonStyles onClick={onClick} type='button'>
      <span>{text}</span>
    </ButtonStyles>
  );
};

export default Button;
