export default class NotesAPI {
    static LOCAL_STORAGE_DATA_KEY = "notesapp-notes";

    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem(NotesAPI.LOCAL_STORAGE_DATA_KEY) || "[]");

        // sort notes by the updated timestamp
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find((note) => note.id == noteToSave.id);

        // Edit or Update depending if the noteToSave already exists
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem(NotesAPI.LOCAL_STORAGE_DATA_KEY, JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();

        // get every single note that does not have the passed in id
        const newNotes = notes.filter((note) => note.id != id);

        localStorage.setItem(NotesAPI.LOCAL_STORAGE_DATA_KEY, JSON.stringify(newNotes));
    }
}
