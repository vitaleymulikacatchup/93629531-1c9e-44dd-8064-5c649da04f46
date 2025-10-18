"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Feather, Coffee } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/6684777/pexels-photo-6684777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women standing confidently behind a counter in a coffee shop."},
  {"id":"about-image","url":"https://images.pexels.com/photos/6166751/pexels-photo-6166751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A hand pouring milk to create latte art in a coffee cup, top view."},
  {"id":"product-espresso","url":"https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A stylish espresso in a porcelain cup on a wooden table, perfect for coffee lovers."},
  {"id":"product-cappuccino","url":"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista pouring milk to create latte art in a coffee cup."},
  {"id":"product-latte","url":"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista pouring milk to create latte art in a coffee cup."}
];

export default function Page() {
  return (
    <ThemeProvider 
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          brandName="Coffee Bliss"
          buttonText="Contact"
          buttonVariant="slide-background"
        />
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroBillboard
            title="Welcome to Coffee Bliss"
            description="Experience the finest brews and warmth in every cup."
            imageSrc="https://images.pexels.com/photos/6684777/pexels-photo-6684777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Explore", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SplitAbout
            title="About Coffee Bliss"
            description="At Coffee Bliss, we are passionate about crafting the perfect coffee experience. Our mission is to bring people together over a cup of excellence."
            bulletPoints={[
              { title: "Quality Beans", description: "Sourced from the best farms around the world.", icon: Feather },
              { title: "Expert Baristas", description: "Trained to create the perfect brew every time.", icon: Coffee }
            ]}
            imageSrc="https://images.pexels.com/photos/6166751/pexels-photo-6166751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imagePosition="right"
          />
        </div>
      </div>
      <div id="product" data-section="product" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ProductCardOne
            title="Our Coffee Selection"
            description="Discover a variety of flavors and brews tailored to your taste."
            products={[
              { id: "1", name: "Espresso", price: "$3.00", imageSrc: "https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Cappuccino", price: "$3.50", imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", name: "Latte", price: "$4.00", imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactCenter
            tag="Stay in Touch"
            title="Join Our Newsletter"
            description="Get the latest updates and exclusive offers directly in your inbox."
            inputPlaceholder="Your email address"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBase
            columns={[
              { title: "About", items: [{ label: "About Us", href: "about" }]},
              { title: "Contact", items: [{ label: "Contact", href: "contact" }]}
            ]}
            copyrightText="© 2025 Coffee Bliss"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}