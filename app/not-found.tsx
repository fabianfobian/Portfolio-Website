export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-300">Page not found</p>
        <a href="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
          Go Home
        </a>
      </div>
    </div>
  )
}