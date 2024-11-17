import NoteOfTheDay from './components/NoteOfTheDay';
import RandomNote from './components/RandomNote';

export default function Home() {
	return (
		<div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col text-white container px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Welcome to Notes App</h1>
			<NoteOfTheDay>
				<RandomNote />
			</NoteOfTheDay>
		</div>
	);
}
