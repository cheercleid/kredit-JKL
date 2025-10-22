import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Masuk - PT. JKL</h1>
        <form action="/api/auth/login" method="post" className="space-y-3">
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" type="email" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input name="password" type="password" className="w-full border p-2 rounded" />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded">Masuk</button>
        </form>
        <p className="text-sm mt-3">Belum punya akun? <Link href="/register" className="text-blue-600">Daftar</Link></p>
      </div>
    </div>
  )
}
