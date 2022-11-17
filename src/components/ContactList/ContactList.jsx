import  styles from "./ContactList.module.css";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onClick}) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(item => {
          return (
            <li key={item.id} className={styles.item}>
              <span className={styles.itemText}>{item.name}</span>
              <span className={styles.itemText}>{item.number}</span>
              <button className={styles.button} type='button' onClick={() =>
                onClick(item.id)}>Delete</button>
            </li>
          );
        }

        )}

      </ul>
    </div>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,

    })
  ).isRequired

}
