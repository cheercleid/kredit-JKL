import { cookies } from 'next/headers'

export default async function ApplicationDetail({ params }: { params: { id: string } }) {
  const { id } = params
  // placeholder: fetch detail via API route
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Detail Pengajuan: {id}</h1>
      <p className="mt-2">Data aplikasi dan status akan ditampilkan di sini.</p>
    </div>
  )
}
