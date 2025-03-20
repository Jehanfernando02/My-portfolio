import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo size={32} />
          </div>

          <div className="text-sm text-gray-400">© {new Date().getFullYear()} Jehan Fernando. All rights reserved.</div>

          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

