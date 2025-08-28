import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../models/Produto'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } =
  cartSlice.actions
export default cartSlice.reducer
