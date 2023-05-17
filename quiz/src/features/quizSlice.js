import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  quizState: "menu",
  score: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizState: (state, action) => {
      state.quizState = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    }
  }
});

export const { setQuizState, setScore } = quizSlice.actions;
export default quizSlice.reducer;