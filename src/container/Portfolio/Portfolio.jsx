import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "./Portfolio.css";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
// import { themeContext } from "../../Context";
import "../Portfolio/Portfolio"

// const Portfolio = () => {
//     return (
//         <div className="portfolio" id="portfolio">
//             <span>Recent Projects</span>
//             <span>Portfolio</span>

//             <Swiper
//                 spaceBetween={30}
//                 slidesPerView={3}
//                 grabCursor={true}
//                 className="portfolio-slider"
//             >
//                 <SwiperSlide>
//                     <img src={Sidebar} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={Ecommerce} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={HOC} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={MusicApp} alt="" />
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }

// export default Portfolio


const Portfolio = () => {
  return (
    <section class="menu">
        <div class="title">
            <h2>Works</h2>

            <div class="underline"></div>
        </div>
        <div class="btn-container">
            <button class="filter-btn" type="button" data-id="all">all</button>
            <button class="filter-btn" type="button" data-id="breakfast">breakfast</button>
            <button class="filter-btn" type="button" data-id="lunch">lunch</button>
            <button class="filter-btn" type="button" data-id="shakes">shakes</button>

        </div>
        
        <div class="section-center">
            <article class="menu-item">
                {/* <img src={Sidebar} alt="" /> */}
                <div class="item-info">
                    <header>
                        <h4>buttermilk pancakes</h4>
                        <h4 class="price">15$</h4>
                    </header>
                    <p class="item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
                        laboriosam excepturi! Quo, officia.
                    </p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Portfolio