# Digital Loan Origination - MVP

Proyek ini adalah skeleton MVP aplikasi "Digital Loan Origination" untuk PT. JKL, siap dideploy ke Vercel.

Fitur utama:
- Otentikasi JWT via httpOnly cookie (roles: marketing, approver, backoffice)
- Form pengajuan: data konsumen, kendaraan, pembiayaan + unggah dokumen
- Workflow sederhana: submit → approve/reject → generate kontrak (PDF dummy) → tanda tangan dasar
- Dashboard ringkas

Langkah cepat (lokal):
1. Salin ke mesin lokal
2. Buat file .env.local dengan variabel berikut:

   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=some_long_random_secret

3. Install dependensi: npm install
4. Jalankan dev: npm run dev

Deploy ke Vercel:
- Buat project baru di Vercel, hubungkan repo atau upload. Tambahkan env vars ke Vercel (MONGODB_URI, JWT_SECRET).
- Vercel akan build dengan Next.js 15 App Router.

Instruksi detail deploy ke Vercel (Bahasa Indonesia):

1. Push repository Anda ke GitHub/GitLab/Bitbucket.
2. Di dashboard Vercel, pilih "New Project" → impor repository.
3. Pada bagian Environment Variables, tambahkan:
   - MONGODB_URI = <connection string MongoDB Atlas>
   - JWT_SECRET = <rahasia-panjang>
4. Pilih branch untuk deploy (biasanya main). Tekan Deploy.
5. Setelah deploy selesai, cek URL yang diberikan Vercel.

Catatan role dan proteksi route:
- Endpoint `POST /api/applications/approve` sekarang memeriksa cookie JWT dan hanya mengizinkan role `approver`.
- Untuk membuat user `approver`, buat user lewat `/api/auth/register` lalu set role di DB (misal update collection users, set role: 'approver') atau tambahkan parameter role saat membuat user dari server.

Verifikasi cepat setelah deploy / saat lokal:
- Pastikan `.env` atau Vercel env sudah benar.
- Gunakan curl/PowerShell Invoke-WebRequest untuk register/login dan periksa header Set-Cookie untuk cookie `token`.

Catatan khusus pengguna Windows (PowerShell):

- Jika saat menjalankan `npm install` Anda melihat error seperti:
   "npm.ps1 cannot be loaded because running scripts is disabled on this system",
   maka ini disebabkan oleh PowerShell Execution Policy default yang mencegah skrip berjalan.

Solusi cepat:
- Jalankan perintah install di Command Prompt (cmd.exe): buka CMD, lalu:

   cd /d d:\JKL1
   npm install

- Atau jalankan di PowerShell untuk satu kali perintah dengan ExecutionPolicy Bypass:

   powershell -ExecutionPolicy Bypass -Command "npm install"

- Jika ingin mengubah policy untuk sesi saat ini saja (tidak permanen):

   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   npm install

Catatan: mengubah Execution Policy secara permanen memerlukan hak administrator dan biasanya tidak dianjurkan tanpa memahami implikasinya.


