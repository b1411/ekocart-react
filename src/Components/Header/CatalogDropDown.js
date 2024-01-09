import React from "react";
import { Link } from "react-router-dom";

function CatalogDropDown({ title, catalogoryLinks }) {
    return (
        <li className="nav-item dropdown position-static">
            <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-toggle="dropdown"
            >
                {title}
            </Link>
            <div className="dropdown-menu w-100">
                <div className="container p-0">
                    <div className="row w-100 no-gutters">
                        <div className="col-lg-12 p-lg-3">
                            <div className="row">
                                {catalogoryLinks.map((catalogoryLink) => (
                                    <div
                                        className="col-12 col-md-3 col-sm-6"
                                        key={catalogoryLink}
                                    >
                                        <div className="mb-3 font-weight-bold">
                                            {catalogoryLink.title}
                                        </div>
                                        <ul className="list-unstyled mb-6 mb-md-0">
                                            {catalogoryLink.links.map(
                                                (link) => (
                                                    <li key={link}>
                                                        <Link to={link.url}>
                                                            {link.title}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CatalogDropDown;
