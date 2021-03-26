import { RootState } from './../store/configureStore';
import { useSelector } from 'react-redux';

export const useIsLoggedIn = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return token !== null;
};
