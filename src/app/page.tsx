"use client";
import { Background } from "@/components/background/background";
import "./main.css";
import { Menu } from "@/components/menu/menu";
import Image from "next/image";
import img from "../../public/favicon.ico";
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
    const g = () => {
      setWidth(window.innerWidth);
    };

    
    window.addEventListener("resize", g);
    return () => {
      window.removeEventListener("resize", g);
    };
  }, []);

  return (
    <div>
      <Background />
        <Suspense>
          <SearchHandler setFormVisible={setFormVisible} />
        </Suspense>
        {formVisible && <div style={{position: "relative"}}><Forma width={width}></Forma>  <button className="form-close" onClick={() => {setFormVisible(!formVisible); document.getElementsByClassName("AAAAAA")[0].classList.remove("hideee");  localStorage.clear();}}><Image src="/close.png" alt="close" width={20} height={20}/></button></div>}
      <main className="main-container" >
        <div>
          <section className="menu-section">
            <Image
              className="logo"
              src={img}
              alt="Logo"
              width={135}
              height={130}
            ></Image>
            {width >= 1024 && <Menu width={width} />}
            <div className="reservation-info-container">
              {width > 1164 && (
                <div className="info-container">
                  <p>Rezervační telefon:</p>
                  <a>+420 607 496 833</a>
                </div>
              )}

              <div onClick={() => {setFormVisible(!formVisible);  document.getElementsByClassName("AAAAAA")[0].classList.add("hideee");}}><ReserveButton /></div>
              {width < 1024 && <Menu width={width} />}
            </div>
          </section>
          <div className="main-text-section">
            <h1 className="prostor-pro-akce">
              {width > 1160 && (
                <div>
                  Prostor pro vaše <span className="action">AKCE</span>
                </div>
              )}
              {width < 500 && (
                <div>
                  Prostor pro vaše <span className="action smallll">AKCE</span>
                </div>
              )}
              {width < 1024 ||
                (1160 >= width && (
                  <div style={{ color: "transparent" }}>
                    Prostor pro vaše AKCE
                  </div>
                ))}
              <span className="action-bpf">
                Bowling&nbsp;&nbsp;&nbsp;Pin-pong&nbsp;&nbsp;&nbsp;Firemní akce
              </span>
            </h1>
            <div className="text-bowling-container">
              <h2 className="bowling-text">Bowlingový Club SV</h2>{" "}
            </div>
          </div>
        </div>
        <section className="second-main-container">
          <div className="white-circle"></div>
          <div className="viwe">
            <Image src={img3} alt="show"></Image>
          </div>
          <div className="container-proch-my">
            <h2 className="proch-my">Proč my?</h2>
            <ul className="proch-items">
              <li>
                <Image src={img4} alt="calender" width={65} height={65}></Image>{" "}
                <p>Jsme nový klub Bolling, který pro vás pracuje již rok.</p>
              </li>
              <li>
                <Image src={img5} alt="calender" width={65} height={65}></Image>{" "}
                <p>Máme také více než tisíc spokojených zákazníků.</p>
              </li>
              <li>
                <Image src={img6} alt="calender" width={65} height={65}></Image>{" "}
                <p>A máme něco pro vás, tak neváhejte a rezervujte u nas.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="third-main-container">
          <h2 className="co-vshehno">Co všechno u nás najdete</h2>
          <Cards />
        </section>
        <section className="fourth-main-container">
          <h2 className="cennik" id="cenni">Ceník bowlingu</h2>
          <div className="price-of-hour">
            <h3>300 Kč</h3>
            <p>
              1 hodina{" "}
              <span className="minimum-plat">minimální platba 1 hodina</span>
            </p>{" "}
            <div className="line"></div>
          </div>
          <div onClick={() => {setFormVisible(!formVisible);document.getElementsByClassName("AAAAAA")[0].classList.add("hideee");}}><ReserveItem txt="Chceš Rezervovat drahu?" /></div> 
        </section>
        <section className="fiveth-main-container">
          <div className="images-container">
            <h2 id="jakto">Jak to u nás vypadá?</h2>
            <DrowImages />
          </div>
        </section>
        <section className="sixth-main-container">
          <h2>Další zajímavosti</h2>
          <div className="information-container">
            <div className="container-of-horizontals">
              <div className="information-container-horizontal">
                <Image
                  src={img9}
                  alt="picture"
                  width={360}
                  height={300}
                ></Image>{" "}
                <p>
                V našich prostorných sálech jsou také velké stoly pro firemní akce, narozeniny a mnoho různých akcí, na které si vzpomenete, a je zde také prostor pro projektory.{" "}
                </p>
              </div>
              <div className="information-container-horizontal">
                <Image
                  src={img7}
                  alt="picture"
                  width={360}
                  height={300}
                ></Image>{" "}
                <p>
                Pro vaše pohodlí a zábavu vašich dětí je k dispozici také dětský koutek, kde se vaše děti mohou zabavit.
                  Dětský koutek je vybaven pestrou škálou hraček a stavebnic.{" "}
                </p>
              </div>
              {width <= 1300 && (
                <div className="information-container-horizontal">
                  <Image
                    src={img8}
                    alt="picture"
                    width={300}
                    height={300}
                  ></Image>{" "}
                  <p>
                  Kromě bollingu pro vás máme také dva tenisové stoly, takže i když vás bolling omrzí, můžete si zahrát něco jiného.{" "}
                  </p>
                </div>
              )}
            </div>
            {width > 1300 && (
              <div className="information-container-vertical">
                <Image
                  src={img8}
                  alt="picture"
                  width={390}
                  height={300}
                ></Image>{" "}
                <p>
                Kromě bowlingu pro vás máme také dva tenisové stoly, takže pokud vás bowling omrzí, můžete si zahrát něco jiného.
                Ping-pong je skvělý způsob, jak se aktivně odreagovat, zasoutěžit si s přáteli nebo si jen tak zahrát pro radost. {" "}
                </p>
              </div>
            )}
          </div>
        </section>
        <section className="seventh-main-container">
          <h2 id="oter">Otevírací doba</h2>
          <div className="pracovni-doba">
            <h3 id="left">Po-Čt - 15:00 - 21:00</h3>
            <h3 id="right">Pá-Ne - 15:00 - 23:00</h3>
          </div>
          <div onClick={() => {setFormVisible(!formVisible); document.getElementsByClassName("AAAAAA")[0].classList.add("hideee");}}><ReserveItem txt="Chceš si u nás taký užít čas naplno?" /></div> 
        </section>
        <footer className="eighth-main-container">
          <div className="kontakt-adresa-container">
            <div className="kontakty-container">
              <h3>Kontakty:</h3>
              <ul>
                <li>+420 607 496 833</li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="adresa-container" id="AAA">
              <h3>Adresa:</h3>
              <p>Nádražní 486,517 21 Týniště nad Orlicí</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps?q=Nádražní+486,517+21+Tyniste+nad+Orlici"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2763584839366!2d16.0724973!3d50.1545601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e9f845d787b9b%3A0x6f78967c2521c37!2sN%C3%A1dra%C5%BEn%C3%AD%20486%2C%20517%2021%20T%C3%BDni%C5%A1t%C4%9B%20nad%20Orlic%C3%AD!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </a>
        </footer>
      </main>
    </div>
  );
}
