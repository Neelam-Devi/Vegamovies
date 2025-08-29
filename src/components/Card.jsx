


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react"; 
import loaderAnim from "../assets/loading.json"; 
import arrow from "../assets/arrow.png";

const CardSection = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 375);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.movieflix.visiontrek.in/games.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const hits = data?.segments?.[0]?.hits || [];
        setGames(hits);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 368);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px] mt-[300px] bg-black">
        <Lottie animationData={loaderAnim} loop={true} style={{ height: 200, width: 200 }} />
      </div>
    );
  }

  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  const filteredGames = games.filter((g) => g.id && g.slug);

  const cardsToShow = isSmallScreen
    ? filteredGames.slice(0, 6)
    : filteredGames.slice(0, 8);

  return (
    <div className="text-[white] ">
      {/* Heading + Arrow */}
      <div className="flex items-center justify-between px-[45px] mt-[368px]">
        <div className="text-[white] text-left text-[38px] font-bold ml-[5px]  h-[58px] mb-[-0px] font-[sans-serif]">
          Games Section
        </div>
        <img
          src={arrow}
          alt="See More"
          onClick={() => navigate("/games")}
          className="h-[30px] w-[40px] cursor-pointer hover:opacity-80"
        />
      </div>

      <div style={styles.container}>
        {cardsToShow.map((game, index) => (
          <Link
            to={`/game/${game.id}`}
            key={`${game.id}-${index}`}
            style={{ textDecoration: "none" }}
          >
            <div style={styles.card}>
              {game.images && game.images.length > 0 && (
                <img
                  src={game.images[0]}
                  alt={game.title}
                  style={styles.image}
                  loading="lazy"
                />
              )}
              <div style={styles.titleOverlay}>{game.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "black",
  },
  card: {
    backgroundColor: "#fff",
    width: "280px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  image: {
    width: "280px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  titleOverlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "265px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    fontSize: "18px",
    padding: "8px",
    textAlign: "center",
    fontWeight: "bold",
    height: "58px",
  },
};

export default CardSection;




















// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import arrow from "../assets/arrow.png";

// const CardSection = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 375);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch games data
//     fetch("https://www.movieflix.visiontrek.in/games.json")
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         const hits = data?.segments?.[0]?.hits || [];
//         setGames(hits);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message || "Error fetching data");
//         setLoading(false);
//       });

//     // Screen resize listener
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 368);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (loading) return <div style={{ color: "white" }}>Loading games...</div>;
//   if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

//   const filteredGames = games.filter((g) => g.id && g.slug);

//   // 6 cards for small screen, 8 for large
//   const cardsToShow = isSmallScreen
//     ? filteredGames.slice(0, 6)
//     : filteredGames.slice(0, 8);

//   return (
//     <div className="text-[white] ">
//       {/* Heading + Arrow */}
//       <div className="flex items-center justify-between px-[45px] mt-[368px]">
//         <div className="text-[white] text-left text-[38px] font-bold ml-[5px]  h-[58px] mb-[-0px] font-[sans-serif]">
//           Games Section
//         </div>
//         <img
//           src={arrow}
//           alt="See More"
//           onClick={() => navigate("/games")}
//           className="h-[30px] w-[40px] cursor-pointer hover:opacity-80"
//         />
//       </div>

//       <div style={styles.container}>
//         {cardsToShow.map((game, index) => (
//           <Link
//             to={`/game/${game.id}`}
//             key={`${game.id}-${index}`}
//             style={{ textDecoration: "none" }}
//           >
//             <div style={styles.card}>
//               {game.images && game.images.length > 0 && (
//                 <img
//                   src={game.images[0]}
//                   alt={game.title}
//                   style={styles.image}
//                   loading="lazy"
//                 />
//               )}
//               <div style={styles.titleOverlay}>{game.title}</div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     gap: "20px",
//     padding: "20px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     backgroundColor: "black",
//     // background: "linear-gradient(to bottom,#40106e, #3d1266, #39135e, #361357, #32144f)"

//   },
//   card: {
//     backgroundColor: "#fff",
//     width: "280px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     borderRadius: "8px",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     position: "relative",
//   },
//   image: {
//     width: "280px",
//     height: "280px",
//     objectFit: "cover",
//     borderRadius: "6px",
//   },
//   titleOverlay: {
//     position: "absolute",
//     bottom: "0",
//     left: "0",
//     width: "265px",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     color: "white",
//     fontSize: "18px",
//     padding: "8px",
//     textAlign: "center",
//     fontWeight: "bold",
//     height: "58px",
//   },
// };

// export default CardSection;
















