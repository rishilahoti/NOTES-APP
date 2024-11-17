import Link from 'next/link';
import { Lexend } from 'next/font/google';
import './globals.css';

// Use Lexend from Google Fonts
const lexend = Lexend({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={lexend.className}>
			<body className="min-h-screen flex flex-col">
				<nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4">
					<div className="container mx-auto flex justify-between items-center">
						<Link href="/" className="text-xl font-bold">
							Notes App
						</Link>
						<div className="space-x-4">
							<Link href="/notes">Notes</Link>
							<Link href="/dashboard">Dashboard</Link>
							<Link href="/profile">Profile</Link>
						</div>
					</div>
				</nav>
				<main className="flex-grow">{children}</main>
			</body>
		</html>
	);
}
