import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { useGetProdutosQuery } from './services/api'
import { Produto } from './models/Produto'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favorites.itens)
  const carrinho = useSelector((state: RootState) => state.cart.itens)

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  if (!produtos) {
    return <h2>Nenhum produto encontrado.</h2>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
