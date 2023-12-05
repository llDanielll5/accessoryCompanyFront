//@ts-nocheck
/* eslint-disable */

import React from "react";
import Script from "next/script";
import HeaderLanding from "@/components/landing/header";
import HomeLanding from "@/components/landing/home";
import ProductsLanding from "@/components/landing/products";
import CategoriesLanding from "@/components/landing/categories";
import ReviewsLanding from "@/components/landing/reviews";
import BlogsLanding from "@/components/landing/blogs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <title>Accessory Company · Seu acessório aqui!</title>

      <HeaderLanding />
      <HomeLanding />
      <ProductsLanding />
      <CategoriesLanding />
      <ReviewsLanding />
      <BlogsLanding />
      <Footer />

      <Script type="text/javascript" src="js/script.js" />
      <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" />
    </>
  );
}
