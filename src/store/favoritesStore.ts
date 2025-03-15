import { create } from 'zustand';

interface FavoritesState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesState>()((set) => ({
  favorites: [],
  toggleFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id],
    }));
  },
}));
