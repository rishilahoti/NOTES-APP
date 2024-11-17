import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import NotesSummary from './components/NotesSummary';
import RecentActivity from './components/RecentActivity';
import TagCloud from './components/TagCloud';

export default function DashboardPage() {
	return (
		<div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col container px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Suspense fallback={<Skeleton className="h-[200px]" />}>
					<NotesSummary />
				</Suspense>
				<Suspense fallback={<Skeleton className="h-[200px]" />}>
					<RecentActivity />
				</Suspense>
				<Suspense fallback={<Skeleton className="h-[200px]" />}>
					<TagCloud />
				</Suspense>
			</div>
		</div>
	);
}
