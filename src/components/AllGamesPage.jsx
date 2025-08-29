

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json"; // place your Lottie JSON here

const AllGamesPage = () => {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState(8); // show 8 at start
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
        !loadingMore &&
        visibleGames < games.length
      ) {
        setLoadingMore(true);
        setTimeout(() => {
          setVisibleGames((prev) => prev + 8); // next 8 (2 cols × 4 rows)
          setLoadingMore(false);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore, visibleGames, games.length]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <Lottie animationData={loadingAnimation} loop={true} style={{ width: 200, height: 200 }} />
      </div>
    );
  }

  if (error) return <div style={{ color: "red", padding: 20 }}>Error: {error}</div>;

  const filteredGames = games.filter((g) => g.id && g.slug);



  return (
    <>

{/* Back Button */}

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

      <div className="bg-[black] py-[48px]">
        <div className="text-[white] text-center text-[50px] ml-[45px] mt-[-47px] m-0 font-[sans-serif]">
          Games Section
        </div>
      </div>
  
      <div className="games-grid" style={styles.container}>
        {filteredGames.slice(0, visibleGames).map((game, index) => (
          <Link
            to={`/game/${game.id}`}
            key={`${game.id}-${index}`}
            style={{ textDecoration: "none" }}
          >
            <div style={{ ...styles.card, position: "relative" }}>
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
  
      {loadingMore && (
        <div style={styles.loadingMoreContainer}>
          <Lottie
            animationData={loadingAnimation}
            loop
            style={{ width: 120, height: 120 }}
          />
        </div>
      )}
  
      {/* Put the style **inside the fragment** */}
      <style>
        {`
          .games-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* small screens */
            gap: 20px;
            padding: 20px;
            padding-top: 40px;
          }
          @media (min-width: 1024px) {
            .games-grid {
              grid-template-columns: repeat(4, 1fr); /* large screens */
            }
          }
        `}
      </style>
    </>
  );
  


};

const styles = {
  container: {
    display: "grid",
    // gridTemplateColumns: "repeat(4, 1fr)",

    gap: "20px",
    padding: "20px",
    backgroundColor: "black",
    minHeight: "100vh",
  },
 


  card: {
    background: "linear-gradient(to bottom, #45484d 0%, #000000 100%)",
    border: "1px solid white",
    color: "#F0F8FF",
    fontWeight: "bold",
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "6px 6px 0 0",
  },
  titleOverlay: {
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
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "black",
  },
  loadingMoreContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
};

export default AllGamesPage;

















// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


// const AllGamesPage = () => {
//   const [games, setGames] = useState([]);
//   const [visibleGames, setVisibleGames] = useState(8); // show 8 at start
//   const [loading, setLoading] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
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
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
//         !loadingMore &&
//         visibleGames < games.length
//       ) {
//         setLoadingMore(true);
//         setTimeout(() => {
//           setVisibleGames((prev) => prev + 8); // next 8 (2 cols × 4 rows)
//           setLoadingMore(false);
//         }, 5000);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loadingMore, visibleGames, games.length]);

//   if (loading) return <div style={{ color: "white", padding: 20 }}>Loading games...</div>;
//   if (error) return <div style={{ color: "red", padding: 20 }}>Error: {error}</div>;

//   const filteredGames = games.filter((g) => g.id && g.slug);

//   return (
//     <>
//       <div className="bg-[black] py-[48px]">
//         <div className="text-[white] text-center text-[50px] ml-[45px] m-0 font-[sans-serif]">
//           Games Section
//         </div>
//       </div>

//       <div style={styles.container}>
//         {filteredGames.slice(0, visibleGames).map((game, index) => (
//           <Link
//             to={`/game/${game.id}`}
//             key={`${game.id}-${index}`}
//             style={{ textDecoration: "none" }}
//           >
//             <div style={{ ...styles.card, position: "relative" }}>
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

//       {loadingMore && (
//         <div style={{ color: "white", textAlign: "center", padding: "20px" }}>
//           Loading more games...
//         </div>
//       )}
//     </>
//   );
// };

// const styles = {
//   container: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "20px",
//     padding: "20px",
//     backgroundColor: "black",
//     minHeight: "100vh",
//   },
//   card: {
//     background: "linear-gradient(to bottom, #45484d 0%, #000000 100%)",
//     border: "1px solid white",
//     color: "#F0F8FF",
//     fontWeight: "bold",
//     fontSize: "16px",
//     textTransform: "none",
//     boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.2)",
//     borderRadius: "8px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "280px",
//     objectFit: "cover",
//     borderRadius: "6px 6px 0 0",
//   },
//   titleOverlay: {
//     position: "absolute",
//     bottom: "0",
//     left: "0",
//     width: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     color: "white",
//     fontSize: "18px",
//     padding: "8px",
//     boxSizing: "border-box",
//     textAlign: "center",
//     fontWeight: "bold",
//     height: "58px",
//   },
// };

// export default AllGamesPage;
