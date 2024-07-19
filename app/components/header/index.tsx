export default function Header() {
    return (
      <main>
        <header>
          <nav className="bg-white px-4 lg:px-6 py-9 shadow-md divide-current border-solid border-b grid grid-cols-3 items-center">
            
            <div className="flex items-center justify-start">
            </div>
            
            <div className="flex justify-center h-9">
              <a href="#" className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/VOGUE_LOGO.svg/2560px-VOGUE_LOGO.svg.png" className="h-16" alt="Vogue logo" />
              </a>
            </div>
            
            <div className="flex items-center justify-end lg:order-2">
              <div className="border-r border-gray-300 pr-2">
                <a href="#" className="text-gray-800 bg-primary-700 hover:bg-primary-800 font-medium text-sm px-4 lg:px-5 py-1 mr-2">SUSCRIBE</a>
              </div>
              <a href="#" className="text-gray-800 hover:bg-gray-100 font-medium rounded-3xl text-sm px-4 lg:px-5 py-1 flex items-center">
                <span className="material-symbols-outlined mr-1">
                  person
                </span>
                SIGN IN
              </a>
              <span className="material-symbols-outlined">
                search
              </span>
            </div>
  
          </nav>
          <nav className="bg-white border-gray-200 lg:px-0 shadow-md">
            <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl space-x-0">
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">FASHION</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">BEAUTY</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">CULTURE</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">LIVING</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">WEDDINGS</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">RUNWAY</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">SHOPPING</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">VIDEO</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">VOGUE CLUB</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-2 hover:border-black">VOGUE WORLD</a>
            </div>
          </nav>
        </header>
      </main>
    );
  }
  