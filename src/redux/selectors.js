import { createSelector } from '@reduxjs/toolkit';

export const filterSelector = state => state.filter;

export const tokenSelector = state => state.auth.token;
export const isRefreshingSelector = state => state.auth.isRefreshing;
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const nameSelector = state => state.auth.user.name;
export const userSelector = state => state.auth.user;

export const contactsSelector = state => state.contacts.items;
export const isLoadingSelector = state => state.contacts.isLoading;

export const shownContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filterValue) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);
