import { sleep } from '@/lib/utils';

export async function getUserInfo() {
	await sleep();
	return {
		name: 'Rishi Lahoti',
		email: 'rishilahoti99@gmail.com',
		joinDate: 'November 2024',
		notesCount: 12,
	};
}
