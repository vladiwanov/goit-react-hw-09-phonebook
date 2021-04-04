import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getContactlist = state => getItems(state);
const getFilter = state => state.contacts.filter;
const getLoadingStatus = state => state.contacts.loading;

const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getContactlist,
  getFilteredContacts,
  getLoadingStatus,
  getItems,
  // getFilter,
};

// const getFilteredContacts = ({ contacts: { items, filter } }) => {
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(item =>
//     item.name.toLowerCase().includes(normalizedFilter),
//   );
// };
