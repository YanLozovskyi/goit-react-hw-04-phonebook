import React from 'react';
import { Formik } from 'formik';
import {
  StyledForm,
  Label,
  StyledField,
  Button,
  ErrorMsg,
} from './ContactForm.styled';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          <StyledField
            name="name"
            type="text"
            placeholder="Enter contact name"
          />
          <ErrorMsg name="name" component="div" />
        </Label>
        <Label>
          <StyledField
            name="number"
            type="tel"
            placeholder="Enter contact number"
          />
          <ErrorMsg name="number" component="div" />
        </Label>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
