import { useState } from 'react';
import Carrinho from "./carrinho";
import Layout from "./layout";
import Pagamento from "./pagamento";
import Produtos from "./produtos";

export const SCREENS = {
  PRODUTOS: 0,
  CARRINHO: 1,
  PAGAMENTO: 2,
};

export default function Ecommerce() {
  const [screen, setScreen] = useState(SCREENS.PRODUTOS);
  const [carrinho, setCarrinho] = useState([]); // Estado do carrinho

  // Função para adicionar um item ao carrinho
  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

    // Função para atualizar a quantidade de um item no carrinho
  const atualizarQuantidadeNoCarrinho = (item, quantidade) => {
    const novoCarrinho = carrinho.map((produto) => {
      if (produto.id === item.id) {
        return { ...produto, quantidade };
      }
      return produto;
    });
    setCarrinho(novoCarrinho);
  };

  return (
    <Layout>
      {screen === SCREENS.PRODUTOS && (
        <Produtos
          trocaTela={setScreen}
          adicionarAoCarrinho={adicionarAoCarrinho} // Passando a função adicionarAoCarrinho como prop
        />
      )}
      {screen === SCREENS.CARRINHO && (
        <Carrinho
          trocaTela={setScreen}
          carrinho={carrinho} // Passando o estado do carrinho como prop
          atualizarQuantidadeNoCarrinho={atualizarQuantidadeNoCarrinho} // Passando a função atualizarQuantidadeNoCarrinho como prop
        />
      )}
      {screen === SCREENS.PAGAMENTO && (
        <Pagamento trocaTela={setScreen} carrinho={carrinho} />
      )}
    </Layout>
  );
}

  
