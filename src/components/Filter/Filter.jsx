import React from "react";
import { useDispatch } from "react-redux";
import {changeFilter} from "redux/contacts/filterSlice";
import css from './Filter.module.css';

export default function Filter () {
  const dispatch = useDispatch();
  const handlerChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.filterFields}>
          <label>
            Find contacts by name
          <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              onChange={handlerChangeFilter}
          />
          </label>
  </div>
  )
};