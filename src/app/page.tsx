"use client";
import { Background } from "@/components/background/background";
import "./main.css";
import { Menu } from "@/components/menu/menu";
import Image from "next/image";
import img from "../../public/logo512.png";
import img3 from "../../public/IMG-20250111-WA0032.jpeg";
import img7 from "../../public/IMG-20250111-WA0020.jpeg";
import img8 from "../../public/IMG-20250111-WA0030.jpeg";
import img9 from "../../public/IMG-20250111-WA0019.jpeg";
import img4 from "../../public/calendar.png";
import img5 from "../../public/handshake.png";
import img6 from "../../public/schedule.png";
import { ReserveButton } from "@/components/reserve/reserveButton";
import { Cards } from "@/components/cards/cards";
import { ReserveItem } from "@/components/reserve/reservationItem";
import { DrowImages } from "@/components/drawImages/images";
import { Suspense, useEffect, useState } from "react";
import { Forma } from "@/components/form/form";
import { useRouter, useSearchParams } from "next/navigation"; 

function SearchHandler({ setFormVisible }: { setFormVisible: (val: boolean) => void }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("info") === "true") {
      setFormVisible(true);

      const newParams = new URLSearchParams(searchParams);
      newParams.set("info", "false");

      router.replace(`?${newParams.toString()}`);
    }
  }, [searchParams, setFormVisible, router]);

  return null;
}

