import { writeContacts } from '../utils/writeContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  if (contacts.length <= 0) {
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
