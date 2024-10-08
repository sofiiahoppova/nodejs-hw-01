import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const generatedContacts = [];
  for (let i = 0; i < number; i++) {
    generatedContacts.push(createFakeContact());
  }
  try {
    const previousContacts = await readContacts();
    await writeContacts([...previousContacts, ...generatedContacts]);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
