


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.movieflix.visiontrek.in/games.json")
      .then((res) => {
        const allGames = res.data?.segments?.[0]?.hits || [];

        // Convert id from URL and game.id
        const current = allGames.find((g) => String(g.id) === String(id));
        setGame(current);

        // Related games (exclude current game)
        setRelated(allGames.filter((g) => String(g.id) !== String(id)).slice(0, 12));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  

  if (loading)
    return <p className="text-white p-4">Loading game details...</p>;

  if (!game)
    return (
      <div className="bg-black min-h-screen p-4 text-white">
        <Link
  to="/"
  className=" no-underline w-[150px] h-[54px] bg-gradient-to-b from-[#45484d] to-[#000000] border border-[black] text-[#F0F8FF] 
             font-bold text-[16px] rounded-[8px] flex items-center justify-center gap-9   
             px-3 duration-300 mt-[14px] mr-[-98px] ml-[15px]"
>
  <div className="text-right">
    <span className="text-[20px]">Back</span>
  </div>
</Link>
        <h2>Game not found</h2>
      </div>
    );

  return (
    <div className="bg-black  p-4 text-white">
<Link
  to="/"
  className=" no-underline w-[150px] h-[54px] bg-gradient-to-b from-[#45484d] to-[#000000] border border-[black] text-[#F0F8FF] 
             font-bold text-[16px] rounded-[8px] flex items-center justify-center gap-9   
             px-3 duration-300 mt-[14px] mr-[-98px] ml-[15px]"
>
  <div className="text-right">
    <span className="text-[20px]">Back</span>
  </div>
</Link>



      
      {/* Embed iframe directly */}
      {game.embed ? (
        <div
          className="w-full  bg-[black] flex flex-row justify-center"
          dangerouslySetInnerHTML={{ __html: game.embed 
          }}
       
        />

        
      ) : (
        <p>No playable video available.</p>
      )}


 
<div className="bg-[black]">
  <h2 className="text-[white] text-center text-[50px] ml-[45px] font-[sans-serif] pt-[50px]">
    Related games
  </h2>

  <div
    style={{
      paddingLeft: "40px",
      backgroundColor: "black",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", // Default small screen: 2 columns
      gap: "10px",
    }}
    className="related-grid"
  >
    {related.map((g, index) => (
      <Link
        key={`${g.id}-${index}`}
        to={`/game/${g.id}`}
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            width: "280px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {g.images?.[0] && (
            <img
              src={g.images[0]}
              alt={g.title}
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
              loading="lazy"
            />
          )}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "18px",
              padding: "8px",
              boxSizing: "border-box",
              textAlign: "center",
              fontWeight: "bold",
              height: "58px",
            }}
          >
            {g.title}
          </div>
        </div>
      </Link>
    ))}
  </div>

  <style>
    {`
      @media (min-width: 1024px) {
        .related-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
      }
    `}
  </style>
</div>

  

    </div>
  );
};  

export default GameDetail;














// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const GameDetail = () => {
//   const { id } = useParams();
//   const [game, setGame] = useState(null);
//   const [related, setRelated] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     axios.get("https://www.movieflix.visiontrek.in/games.json").then((res) => {
//       const allGames = res.data?.segments?.[0]?.hits || [];
//       const current = allGames.find((g) => g.id === id);
//       setGame(current);
//       setRelated(allGames.filter((g) => g.id !== id).slice(0, 6));
//       setLoading(false);
//     }).catch(() => {
//       setLoading(false);
//     });
//   }, [id]);

//   if (loading) return <p className="text-white p-4">Loading...</p>;

//   if (!game) return (
//     <div className="bg-black min-h-screen p-4 text-white">
//       <Link to="/" className="text-blue-400 underline">← Back to Home</Link>
//       <h2>Game not found</h2>
//     </div>
//   );

//   return (
//     <div className="bg-black min-h-screen p-4 text-white">
//       <Link to="/" className="text-blue-400 underline">← Back to Home</Link>
//       <h1 className="text-3xl font-bold mb-4">{game.title}</h1>

//       {/* Embed iframe directly */}
//       {game.embed ? (
//         <div
//           className="w-full h-[80vh]"
//           dangerouslySetInnerHTML={{ __html: game.embed }}
//           style={{ borderRadius: 8, overflow: "hidden" }}
//         />
//       ) : (
//         <p>No playable video available.</p>
//       )}

//       <h2 className="text-xl mt-8 mb-4">Related Games</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {related.map((g) => (
//           <Link key={g.id} to={`/game/${g.id}`}>
//             <div className="bg-gray-800 p-2 rounded hover:scale-105 transition">
//               <img
//                 src={g.images?.[0]}
//                 alt={g.title}
//                 className="w-full h-32 object-cover rounded"
//               />
//               <p className="mt-2 text-sm truncate">{g.title}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameDetail;

