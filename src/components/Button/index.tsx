import { ReactElement } from 'react';
import './button.css';
// import style9 from 'style9';
//
// const styles = style9.create({
//   blue: {
//     backgroundColor: 'blue',
//     color: 'white',
//   },
//   red: {
//     color: 'red',
//   },
// });
//
// console.log('### styles', styles('blue'));

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  label,
  onClick,
  type = 'button',
}: ButtonProps): ReactElement {
  return (
    <button type={type} onClick={onClick} className="button">
      {label}
    </button>
  );
}

export default Button;
