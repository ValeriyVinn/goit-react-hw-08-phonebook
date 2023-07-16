import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import css from '../Styles.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.login__container}>
      <h2 className={css.login__title}>Please, log in</h2>
      <form className={css.form__container} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit " className={css.form__btn}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
