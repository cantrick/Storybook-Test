import { StyledButton } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export function Button(props: ButtonProps) {
    const { className, label, ...restProps } = props
  return <StyledButton className={className} {...restProps}>{label}</StyledButton>
}