import localforage from 'localforage';

window.localforage = localforage;

const getAll = async () => {
  const notes = await localforage.getItem('notes');
  if (!notes) await localforage.setItem('notes', []);
  return notes || [];
};

export default {
  async add(note) {
    const notes = await getAll();
    const newNote = { ...note, id: Date.now() };
    localforage.setItem('notes', [...notes, newNote]);
    return newNote;
  },

  async getAll() {
    return await getAll();
  },

  async delete({ id }) {
    const notes = await getAll();
    localforage.setItem(
      'notes',
      notes.filter(note => note.id !== id)
    );
  },

  async update(updatedNote) {
    const notes = await getAll();
    localforage.setItem(
      'notes',
      notes.map(note => {
        if (note.id === updatedNote.id) return { ...note, ...updatedNote };
        return note;
      })
    );
  },

  async updateAllAsArchive() {
    const notes = await getAll();
    localforage.setItem(
      'notes',
      notes.map(note => ({ ...note, isArchived: false }))
    );
  },

  async deleteArchivedNotes() {
    const notes = await getAll();
    localforage.setItem(
      'notes',
      notes.filter(({ isArchived }) => isArchived)
    );
  }
};
