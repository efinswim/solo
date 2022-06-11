import { useSelector } from 'react-redux';

export function useAuth() {
  const { firstName, lastName, email, token, id } = useSelector(
    (state) => state.user,
  );

  return {
    isAuth: !!id,
    firstName,
    lastName,
    email,
    token,
    id,
  };
}
