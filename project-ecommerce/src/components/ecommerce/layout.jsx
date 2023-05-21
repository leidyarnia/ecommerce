import Header from "./header";
import Footer from "./footer";
import { Container } from "./styles";



export default function Layout ({children}) {
  return (
    <Container>
      <Header />

      <main>{children}</main>

      <Footer />
    </Container>
  )
}