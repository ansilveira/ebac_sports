import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { adicionarAoCarrinho } from '../store/cartSlice'
import { favoritar } from '../store/favoritesSlice'
import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../models/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorites.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            adicionarAoCarrinho={() => handleAdicionarAoCarrinho(produto)}
            favoritar={() => handleFavoritar(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
