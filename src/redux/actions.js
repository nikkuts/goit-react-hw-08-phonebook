// import { createAction } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const addContact = (name, number) => ({
    type: 'contacts/addContact',
    payload: {
        name: name,
        number: number,
        id: nanoid(),
    } 
});

export const deleteContact = id => ({
    type: 'contacts/deleteContact',
    payload: id,
});

export const changeFilter = value => ({
    type: 'filter/changeFilter',
    payload: value,
});