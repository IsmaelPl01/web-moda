import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header/>

  
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl flex flex-row items-center justify-center border-t border-b pt-2 pb-2 space-x-4">
        <img className="w-auto h-20" src="https://assets.vogue.com/photos/668d414636532e5a7abc537f/master/w_120,c_limit/PreSale-Tote_Ticker_2x%20(1).png" alt="aa"></img>
        <h2 className="text-lg font-extralight font-Bebas_Neue text-gray-800">The September issue countdown is on</h2>
        <a className="object-fill font-bold text-white bg-black px-4 py-3.5" href="#">SUBSCRIBE NOW</a>
      </div>
    </section>


    <section className="px-16 pt-10">
  <div className="grid grid-cols-3 gap-4">
    {/* Highlight grande */}
    <div className="col-span-2">
      <img src="https://assets.vogue.com/photos/66995ba3f61b80d96da9fa93/16:9/pass/GettyImages-2158205352.jpg" alt="Highlight image" className="w-full h-auto"/>
      <div className="text-gray-600 text-sm mt-2">Opinion</div>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">Titular Principal</h1>
      <div className="text-gray-600 text-sm mt-2">By Autor Tal</div>
    </div>

    {/* Contenedor para dos highlights pequeños */}
    <div className="col-span-1 grid grid-rows-2 gap-4">
      {/* Primer highlight pequeño */}
      <div className="flex flex-row-reverse items-center gap-4">
        <img src="https://assets.vogue.com/photos/66995ba3f61b80d96da9fa93/16:9/pass/GettyImages-2158205352.jpg" alt="Small highlight image" className="w-1/2 h-auto"/>
        <div>
          <div className="text-gray-600 text-sm">Opinion</div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Titular Secundario</h2>
          <div className="text-gray-600 text-sm mt-2">By Autor Tal</div>
        </div>
      </div>
      {/* Segundo highlight pequeño */}
      <div className="flex flex-row-reverse items-center gap-4">
        <img src="https://assets.vogue.com/photos/66995ba3f61b80d96da9fa93/16:9/pass/GettyImages-2158205352.jpg" alt="Small highlight image" className="w-1/2 h-auto"/>
        <div>
          <div className="text-gray-600 text-sm">Opinion</div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Titular Secundario</h2>
          <div className="text-gray-600 text-sm mt-2">By Autor Tal</div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        <img src="https://assets.vogue.com/photos/66995ba3f61b80d96da9fa93/16:9/pass/GettyImages-2158205352.jpg" alt="Small highlight image" className="w-1/2 h-auto"/>
        <div>
          <div className="text-gray-600 text-sm">Opinion</div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Titular Secundario</h2>
          <div className="text-gray-600 text-sm mt-2">By Autor Tal</div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        <img src="https://assets.vogue.com/photos/66995ba3f61b80d96da9fa93/16:9/pass/GettyImages-2158205352.jpg" alt="Small highlight image" className="w-1/2 h-auto"/>
        <div>
          <div className="text-gray-600 text-sm">Opinion</div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Titular Secundario</h2>
          <div className="text-gray-600 text-sm mt-2">By Autor Tal</div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-4">
        <img src="https://assets.vogue.com/photos/66995ba3f61b80d96da9fa93/16:9/pass/GettyImages-2158205352.jpg" alt="Small highlight image" className="w-1/2 h-auto"/>
        <div>
          <div className="text-gray-600 text-sm">Opinion</div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Titular Secundario</h2>
          <div className="text-gray-600 text-sm mt-2">By Autor Tal</div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
