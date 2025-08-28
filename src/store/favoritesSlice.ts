import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../models/Produto'

type FavoritesState = {
  itens: Produto[]
}

const initialState: FavoritesState = {
  itens: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.itens.findIndex((item) => item.id === produto.id)
      if (index > -1) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritesSlice.actions
export default favoritesSlice.reducer
