import Image from "next/image";

export default function Header() {
    return (
      <main>
        <header>
          <nav className="bg-white px-4 lg:px-6 py-9 shadow-md divide-current border-solid border-b grid grid-cols-3 items-center">
            
            <div className="flex items-center justify-start">
            </div>
            
            <div className="flex justify-center h-9">
              <a href="#" className="flex items-center">
              <Image src="/logo_preview.png" width={400} height={32} alt="Amy's Folio logo" className="h-16" />              </a>
            </div>
            
            <div className="flex items-center justify-end lg:order-2">
              <div className="border-r border-gray-300 pr-2">
                <a href="#" className="text-gray-800 bg-primary-700 hover:bg-primary-800 font-medium text-sm py-1 mr-2">
                  SUBSCRIBE
                </a>
              </div>

              <div className="flex flex-row hover:bg-gray-100 rounded-3xl">
                <span className="material-symbols-outlined mr-1 pl-4">
                    person
                  </span>
                <a href="#" className="text-gray-800 hover:underline font-medium text-sm pr-5 lpy-1 flex items-center">
                  SIGN IN
                </a>
              </div>
              
              <span className="material-symbols-outlined">
                search
              </span>
            </div>
  
          </nav>
          <nav className="bg-white border-gray-200 lg:px-0 shadow-md">
            <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl space-x-1">
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">FASHION</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">BEAUTY</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">CULTURE</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">LIVING</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">WEDDINGS</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">RUNWAY</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">SHOPPING</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">VIDEO</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">VOGUE CLUB</a>
              <a href="#" className="text-gray-800 font-medium text-sm px-2 py-2 border-transparent border-b-4 hover:border-black">VOGUE WORLD</a>
            </div>
          </nav>
        </header>
      </main>
    );
  }
  