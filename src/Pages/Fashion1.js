import React from "react";
import { useSelector } from "react-redux";
import BlogSection from "../Components/Blog/BlogSection";
import CountDown from "../Components/Countdown/CountDown";
import FeatureIndex from "../Components/Feature/FeatureIndex";
import BannerSliderIndex from "../Components/Hero Banner/BannerSlideIndex";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import LogoSection from "../Components/LogoSection/LogoSection";
import NewsletterSection from "../Components/News/NewsLetterSection";
import NewCollection from "../Components/Our Products/NewCollection";
import Section from "../Components/Section/Section";
import ProductIndex from "../Components/Trending/ProductIndex";

export default function Index() {
  const feature = [
    {
      icon: "las la-truck ic-2x text-primary",
      title: "Бесплатная доставка",
      description: "Для корпоративных клиентов",
    },
    {
      icon: "las la-hand-holding-usd ic-2x text-primary",
      title: "Скорость",
      description: "Выполним заказ не позднее 14 рабочих дней",
    },
    {
      icon: "las la-lock ic-2x text-primary",
      title: "Качество",
      description: "Даем качество, за которое несем ответственность",
    },
    {
      icon: "las la-headset ic-2x text-primary",
      title: "Низкие цены",
      description: "Корпоративные скидки для наших клиентов",
    },
  ];

  const logos = [
    "assets/images/client/01.png",
    "assets/images/client/02.png",
    "assets/images/client/03.png",
    "assets/images/client/04.png",
    "assets/images/client/05.png",
    "assets/images/client/06.png",
    "assets/images/client/07.png",
    "assets/images/client/08.png",
  ];
  const blogs = useSelector(
    (state) => state.blog.blogItems
  );
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.includes("Cloth") || blog.category.includes("Fashion")
  ).slice(0, 4);


  return (
    <div className="page-wrapper">
      <BannerSliderIndex />
      <div className="page-content">
        <FeatureIndex feature={feature} />
        <ProductIndex />
        <CountDown />
        <NewCollection />
        <Section />
        <NewsletterSection />
        <LogoSection logos={logos} />
        <BlogSection blogs={filteredBlogs} title={"Fashion Blog"} />
        <InstagramSection />
      </div>
    </div>
  );
}
