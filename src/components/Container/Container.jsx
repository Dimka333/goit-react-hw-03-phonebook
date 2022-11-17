import  styles from "./Container.module.css";
import PropTypes from 'prop-types';

const Container = ({title, children}) => {
  return (
    <div className={styles.container}>
     <h2>{title}</h2>
      {children}
    </div>
  )
}


Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object]).isRequired
};

export default Container;
