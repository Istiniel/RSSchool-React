import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { FormCardType } from '../../../components/FormCard';

type animeState = {
  searchQuery: string;
  submissionFormCards: Array<FormCardType>;

  fetchFailedMessage: string;
};

const initialState: animeState = {
  searchQuery: '',
  submissionFormCards: [],
  fetchFailedMessage: '',
};

export const anime = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    changeSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    addFormCard: (state, action: PayloadAction<FormCardType>) => {
      state.submissionFormCards.push(action.payload);
    },
  },
});

export const { changeSearchQuery, addFormCard } = anime.actions;
export default anime.reducer;

export const selectSearchQuery = (state: RootState) => state.anime.searchQuery;
export const selectFormCards = (state: RootState) => state.anime.submissionFormCards;
