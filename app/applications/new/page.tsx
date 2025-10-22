export default function NewApplicationPage() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-xl font-bold">Buat Pengajuan Baru</h1>
      <form action="/api/applications/create" method="post" className="space-y-4 mt-4">
        <div>
          <label className="block text-sm">Nama Pemohon</label>
          <input name="applicant.name" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">NIK</label>
          <input name="applicant.nik" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Merk Kendaraan</label>
          <input name="vehicle.make" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Jumlah Pinjaman</label>
          <input name="loan.amount" className="w-full border p-2 rounded" />
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Kirim Pengajuan</button>
      </form>
    </div>
  )
}
