import { SCREENS } from ".";
import { products } from './products';
import { Button, ProductImage, ProductPrice, ProductGrid, ProContainer, ProductButton, ProdutosEscolhidos } from './styles';
import { useState } from 'react';

export default function Produtos({ trocaTela, adicionarAoCarrinho }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (produto) => {
    const novoProduto = { ...produto, quantidade: 1 }; // Adiciona a propriedade "quantidade" ao produto
    setCarrinho((prevCarrinho) => [...prevCarrinho, novoProduto]);
    adicionarAoCarrinho(novoProduto); // Chame a função adicionarAoCarrinho passada como prop
  };

  const quantidadeSelecionada = carrinho.length;

  return (
    <>
      <h1>Produtos</h1>
      <ProdutosEscolhidos>{quantidadeSelecionada} </ProdutosEscolhidos>
      <ProductGrid>
        {products.map((product) => (
          <ProContainer key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductButton onClick={() => adicionarCarrinho(product)}>Adicionar carrinho</ProductButton>
            <ProductPrice>Valor: R${product.price}</ProductPrice>
          </ProContainer>
        ))}
      </ProductGrid>

      <Button onClick={() => trocaTela(SCREENS.CARRINHO)}>Ir para carrinho</Button>
    </>
  );
}
