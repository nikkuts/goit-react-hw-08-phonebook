import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import {deleteContact} from 'redux/operations';
import css from './Contact.module.css';

export default function Contact ({id, name, number}) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(deleteContact(id)); 

    return (
      <li className={css.item} key={id}>
        {name}: {number}
        <button type="button" name={id} className={css.itemBtn} onClick={handleClick}>
          Delete
        </button>
      </li>
    )
  };

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};