

import React from "react";
import { Carousel } from "primereact/carousel";


const Trending = () => {
  const myImages = [
    {
      id: 1,
      name: "Image 1",
      url: "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    },
    {
      id: 2,
      name: "Image 2",
      url: 
      "https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    },
    {
      id: 3,
      name: "Image 3",
      url: 
      "https://image.tmdb.org/t/p/w300/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    },
    {
      id: 4,
      name: "Image 4",
      url: 
      "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    },
    {
      id: 5,
      name: "Image 5",
      url: 
      "https://image.tmdb.org/t/p/w300/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
    },
    {
      id: 6,
      name: "Image 6",
      url: "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfJZxrUMQVK-tj5TP3oOiIW0LlJc7_OC4hXnqnb_vQQw4eyonCwo1l4QO_zAMSSaorVZuyRWqLsLzaIVxbLLBQ4iT4udE0Xavfg.webp?r=39e&quot",
    },
    {
      id: 7,
      name: "Image 7",
      url: 
      "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABU73BvQjJgydQFEJ-vZZw9QtO8fL6lIxc71x9tOqxgDWh_BHokCWPIbGC5AxJjDk0D_sIH5KhmmYm9HLr3DKUXg8eo6nzF0rtSI.webp?r=d95&quot",
    },
    {
    id: 8,
      name: "Image 8",
      url: 
    "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSBGJoQ0k2B9-eb4IAfopMoQlulqXfsG5r2G0nM9CTAyEf5oWYOQ1GB9iAQ0exY95P6m9a3JuzTwiVTC_OfouvikM374cD5inVAKuLfUC994jSnXVThyUwsD6Wkv_NMDVVrh.jpg?r=fb9&quot",
    },
    {
      id: 9,
      name: "Image 2",
      url: 
      "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVkShQoc0X2_TeJErnUpwlDkRIW8mfr9aOefcMxbGZ6kPqJ801XTAXl9xHBacrTjiyWqUKeu1dcQcHzmyijoz5tQh9svjTBDS6w.jpg?r=923&quot",
    },
    {
      id: 10,
      name: "Image 2",
      url: 
      "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWS-EyoFBa-Svry6VvSCb6i3SN_WT20j-Iy5uiKWKH9rNk9qGhr97KLX_so6qg-EGRk5kyuXamvO6bwxx_DptuTt_iIGWIAxkoA.jpg?r=c23&quot",
    },
    {
      id: 11,
      name: "Image 2",
      url: 
      "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABViqdtr9ZatqPa3P9T418vFq3iq4Ma4x1JUNFKxbIS5dPSoG_5VkNoEKXKBODntJNx_mCT_z0fcGegToBNEHLaVr3qyqSGDY67I.jpg?r=062&quot",
    },
    {
      id: 12,
      name: "Image 2",
      url: 
      "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABct1RW0RPLDOf1ivX-O0WGjNZ5Cb9XH086B0iar_brke2zA_qSPaseR9omexohvwcqSIm6RzR7tnnEbdVFCOxWUK6B7IEWrgXkTICkd1stuvXZlhnBW8ptU-G1umAuxG_A_y.jpg?r=81a&quot",
    },
    {
      id: 13,
      name: "Image 2",
      url: 
      "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYlo6eZBHIh4qTUy1RuL3mpTK2CkAhudzN3RsUcah9lWNRU10dYiQgcbJ4tZgagHjQEVLFLauTRACI8cfuhivM5OgYyRzVTd9usbeVGMelGcNllJQH2TZwGQfoT_bOgdy95K.jpg?r=89b&quot",
    },
  ];

  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 ,},
    { breakpoint: "768px", numVisible: 2, numScroll: 1 },
    { breakpoint: "560px", numVisible: 1, numScroll: 1 },
  ];

  const imageTemplate = (item) => (
    <div className="m-2 w-[98px] bg-[black]">
      <img
        src={item.url}
        alt={item.name}
        className="w-[190px] h-[260px]  sm:w-[170px] sm:h-[230px] md:w-[170px] md:h-[230px]
         gap-8 rounded-[14px] border-2 border-[black] shadow-lg"
      />
    </div>
  );

  return (
    <div className="card mt-[-550px]  ml-[150px] mr-[194px]  sm:ml-[-0px] sm:mr-[-10px]  
    ">
       <div className="text-[white] text-left text-[38px] font-bold ml-[5px] mb-[20px] font-[sans-serif]">
          Trending Movies
        </div>
      <Carousel
        value={myImages}
        itemTemplate={imageTemplate}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
      />
    </div>
  );
};

export default Trending;
















// import React from "react";
// import { Carousel } from "primereact/carousel";

// const Trending = () => {
//   const myImages = [
//     {
//       id: 1,
//       name: "Image 1",
//       url: "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
//     },
//     {
//       id: 2,
//       name: "Image 2",
//       url: 
//       "https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
//     },
//     {
//       id: 3,
//       name: "Image 3",
//       url: 
//       "https://image.tmdb.org/t/p/w300/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
//     },
//     {
//       id: 4,
//       name: "Image 4",
//       url: 
//       "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
//     },
//     {
//       id: 5,
//       name: "Image 5",
//       url: 
//       "https://image.tmdb.org/t/p/w300/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
//     },
//     {
//       id: 6,
//       name: "Image 6",
//       url: "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfJZxrUMQVK-tj5TP3oOiIW0LlJc7_OC4hXnqnb_vQQw4eyonCwo1l4QO_zAMSSaorVZuyRWqLsLzaIVxbLLBQ4iT4udE0Xavfg.webp?r=39e&quot",
//     },
//     {
//       id: 7,
//       name: "Image 7",
//       url: 
//       "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABU73BvQjJgydQFEJ-vZZw9QtO8fL6lIxc71x9tOqxgDWh_BHokCWPIbGC5AxJjDk0D_sIH5KhmmYm9HLr3DKUXg8eo6nzF0rtSI.webp?r=d95&quot",
//     },
//     {
//     id: 8,
//       name: "Image 8",
//       url: 
//     "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSBGJoQ0k2B9-eb4IAfopMoQlulqXfsG5r2G0nM9CTAyEf5oWYOQ1GB9iAQ0exY95P6m9a3JuzTwiVTC_OfouvikM374cD5inVAKuLfUC994jSnXVThyUwsD6Wkv_NMDVVrh.jpg?r=fb9&quot",
//     },
//     {
//       id: 9,
//       name: "Image 2",
//       url: 
//       "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVkShQoc0X2_TeJErnUpwlDkRIW8mfr9aOefcMxbGZ6kPqJ801XTAXl9xHBacrTjiyWqUKeu1dcQcHzmyijoz5tQh9svjTBDS6w.jpg?r=923&quot",
//     },
//     {
//       id: 10,
//       name: "Image 2",
//       url: 
//       "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWS-EyoFBa-Svry6VvSCb6i3SN_WT20j-Iy5uiKWKH9rNk9qGhr97KLX_so6qg-EGRk5kyuXamvO6bwxx_DptuTt_iIGWIAxkoA.jpg?r=c23&quot",
//     },
//     {
//       id: 11,
//       name: "Image 2",
//       url: 
//       "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABViqdtr9ZatqPa3P9T418vFq3iq4Ma4x1JUNFKxbIS5dPSoG_5VkNoEKXKBODntJNx_mCT_z0fcGegToBNEHLaVr3qyqSGDY67I.jpg?r=062&quot",
//     },
//     {
//       id: 12,
//       name: "Image 2",
//       url: 
//       "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABct1RW0RPLDOf1ivX-O0WGjNZ5Cb9XH086B0iar_brke2zA_qSPaseR9omexohvwcqSIm6RzR7tnnEbdVFCOxWUK6B7IEWrgXkTICkd1stuvXZlhnBW8ptU-G1umAuxG_A_y.jpg?r=81a&quot",
//     },
//     {
//       id: 13,
//       name: "Image 2",
//       url: 
//       "https://occ-0-2991-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYlo6eZBHIh4qTUy1RuL3mpTK2CkAhudzN3RsUcah9lWNRU10dYiQgcbJ4tZgagHjQEVLFLauTRACI8cfuhivM5OgYyRzVTd9usbeVGMelGcNllJQH2TZwGQfoT_bOgdy95K.jpg?r=89b&quot",
//     },
//   ];

//   const responsiveOptions = [
//     { breakpoint: "1024px", numVisible: 4, numScroll: 1 },
//     { breakpoint: "768px", numVisible: 4, numScroll: 1 }, // keep same layout
//     { breakpoint: "560px", numVisible: 4, numScroll: 1 }, // keep same layout
//   ];

//   const imageTemplate = (item) => (
//     <div className="m-2 w-[98px]">
//       <img
//         src={item.url}
//         alt={item.name}
//         className="w-[145px] h-[210px] rounded-[14px] border-2 border-[black] shadow-lg"
//       />
//     </div>
//   );

//   return (
//     <div className="card mt-[-600px] px-2 ml-[20px] mr-[20px] sm:ml-[100px] sm:mr-[100px] md:ml-[180px] md:mr-[180px] lg:ml-[250px] lg:mr-[294px]">
//       <div className="text-white text-left text-[38px] font-bold ml-[5px] mb-[20px] font-[sans-serif]">
//         Trending Movies
//       </div>
//       <Carousel
//         value={myImages}
//         itemTemplate={imageTemplate}
//         numVisible={4}
//         numScroll={1}
//         responsiveOptions={responsiveOptions}
//         circular
//         autoplayInterval={3000}
//       />
//     </div>
//   );
// };

// export default Trending;

