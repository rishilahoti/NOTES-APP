import { getNotes } from '@/core/use-cases/get-notes.use-case';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NotesList from './components/NotesList';
import { QueryParams } from '@/core/entities/note';
import { unstable_cache } from 'next/cache';

export default async function NotesPage(
	props: Promise<{
		searchParams: { page?: string; search?: string };
	}>
) {
	const { searchParams } = await props;

	const page = Number(searchParams.page) || 1;
	const search = searchParams.search || '';
	const { notes, total } = await fetchNotes({ page, search, limit: 5 });

	return (
		<div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col container px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-white">Notes</h1>
			<div className="mb-4">
				<Link href="/notes/create">
					<Button className='bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:via-purple-500 hover:to-pink-400 transition duration-300'>Create New Note</Button>
				</Link>{' '}
			</div>
			<NotesList
				notes={notes}
				total={total}
				currentPage={page}
				search={search}
			/>
		</div>
	);
}

async function fetchNotes(params: QueryParams) {
	return await unstable_cache(getNotes, ['notes'], { tags: ['notes'] })({
		...params,
	});
}
