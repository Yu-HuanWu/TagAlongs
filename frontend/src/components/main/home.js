import Carousel from "./carousel"

const Home = () => {
    return (
        <div className="home">
            <div className="carousel-top">
                <Carousel />
            </div>
            {/* <div className="buffer"/> */}
            <div className="home-bottom">
                <div className="bottom-textbox">
                    sample
                </div>
            </div>
        </div>
    )
}

export default Home; 


// const Home = () => {
//     return (
//         <div className="homepage">
//             <div className="carousel">
//                 <Carousel />
//             </div>
//                 <div className="buffer"/>
//                 <div className="home-mid">
//                     <p>Description/quote</p>
//                 </div>
//          </div>
//     )
// }

// export default Home; 