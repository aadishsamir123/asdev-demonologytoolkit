import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {
  const navigate = useNavigate()
  const [hoverStates, setHoverStates] = useState({})

  const tools = [
    { id: 'tool1', name: 'Ghost Finder', description: 'Find out what ghost you\'re dealing with', path: '/tools/ghost-finder' },
    { id: 'tool2', name: 'Wiki', description: 'Roblox Demonology Wiki', path: '/tools/wiki-redirect' },
  ]

  const handleMouseEnter = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: true }))
  }

  const handleMouseLeave = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: false }))
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col overflow-hidden">
      {/* Background elements using CSS classes */}
      <div className="background-container">
        <div className="background-blob-1"></div>
        <div className="background-blob-2"></div>
        <div className="background-blob-3"></div>
        <div className="background-blob-4"></div>
        <div className="background-blob-5"></div>
      </div>

      <header className="py-8 text-center relative z-10">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Demonology Toolkit</h1>
        <p className="mt-2 text-gray-400">Roblox Demonology Game</p>
      </header>

      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
          {tools.map(tool => (
            <div
              key={tool.id}
              className={`relative overflow-hidden rounded-lg transition-all duration-500 transform ${hoverStates[tool.id] ? 'scale-105' : ''}`}
              onMouseEnter={() => handleMouseEnter(tool.id)}
              onMouseLeave={() => handleMouseLeave(tool.id)}
              onClick={() => navigate(tool.path)}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-900/50 p-6 h-full cursor-pointer hover:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-50"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-2">{tool.name}</h2>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-cyan-400 flex items-center group">
                      Access
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-6 text-center text-gray-500 text-sm relative z-10">
        <p>Made by Aadish</p>
      </footer>
    </div>
  )
}

export default Home
