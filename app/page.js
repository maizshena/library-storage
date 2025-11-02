// app/page.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3xl font-bold">Hai, cewek cantik!</h1>
      <p className="text xl font-medium">Mau ngapain hari ini?</p>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
    </main>
  );
}