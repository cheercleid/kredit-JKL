export default function Button({ children, ...props }: any) {
  return (
    <button {...props} className={`px-4 py-2 rounded bg-blue-600 text-white ${props.className || ''}`}>
      {children}
    </button>
  )
}
