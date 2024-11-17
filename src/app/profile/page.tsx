import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
	return (
		<div className="mt-8">
			<h2 className="text-2xl font-semibold mb-4 text-white">
				Profile Actions
			</h2>
			<div className="flex gap-4">
				<Link href="/notes">
					<Button className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:via-purple-500 hover:to-pink-400 transition duration-300">
						View All Notes
					</Button>
				</Link>
				<Link href="/dashboard">
					<Button className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:via-purple-500 hover:to-pink-400 transition duration-300">
						Go to Dashboard
					</Button>
				</Link>
			</div>
		</div>
	);
}
