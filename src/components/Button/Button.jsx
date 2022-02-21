import './Button.css';
import { ReactComponent as PlusButton } from '../../assets/plus-sign.svg';
import { ReactComponent as MinusButton } from '../../assets/minus-sign.svg';

export default function Button(props) {
  const { isOpen, handleClick } = props;

  return (
    <div onClick={handleClick}>
      {isOpen ? (
        <MinusButton className="button" />
      ) : (
        <PlusButton className="button" />
      )}
    </div>
  );
}
