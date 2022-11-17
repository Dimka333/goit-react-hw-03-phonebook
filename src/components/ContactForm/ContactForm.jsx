import styles from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
})
export const ContactForm = ({ addContact }) => {

  const handleSubmit = ({ name, number }, actions) => {
    addContact(name, number);
    console.log(name, number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >

      <Form className={styles.Form}>
        <label  className={styles.label}>Name
          <Field
            className={styles.input}
            name='name'
            type='text'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage className={styles.errorMessage} name="name" component="div" />
        </label>

        <label className={styles.label}>
          Number
          <Field
            className={styles.input}
          type='text'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        />
          <ErrorMessage className={styles.errorMessage} name="number" component="div" />
          <button className={styles.submBtn} type='submit'>Add contact</button>
        </label>

      </Form>
    </Formik>
  );
};

ContactForm.prototype = {
  addContact : PropTypes.func.isRequired
}



export default ContactForm;
