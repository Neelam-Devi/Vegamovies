
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PlayIcon } from "@heroicons/react/24/solid"; 

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("https://www.movieflix.visiontrek.in/games.json").then((res) => {
      const data = res.data?.segments?.[0]?.hits || [];
      setGames(data);
    });
  }, []);

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">All Games</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {games.map((game) => (
          <Link key={game.id} to={`/game/${game.id}`}>
            <div className="relative rounded-lg overflow-hidden group">
              {/* Background image */}
              <img
                src={game.images?.[0]}
                alt={game.title}
                className="w-full h-40 object-cover transform group-hover:scale-105 transition"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text content */}
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="text-sm font-bold">{game.title}</h3>
                <p className="text-yellow-400 text-xs">Regarder la vidéo</p>
              </div>

              {/* Play icon */}
              <div className="absolute bottom-2 right-2">
                <PlayIcon className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesList;





















// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const GamesList = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     axios.get("https://www.movieflix.visiontrek.in/games.json").then((res) => {
//       const data = res.data?.segments?.[0]?.hits || [];
//       setGames(data);
//     });
//   }, []);

//   return (
//     <div className="bg-black min-h-screen p-4 text-[white]">
//       <h1 className="text-3xl font-bold mb-6">All Games</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//         {games.map((game) => (
//           <Link key={game.id} to={`/game/${game.id}`}>
//             <div className="bg-gray-800 p-2  rounded hover:scale-105 transition">
//               <img
//                 src={game.images?.[0]}
//                 alt={game.title}
//                 className="w-full h-32 object-cover rounded"
//               />
//               <p className="mt-2 text-sm truncate">{game.title}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GamesList;