export default function Home() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [formVisible, setFormVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (formVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [formVisible]);

  return (
    <div>
      <Background />
      <Suspense fallback={null}>
        <SearchHandler setFormVisible={setFormVisible} />
      </Suspense>

      {formVisible && (
        <Forma width={width} onClose={() => setFormVisible(false)} />
      )}

      <main className="main-container">
        {/* Navigation & Header */}
        <header className="site-header">
          <a href="#" className="logo-link">
            <Image
              className="logo-img"
              src={img}
              alt="Bowlingový Club SV Logo"
              width={56}
              height={56}
            />
          </a>

          <Menu />

          <div className="reservation-info-container">
            <div className="phone-badge">
              <label>Rezervace telefon:</label>
              <a href="tel:+420607496833">+420 607 496 833</a>
            </div>

            <div onClick={() => setFormVisible(true)}>
              <ReserveButton />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-subtitle-badge">
            ⚡ Vítejte v Bowlingovém Klubu SV
          </div>

          <h1 className="hero-title">
            Prostor pro vaše <span className="text-gradient">AKCE</span>
          </h1>

          <h2 className="hero-subheading">Bowlingový Club SV</h2>

          <div className="activity-pills">
            <span className="activity-pill">🎳 Bowling</span>
            <span className="activity-pill">🏓 Ping-pong</span>
            <span className="activity-pill">🥳 Firemní akce</span>
            <span className="activity-pill">🎉 Narozeninové oslavy</span>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="why-us-section">
          <div className="why-us-image-container">
            <div className="why-us-image-card">
              <Image src={img3} alt="Bowlingový Club SV Interiér" />
              <div className="why-us-image-overlay-badge">
                <span className="badge-star">⭐</span>
                <div className="badge-text-group">
                  <span className="badge-title">1000+ Hostů</span>
                  <span className="badge-sub">Bowlingový Club SV</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-header-block left-align">
              <span className="section-badge">O NÁŠEM KLUBU</span>
              <h2 className="section-title">Proč si vybrat právě nás?</h2>
            </div>

            <div className="why-us-cards">
              <div className="why-us-card glass-card">
                <div className="why-us-card-num">01</div>
                <div className="why-us-card-icon">
                  <Image src={img4} alt="Kalendář" width={32} height={32} />
                </div>
                <div className="why-us-card-content">
                  <h4>1 Rok tradice a zábavy</h4>
                  <p>Jsme nový bowlingový klub v Týništi nad Orlicí, který pro vás s láskou pracuje již celý rok.</p>
                </div>
              </div>

              <div className="why-us-card glass-card">
                <div className="why-us-card-num">02</div>
                <div className="why-us-card-icon">
                  <Image src={img5} alt="Spokojenost" width={32} height={32} />
                </div>
                <div className="why-us-card-content">
                  <h4>1000+ Spokojených zákazníků</h4>
                  <p>Máme za sebou stovky uspořádaných akcí a více než tisíc spokojených a stálých hostů.</p>
                </div>
              </div>

              <div className="why-us-card glass-card">
                <div className="why-us-card-num">03</div>
                <div className="why-us-card-icon">
                  <Image src={img6} alt="Rezervace" width={32} height={32} />
                </div>
                <div className="why-us-card-content">
                  <h4>Rychlá rezervace dráhy</h4>
                  <p>Připravili jsme pro vás skvělý zážitek – neváhejte a rezervujte si dráhu ještě dnes!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Offerings */}
        <section className="services-section">
          <div className="section-header-block">
            <span className="section-badge">Naše nabídka</span>
            <h2 className="section-title">Co všechno u nás najdete</h2>
          </div>
          <Cards onReserve={() => setFormVisible(true)} />
        </section>

        {/* Pricing Section */}
        <section className="pricing-section" id="cenni">
          <div className="section-header-block">
            <span className="section-badge">Férové ceny</span>
            <h2 className="section-title">Ceník bowlingu</h2>
          </div>
          <div className="pricing-card">
            <span className="pricing-badge">Nejlepší zážitek</span>
            <div className="pricing-amount">300 Kč</div>
            <div className="pricing-detail">1 hodina hry</div>
            <div className="pricing-note">minimální platba je 1 hodina</div>
          </div>

          <div onClick={() => setFormVisible(true)}>
            <ReserveItem txt="Chceš si rezervovat dráhu?" />
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="gallery-section" id="jakto">
          <div className="section-header-block">
            <span className="section-badge">Fotogalerie</span>
            <h2 className="section-title">Jak to u nás vypadá?</h2>
          </div>
          <DrowImages />
        </section>

        {/* Highlights Section */}
        <section className="highlights-section">
          <div className="section-header-block">
            <span className="section-badge">Aktivity & Vybavení</span>
            <h2 className="section-title">Další zajímavosti</h2>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <Image src={img9} alt="Prostorné sály" className="highlight-card-img" />
              <div className="highlight-card-body">
                <p>
                  V našich prostorných sálech jsou velké stoly pro firemní akce, narozeniny a rodinná setkání s možností využití projektoru.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <Image src={img7} alt="Dětský koutek" className="highlight-card-img" />
              <div className="highlight-card-body">
                <p>
                  Pro vaše pohodlí a zábavu dětí je k dispozici dětský koutek s pestrou škálou hraček a stavebnic.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <Image src={img8} alt="Ping pong stoly" className="highlight-card-img" />
              <div className="highlight-card-body">
                <p>
                  Kromě bowlingu máme k dispozici dva tenisové stoly na ping-pong pro aktivní odpočinek s přáteli.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="hours-section" id="oter">
          <div className="section-header-block">
            <span className="section-badge">Kdy nás navštívit</span>
            <h2 className="section-title">Otevírací doba</h2>
          </div>
          <div className="hours-card">
            <div className="hours-row">
              <span className="hours-day">Pondělí – Čtvrtek</span>
              <span className="hours-time">15:00 – 21:00</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Pátek – Neděle</span>
              <span className="hours-time">15:00 – 23:00</span>
            </div>
          </div>

          <div onClick={() => setFormVisible(true)}>
            <ReserveItem txt="Chceš si u nás užít čas naplno?" />
          </div>
        </section>

        {/* Footer & Contacts */}
        <footer className="footer-section" id="AAA">
          <div className="footer-info-card">
            <div className="footer-block">
              <h3>Telefonické rezervace:</h3>
              <a href="tel:+420607496833">+420 607 496 833</a>
            </div>
            <div className="footer-block">
              <h3>Adresa:</h3>
              <p>Nádražní 486, 517 21 Týniště nad Orlicí</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2763584839366!2d16.0724973!3d50.1545601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e9f845d787b9b%3A0x6f78967c2521c37!2sN%C3%A1dra%C5%BEn%C3%AD%20486%2C%20517%2021%20T%C3%BDni%C5%A1t%C4%9B%20nad%20Orlic%C3%AD!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              loading="lazy"
              title="Bowlingový Club SV adresa v Google Maps"
            ></iframe>
          </div>
        </footer>
      </main>
    </div>
  );
}


