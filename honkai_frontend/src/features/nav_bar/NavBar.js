import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavbarNumber } from "../../store/actions/navbarActions";

function NavBar() {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(1);

  const handleImageClick = (imageNumber) => {
    setSelectedImage(imageNumber);
    dispatch(setNavbarNumber(imageNumber));
  };

  useEffect(() => {}, [selectedImage]);

  return (
    <>
      <div className="nav-bar-container">
        <img
          src="https://honkai.s3.amazonaws.com/c_images/korone.png"
          alt="korone"
          width="80"
          height="80"
          onClick={() => handleImageClick(2)}
          className={selectedImage === 2 ? "selected" : ""}
        />
        <img
          src="https://honkai.s3.amazonaws.com/c_images/pekora.png"
          alt="pekora"
          width="80"
          height="80"
          onClick={() => handleImageClick(1)}
          className={selectedImage === 1 ? "selected" : ""}
        />
      </div>
    </>
  );
}

export default NavBar;
