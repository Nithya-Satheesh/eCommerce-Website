import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Home(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <Announcement />
      <Navbar
        backgroundColor={props.backgroundColor}
        primaryColor={props.primaryColor}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />
      <Carousel
        backgroundColor={props.backgroundColor}
        primaryColor={props.primaryColor}
      />
      <Footer
        backgroundColor={props.backgroundColor}
        primaryColor={props.primaryColor}
      />
    </div>
  );
}

export default Home;
