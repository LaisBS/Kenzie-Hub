import { Container } from "./style";
function Button({ children, greySchema = false, ...rest }) {
  return (
    <Container greySchema={greySchema} type="button" {...rest}>
      {children}
    </Container>
  );
}
export default Button;
