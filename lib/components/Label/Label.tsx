import { LabelStyled } from "./Label.styles";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <LabelStyled {...props} />
}