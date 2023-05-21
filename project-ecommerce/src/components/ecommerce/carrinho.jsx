   
import { SCREENS } from ".";
import { Button, ProductTitle, AtualizaQuantidade, P } from "./styles";

export default function Carrinho({ trocaTela, carrinho, atualizarQuantidadeNoCarrinho }) {
  const calcularValorTotal = () => {
    let valorTotal = 0;
    carrinho.forEach((produto) => {
      valorTotal += produto.price * produto.quantidade;
    });
    return valorTotal;
  };

  return (
    <>
      <h1>Carrinho</h1>
      <div>
        {carrinho.map((produto) => (
          <div key={produto.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img src={produto.image} alt={produto.title} style={{ width: "100px", marginRight: "10px" }} />
            <div>
              <div>
                <ProductTitle>{produto.title}</ProductTitle>
              </div>
              <div>
                <ProductTitle>Valor: R${produto.price}</ProductTitle>
              </div>
              <div>
                <ProductTitle>Quantidade: {produto.quantidade}</ProductTitle>
                <div>
                  <AtualizaQuantidade onClick={() => atualizarQuantidadeNoCarrinho(produto, produto.quantidade + 1)}>+</AtualizaQuantidade>
                  <AtualizaQuantidade onClick={() => atualizarQuantidadeNoCarrinho(produto, produto.quantidade - 1)}>-</AtualizaQuantidade>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <P>Valor total: R${calcularValorTotal().toFixed(2)}</P>
      <Button onClick={() => trocaTela(SCREENS.PRODUTOS)}>Continuar comprando</Button>
      <Button onClick={() => trocaTela(SCREENS.PAGAMENTO)}>Finalizar carrinho</Button>
    </>
  );
}