import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import css from '../Styles.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.user__container}>
      <p className={css.user__link}>Welcome, </p>
      <p className={css.user__name}>{name} </p>
      <button
        className={css.log__out__btn}
        type="submit"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
}
