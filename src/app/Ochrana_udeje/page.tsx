
import Link from "next/link";
import "./och.css";
export default function Ochrana_Udaj() {
  return (
       <main className="containerAAA">
        <Link href={{ pathname: "/", query: { info: true }}} className="CLoseChandler" >X</Link>
        <div className="backgroundAAA"></div>
        <h1 className="A1">Prohlášení o ochraně osobních údajů</h1>

        <h2 className="A2">I. Základní ustanovení</h2>
        <p className="A3">1. Správcem osobních údajů podle článku 6 Nařízení Evropského parlamentu a Rady 2016/679 (GDPR) je <strong>[NÁZEV FIRMY]</strong>, IČ: <strong>[IČ]</strong>, se sídlem <strong>[ADRESA]</strong> (dále jen „správce“).</p>
        <p className="A3">2. Kontaktní údaje správce:</p>
        <ul className="FF">
            <li>Adresa: <strong>[ADRESA]</strong></li>
            <li>E-mail: <strong>[E-MAIL]</strong></li>
            <li>Telefon: <strong>[TELEFON]</strong></li>
        </ul>

        <h2 className="A2">II. Zpracovávané údaje a zdroj</h2>
        <p className="A3">1. Zpracováváme pouze údaje, které nám poskytujete prostřednictvím objednávkového formuláře:</p>
        <ul className="FF">
            <li>Jméno a příjmení</li>
            <li>Telefonní číslo</li>
            <li>E-mailová adresa</li>
        </ul>

        <h2 className="A2">III. Účel a právní důvod zpracování</h2>
        <p className="A3">1. Účel zpracování: Vaše údaje slouží výhradně k vytvoření a vyřízení objednávky.</p>
        <p className="A3">2. Právní důvod zpracování: Zpracování je nezbytné pro uzavření a plnění smlouvy (objednávky) na základě článku 6 odst. 1 písm. b) GDPR.</p>

        <h2 className="A2">IV. Doba uchovávání údajů</h2>
        <p className="A3">1. Vaše osobní údaje uchováváme pouze po dobu potřebnou k vyřízení objednávky, konkrétně do 1 dne po uskutečnění objednávky.</p>
        <p className="A3">2. Po uplynutí této doby jsou všechny osobní údaje řádně vymazány.</p>

        <h2 className="A2">V. Příjemci údajů</h2>
        <p className="A3">1. Vaše osobní údaje nejsou předávány třetím osobám, s výjimkou případů, kdy to zákon vyžaduje.</p>

        <h2 className="A2">VI. Zabezpečení údajů</h2>
        <p className="A3">1. Správce zpracovává údaje jako firma a zavádí vhodná technická a organizační opatření k zabezpečení osobních údajů.</p>
        <p className="A3">2. K osobním údajům mají přístup pouze osoby pověřené zpracováním v rámci společnosti.</p>

        <h2>VII. Práva subjektu údajů</h2>
        <p className="A3">Máte právo:</p>
        <ul className="FF">
            <li>Požádat o přístup ke svým osobním údajům</li>
            <li>Požádat o opravu nebo výmaz osobních údajů</li>
            <li>Omezit zpracování osobních údajů</li>
            <li>Vznést námitku proti zpracování osobních údajů</li>
        </ul>
        <p className="A3">Pro uplatnění těchto práv nás prosím kontaktujte na výše uvedených kontaktních údajích.</p>

        <h2 className="A2">VIII. Závěrečná ustanovení</h2>
        <p className="A3">1. Odesláním objednávky z internetového formuláře potvrzujete, že jste seznámeni s podmínkami ochrany osobních údajů a akceptujete je v celém rozsahu.</p>
        <p className="A3">2. Správce je oprávněn tyto podmínky kdykoli měnit. Aktuální verzi podmínek zveřejní na svých internetových stránkách.</p>
     </main>
  );
}
