import { Button,P } from "./styles"; 


export default function Pagamento({ carrinho}) {
  const calcularQuantidadeTotal = () => {
    let quantidadeTotal = 0;
    carrinho.forEach((produto) => {
      quantidadeTotal += produto.quantidade;
    });
    return quantidadeTotal;
  };
console.log(carrinho)
  const calcularValorTotal = () => {
    let valorTotal = 0;
    carrinho.forEach((produto) => {
      valorTotal += produto.price * produto.quantidade;
    });
    return valorTotal;
  };

  return (
    <>
      <h1>Checkout</h1>
      <P>Produtos escolhidos</P>
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
     {carrinho.map((produto) => (
        <div key={produto.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginRight: "10px" }}>
            <img src={produto.image} alt={produto.title} style={{ width: "100px" }} />
        </div>
        ))}
    </div>
      <P>Total Produtos: {calcularQuantidadeTotal()}</P>
      <P>Total: R${calcularValorTotal().toFixed(2)}</P>
      <Button >Confirmar Compra</Button>
     
    </>
  );
}