import { getNote } from '@/core/use-cases/get-note.use-case';
import { notFound } from 'next/navigation';

export const fetchNote = async (id: string) => {
	try {
		const note = await getNote({ id });

		if (!note) {
			throw notFound(); // Redirects to the 404 page
		}

		return note;
	} catch (error) {
		console.error('Error fetching note:', error);
		throw notFound(); // Handles any unexpected errors by showing the 404 page
	}
};
