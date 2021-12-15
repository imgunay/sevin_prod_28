

var rellax = new Rellax('.rellax');


// let percent = 0
//   // window.addEventListener("scroll", function () {
//   //   const parallax = document.querySelector(".invition-container")
//   //   let scrollPosition = window.pageYOffset
//   //   if (scrollPosition > window.scrollY) {
//   //     percent++
//   //     console.log(percent);
//   //   } else if (scrollPosition < window.scrollY) {
//   //     percent--
//   //     // console.log(percent);
//   //   }
//   //   // let percent = Math.floor(scrollPosition / 100 * 2)
//   //   // percent++
//   //   console.log(percent)
//   //   parallax.style.transform = `translate3d(0px, ${percent}px ,0px)`
//   // })


//   const [y, setY] = useState(window.scrollY);

// const handleNavigation = useCallback(
//   e => {
//     const window = e.currentTarget;
//     if (y > window.scrollY) {
//       // percent--
//       console.log(true);
//     } else if (y < window.scrollY) {
//       percent++
//       console.log(false);
//     }
//     setY(window.scrollY);
//     console.log(percent)
//     const parallax = document.querySelector(".invition-container")
//     parallax.style.transform = `translate3d(0px, ${percent}px ,0px)`
//   }, [y,percent]
  
// );

// useEffect(() => {
//   setY(window.scrollY);
//   window.addEventListener("scroll", handleNavigation);

//   return () => {
//     window.removeEventListener("scroll", handleNavigation);
//   };
// }, [handleNavigation]);