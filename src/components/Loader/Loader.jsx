import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loading}>
      <RotatingLines
          strokeColor="yellow"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
    </div>
  );
};
export default Loader;