export default function Input(props: any) {
  return <input {...props} className={`w-full border p-2 rounded ${props.className || ''}`} />
}
