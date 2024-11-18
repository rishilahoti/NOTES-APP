import { notes } from '@/db';
import { NoteInsert } from '@/core/entities/note';
import { nanoid } from 'nanoid';

export async function createNote(data: NoteInsert) {
	const id = nanoid(2);
	notes.unshift({ ...data, id, createdAt: new Date() });
	console.log('adding a new note -->', data, notes);
}
