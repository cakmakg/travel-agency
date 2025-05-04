
const Cards=()=>{
    const cards = [
        {
          title: "MOSCOW",
          description: "Veri bilimi, otomasyon ve yapay zeka için güçlü bir dil.",
          icon: "https://lp-cms-production.imgix.net/2023-03/500pxRF_61786861.jpg",
        },
        {
          title: "ST:PETERSBURG",
          description: "Web geliştirme dünyasının vazgeçilmez dili.",
          icon: "https://content.r9cdn.net/rimg/dimg/b2/7e/49f12709-city-13695-162f299a826.jpg?width=1366&height=768&xhint=2005&yhint=1757&crop=true",
        },
        {
          title: "KAZAN",
          description: "Kurumsal uygulamalar ve Android geliştirme için klasik bir tercih.",
          icon: "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/04/19/200121.jpg",
        },
        {
          title: "SOCHI",
          description: ".NET ile masaüstü, oyun ve web geliştirme için ideal.",
          icon: "https://mediaim.expedia.com/destination/1/bef2bf2da8384a0bb9b465cd93bc1f34.jpg",
        },
      ];

    return(
        <div>
            <h1 className="text-3xl text-gray-300 text-center py-5"> TRAVEL </h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6 max-w-20xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-50 h-30 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

        </div>



    )


}

export default Cards            