import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const generatedContact = createFakeContact();
  try {
    const previousContacts = await readContacts();
    await writeContacts([...previousContacts, generatedContact]);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
