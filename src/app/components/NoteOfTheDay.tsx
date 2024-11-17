'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function NoteOfTheDay({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="my-8">
			<h2 className="text-2xl font-bold mb-4">Note of the Day</h2>
			<Button onClick={() => setIsVisible(!isVisible)} className='bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:via-purple-500 hover:to-pink-400 transition duration-300'>
				{isVisible ? 'Hide Note' : 'Show Note'}
			</Button>
			{isVisible && <div className="mt-4">{children}</div>}
		</div>
	);
}
