export default function ProfileLayout({
	children,
	info,
	notes,
}: {
	children: React.ReactNode;
	info: React.ReactNode;
	notes: React.ReactNode;
}) {
	return (
		<div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col container px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-white">User Profile</h1>
			<div className="flex gap-6 text-white">
				<div className="w-1/3">{info}</div>
				<div className="w-2/3">{notes}</div>
			</div>
			{children}
		</div>
	);
}
