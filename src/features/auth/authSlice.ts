import { IUser } from './../../types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = {
  token: string | null;
} & IUser;

const initialState: SliceState = {
  token: null,
  username: '',
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action: { payload: string }) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      const user: IUser = action.payload;
      state = { ...state, ...user };
    },
  },
});

export const actions = authSlice.actions;
export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
