import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import HeaderNavBar from "./HeaderNavBar";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <HeaderTop />
        <HeaderMiddle
          options={[
            { value: "all", label: "Все категории" },
            { value: "men", label: "Мужская" },
            { value: "women", label: "Женская" },
            { value: "kids", label: "Детская" },
          ]}
        />
        <HeaderNavBar />
      </header>
    </>
  );
}
