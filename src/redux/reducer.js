import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: ''
};

export const contactsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase('contacts/addContact', (state, action) => {
        state.contacts.push(action.payload);
    })
    .addCase('contacts/deleteContact', (state, action) => {
        const index = state.contacts.findIndex(contact => contact.name === action.payload);
        state.contacts.splice(index,1);
    })
});

export const filterReducer = createReducer(initialState, (builder) => {
    builder
    .addCase('filter/changeFilter', (state, action) => {
        state.filter = action.payload;
    })
});