import { useRef } from 'react'

export default function SignaturePad({ onChange }: { onChange?: (dataUrl: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  function handlePointerDown(e: any) {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')!
    ctx.beginPath()
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    c.setPointerCapture(e.pointerId)
    c.onpointermove = (ev: any) => {
      ctx.lineTo(ev.offsetX, ev.offsetY)
      ctx.stroke()
    }
    c.onpointerup = () => {
      c.onpointermove = null
      c.onpointerup = null
      const data = c.toDataURL()
      onChange?.(data)
    }
  }

  return <canvas ref={canvasRef} width={600} height={200} onPointerDown={handlePointerDown} className="border" />
}
