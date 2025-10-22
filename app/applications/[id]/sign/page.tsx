import SignaturePad from '../../../../components/ui/SignaturePad'

export default function SignPage({ params }: any) {
  const { id } = params

  async function handleSign(dataUrl: string) {
    await fetch('/api/applications/sign', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, signer: 'marketing', signatureDataUrl: dataUrl }) })
    alert('Tanda tangan terkirim')
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Tanda Tangan Kontrak - {id}</h1>
      <p className="mt-2">Silakan tanda tangan di bawah ini:</p>
      <div className="mt-4">
        <SignaturePad onChange={handleSign} />
      </div>
    </div>
  )
}
