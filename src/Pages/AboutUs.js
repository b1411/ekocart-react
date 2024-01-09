import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import AboutUsTestimonial from "../Components/AboutUsTestimonial";
import BlogSection from "../Components/Blog/BlogSection";
import InstagramSection from "../Components/InstagramSection/InstagramSection";
import LogoSection from "../Components/LogoSection/LogoSection";
import NewsletterSection from "../Components/News/NewsLetterSection";
import PageHeading from "../Components/PageHeading/PageHeading";

function AboutUs() {
    const firstBreadcrumb = { label: "Pages" };
    const secondBreadcrumb = {
        label: "About Us",
        active: true,
    };
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
    const blogs = useSelector((state) => state.blog.blogItems);
    const filteredBlogs = blogs
        .filter(
            (blog) =>
                blog.category.includes("Cloth") ||
                blog.category.includes("Fashion"),
        )
        .slice(0, 3);
    const reasonsData = [
        {
            icon: <i className="las la-credit-card ic-3x text-primary"></i>,
            title: "Широкий ассортимент",
            description: "Мы имеем более 10 000 наименований товаров на наших складах",
        },
        {
            icon: <i className="las la-shipping-fast ic-3x text-primary"></i>,
            title: "Индивидуальный подход",
            description: "Мы долгое время работали в розничных продажах, поэтому знаем, как важно удовлетворить потребности каждого клиента",
        },
        {
            icon: <i className="las la-history ic-3x text-primary"></i>,
            title: "Собственный showroom",
            description: "Мы предлагаем нашим клиентам посетить наш шоурум, чтобы увидеть и потрогать наши продукты вживую",
        },
        {
            icon: <i className="las la-undo-alt ic-3x text-primary"></i>,
            title: "Прямые поставки",
            description: "Мы имеем прямые поставки от производителей, что позволяет нам предлагать лучшие цены на рынке",
        },
    ];
    return (
        <div className="page-wrapper">
            <PageHeading
                title="About Us"
                firstBreadcrumb={firstBreadcrumb}
                secondBreadcrumb={secondBreadcrumb}
            />
            <div className="page-content">
                <section className="p-0">
                    <Container>
                        <div className="row align-items-center justify-content-between">
                            <Col lg="7" mb="6" mbLg="0">
                                <Row className="align-items-center">
                                    <Col md="6">
                                        <img
                                            src="assets/images/about/01.jpg"
                                            className="img-fluid rounded shadow"
                                            alt="..."
                                        />
                                    </Col>
                                    <Col md="6">
                                        <img
                                            src="assets/images/about/02.jpg"
                                            className="img-fluid rounded shadow mb-5"
                                            alt="..."
                                        />
                                        <img
                                            src="assets/images/about/03.jpg"
                                            className="img-fluid rounded shadow"
                                            alt="..."
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="5">
                                <div>
                                    <h6 className="text-primary mb-1">
                                        — О компании
                                    </h6>
                                    <h2 className="mt-3 font-w-5">
                                        Правильное решение для позиционирования
                                        любой компании
                                    </h2>
                                    <p className="lead">
                                        имиджевая сувенирная продукция - это
                                        лицо успешного бизнеса
                                    </p>
                                    <p className="mb-0">
                                        Маленькие вещи создают большие моменты.
                                        Даже незначительный корпоративный
                                        презент уже может увеличить лояльность и
                                        интерес к компании
                                    </p>
                                </div>
                            </Col>
                        </div>
                        <Row className="mt-8">
                            <Col lg="4" md="4">
                                <h5>
                                    <span className="text-primary font-w-7">
                                        01.
                                    </span>{" "}
                                    Наша миссия
                                </h5>
                                <p>
                                    Имиджевая продукция направлена на улучшение
                                    корпоративной идентичности компании, а также
                                    на укрепление ее позиций на рынке
                                </p>
                            </Col>
                            <Col lg="4" md="4">
                                <h5>
                                    <span className="text-primary font-w-7">
                                        02.
                                    </span>{" "}
                                    Наше видение
                                </h5>
                                <p>
                                    Мы считаем, что имиджевая продукция - это не
                                    просто сувенир, а важный инструмент для
                                    продвижения бренда и укрепления связей с
                                    клиентами
                                </p>
                            </Col>
                            <Col lg="4" md="4">
                                <h5>
                                    <span className="text-primary font-w-7">
                                        03.
                                    </span>{" "}
                                    Наши ценности
                                </h5>
                                <p>
                                    Мы ценим творческий подход и
                                    индивидуальность каждого заказа. Мы верим,
                                    что уважение к нашим партнерам и клиентам
                                    является основой успешных отношений
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row className="align-items-end mb-5">
                            <Col lg="6">
                                <div>
                                    <h6 className="text-primary mb-1">
                                        — Почему мы?
                                    </h6>
                                    <h2 className="mb-0">
                                        Отличительные преимущества нашей
                                        компании
                                    </h2>
                                </div>
                            </Col>
                            <Col lg="6">
                                <div>
                                    <p className="lead mb-0">
                                        В мире, где каждая деталь имеет
                                        значение, ИМИДЖ.KZ выделяется своим
                                        уникальным подходом к созданию
                                        сувенирной продукции
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            {reasonsData.map((reason, index) => (
                                <Col lg="3" md="6" key={index}>
                                    <div className="px-4 py-7 rounded text-center border">
                                        {reason.icon}
                                        <h5 className="mt-2 mb-1">
                                            {reason.title}
                                        </h5>
                                        <p className="mb-0">
                                            {reason.description}
                                        </p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
                <AboutUsTestimonial />
                <NewsletterSection />
                <LogoSection logos={logos} />
                <BlogSection blogs={filteredBlogs} title={"Fashion Blogs"} />
                <InstagramSection />
            </div>
        </div>
    );
}

export default AboutUs;
