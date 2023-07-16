import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import css from '../Styles.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
