import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, date, boolean, number } from "yup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./form.css";
import axios from "axios";
import { MailSend } from "@/interfaces/mailSend";
import Link from "next/link";
export function Forma(props: {width: number}) {
  console.log(props.width)
  const today = new Date().toISOString().split("T")[0];
  const validation = object().shape({
    fullname: string().required("Requred"),
    email: string().required("Requred").email("Neplatná emailova adresa"),
    telefon: string().required("Requred").matches(/^\+420\s?\d{3}\s?\d{3}\s?\d{3}$/, "Nesprávné zadání"),

    date: date()
      .required("Vyberte datum")
      .min(today, "Datum nesmí být v minulosti"),
    souhlas: boolean().oneOf([true], "Potvrďte svůj souhlas"),
    osob: number()
      .typeError("Zadejte číslo") // Якщо введено не число
      .min(1, "Číslo nemůže být záporné"),
  });
  async function sendMail(values:MailSend, setSubmitting: (isSubmitting: boolean) => void) {
   
  const response =  await axios
      .post("/api/send", values, {
        headers: {
          "Content-Type": "appication/json",
        },
      });

      if(response.status === 200){
         alert("Massage is send");
      }
      if(response.status === 400){
        alert("something went wrong");
      }

      setSubmitting(false);
    
  }
  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        telefon: "+420 ",
        tema: "Rezervace stolu",
        date: "",
        osob: 1,
        Poznamka: "",
        souhlas: false,
      }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        sendMail(values, setSubmitting);
       values.Poznamka = "";
       values.date ="";
       values.email = "";
       values.fullname = "";
       values.osob = 1;
       values.souhlas = false;
       values.telefon = "";
       values.tema = "Rezervace stolu";
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-for-rezervation">
          <div className="back" id="back">
            <h3>Rezervace</h3>
            <p>Rezervace je platná pouze po telefonickém potvrzení</p>
            <div className="container-flex-lable main-tema">
              <label className="lable-tema" htmlFor="tema">
                Predmět
              </label>
              <Field className="tema" name="tema" id="tema" as="select">
                <option value="Rezervace stolu">Rezervace stolu</option>
                <option value="Rezervace bowling">Rezervace bowling</option>
              </Field>
              <ErrorMessage
                className="error-message"
                name="tema"
                component="div"
              />
            </div>
            <div className="form-flex-container">
              <div>
                <div className="container-flex-lable">
                  <label className="lable-fullname" htmlFor="fullname">
                    Jmeno a přijmeni
                  </label>
                  <Field className="fullname" name="fullname" id="fullname" />
                  <ErrorMessage
                    className="error-message"
                    name="fullname"
                    component="div"
                  />
                </div>
                <div className="container-flex-lable">
                  <label className="email" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className="lable-email"
                    name="email"
                    id="email"
                    type="email"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="email"
                    component="div"
                  />
                </div>
                <div className="container-flex-lable">
                  <label className="lable-telefon" htmlFor="telefon">
                    Telefon
                  </label>
                  <Field
                    className="telefon"
                    name="telefon"
                    id="telefon"
                    type="telefon"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="telefon"
                    component="div"
                  />
                </div>
                <div className="container-flex-lable">
                  <label className="lable-osob" htmlFor="osob">
                    Počet osob
                  </label>
                  <Field className="osob" name="osob" id="osob" type="number" />
                  <ErrorMessage
                    className="error-message"
                    name="osob"
                    component="div"
                  />
                </div>
                {props.width >= 480 && <div className="container-flex-souhlas souhlas-container">
                  <label className="lable-souhlas">
                   <u className="pointer"><Link href="/Ochrana_udeje">Souhlasím se zásadami ochrany osobních údajů</Link></u> 
                  </label>
                  <Field className="souhlas" name="souhlas" type="checkbox" />
                  <ErrorMessage
                    className="error-message err-souhl"
                    name="souhlas"
                    component="div"
                  />
                </div>}
              </div>
              <div>
                <div className="container-flex-lable date-container">
                  <label className="lable-date" htmlFor="date">
                    Datum
                  </label>
                  <Field className="date" name="date" id="date" type="date" />
                  <ErrorMessage
                    className="error-message"
                    name="date"
                    component="div"
                  />
                </div>
                <div className="container-flex-lable">
                  <label className="lable-Poznamka" htmlFor="Poznamka">
                    Poznamka
                  </label>
                  <Field
                    className="Poznamka"
                    name="Poznamka"
                    id="Poznamka"
                    as="textarea"
                  />
                  <ErrorMessage
                    className="error-message"
                    name="Poznamka"
                    component="div"
                  />
                </div>
                {props.width < 480 && <div className="container-flex-souhlas souhlas-container">
                  <label className="lable-souhlas">
                  <u className="pointer"><Link href="/Ochrana_udeje">Souhlasím se zásadami ochrany osobních údajů</Link></u>
                  </label>
                  <Field className="souhlas" name="souhlas" type="checkbox" />
                  <ErrorMessage
                    className="error-message err-souhl"
                    name="souhlas"
                    component="div"
                  />
                </div>}
              </div>
            </div>
            <Button
              className="form-button"
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<SendIcon />}
              loading={isSubmitting} // Кнопка буде в режимі loading під час сабміту
              loadingPosition="end"
              disabled={isSubmitting} // Вимикаємо кнопку, поки йде сабміт
            >
              Odeslat
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
