import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Banner = ({ banner }) => {
  console.log(banner);
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.midLarge}</h1>
        <img
          src={urlFor(banner.image)}
          alt="headphone"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${banner._id}`}>
            <button>{banner.buttonText}</button>
          </Link>
        </div>
        <div className="desc">
          <h5>Description</h5>
          <p>{banner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
