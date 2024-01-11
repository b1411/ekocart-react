import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Banner = () => {
    const options = {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 8000,
    };

    const slides = [
        {
            bgImg: "assets/images/bg/01.png",
            title: "Магазин сувенирной продукции",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/02.png",
            title: "Самая популярная продуцкия на рынке",
            subtitle: "Лидеры продаж",
            button: "View Collection",
        },
        {
            bgImg: "assets/images/bg/03.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/04.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/05.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/06.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/07_1.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_01.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_02.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_03.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_04.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_05.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_06.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_07.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        },
        {
            bgImg: "assets/images/bg/people_08.png",
            title: "Сувенирная продукция",
            subtitle: "IMIDZH.KZ",
            button: "Shop Now",
        }
    ];

    return (
        <div>
            <OwlCarousel
                className="banner-slider owl-carousel no-pb owl-2"
                {...options}
                navText={[
                    "<span class='las la-arrow-left'><span></span></span>",
                    "<span class='las la-arrow-right'><span></span></span>",
                ]}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="item bg-pos-rt"
                        style={{ backgroundImage: `url(${slide.bgImg})` }}
                    >
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                                    <h6 className="font-w-6 text-primary animated3">
                                        {slide.subtitle}
                                    </h6>
                                    <h1 className="mb-4 animated3">
                                        {slide.title}
                                    </h1>
                                    <div className="animated3">
                                        <Link
                                            className="btn btn-primary btn-animated"
                                            to="#"
                                        >
                                            {slide.button}
                                        </Link>
                                    </div>
                                    <div className="hero-circle animated4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default Banner;
