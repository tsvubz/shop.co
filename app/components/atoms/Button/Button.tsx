import styles from './Button.module.scss'

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button = ({ label, onClick, className }: ButtonProps) => {

    const buttonStyle = `${styles.button}`;

  return (
    <button className={`${buttonStyle} ${className}`} onClick={onClick}>
        {label}
    </button>
  )
}

export default Button