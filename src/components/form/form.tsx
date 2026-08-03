"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, date, boolean, number } from "yup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./form.css";
import axios from "axios";
import { MailSend } from "@/interfaces/mailSend";
import Link from "next/link";

export function Forma(props: { width: number; onClose?: () => void }) {
  const today = new Date().toISOString().split("T")[0];

  const validation = object().shape({
    fullname: string().required("Povinné pole"),
    email: string().required("Povinné pole").email("Neplatná emailová adresa"),
    telefon: string()
      .required("Povinné pole")
      .matches(/^\+420\s?\d{3}\s?\d{3}\s?\d{3}$/, "Formát: +420 123 456 789"),
    date: date()
      .required("Vyberte datum")
      .min(today, "Datum nesmí být v minulosti"),
    souhlas: boolean().oneOf([true], "Potvrďte svůj souhlas"),
    osob: number()
      .typeError("Zadejte číslo")
      .min(1, "Minimálně 1 osoba")
      .max(50, "Maximálně 50 osob"),
    Poznamka: string().max(1000),
  });

  function SaveData(data: {
    fullname: string;
    email: string;
    telefon: string;
    tema: string;
    date: string;
    osob: number;
    Poznamka: string;
    souhlas: boolean;
  }) {
    for (const element in data) {
      localStorage.setItem(`${element}`, `${data[element as keyof typeof data]}`);
    }
  }

  async function sendMail(
    values: MailSend,
    setSubmitting: (isSubmitting: boolean) => void
  ) {
    try {
      const response = await axios.post("/api/send", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Rezervace byla úspěšně odeslána!");
      } else {
        alert("Něco se nepodařilo, zkuste to prosím znovu.");
      }
    } catch {
      alert("Chyba při odesílání.");
    }

    localStorage.clear();
    setSubmitting(false);
    if (props.onClose) props.onClose();
  }

  return (
    <div className="form-modal-backdrop">
      <div className="form-modal-card">
        {props.onClose && (
          <button className="form-close-btn" onClick={props.onClose} aria-label="Close">
            ✕
          </button>
        )}
        <div className="form-modal-header">
          <h2 className="form-modal-title">Rezervace Stolu / Dráhy</h2>
          <p className="form-modal-subtitle">
            Rezervace je platná pouze po našem telefonickém potvrzení
          </p>
        </div>

        <Formik
          initialValues={{
            fullname: localStorage.getItem("fullname") || "",
            email: localStorage.getItem("email") || "",
            telefon: localStorage.getItem("telefon") || "+420 ",
            tema: localStorage.getItem("tema") || "Rezervace stolu",
            date: localStorage.getItem("date") || "",
            osob: parseInt(localStorage.getItem("osob") ?? "1") || 1,
            Poznamka: localStorage.getItem("Poznamka") || "",
            souhlas: false,
          }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            sendMail(values, setSubmitting);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <div className="form-grid">
                <div className="form-field-group full-width">
                  <label className="form-label" htmlFor="tema">
                    Předmět rezervace
                  </label>
                  <Field className="form-select" name="tema" id="tema" as="select">
                    <option value="Rezervace stolu">Rezervace stolu</option>
                    <option value="Rezervace bowling">Rezervace bowlingové dráhy</option>
                  </Field>
                  <ErrorMessage className="form-error" name="tema" component="div" />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="fullname">
                    Jméno a příjmení
                  </label>
                  <Field className="form-input" name="fullname" id="fullname" placeholder="Jan Novák" />
                  <ErrorMessage className="form-error" name="fullname" component="div" />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="email">
                    E-mail
                  </label>
                  <Field className="form-input" name="email" id="email" type="email" placeholder="jan@example.cz" />
                  <ErrorMessage className="form-error" name="email" component="div" />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="telefon">
                    Telefon
                  </label>
                  <Field className="form-input" name="telefon" id="telefon" type="text" />
                  <ErrorMessage className="form-error" name="telefon" component="div" />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="osob">
                    Počet osob
                  </label>
                  <Field className="form-input" name="osob" id="osob" type="number" min="1" max="50" />
                  <ErrorMessage className="form-error" name="osob" component="div" />
                </div>

                <div className="form-field-group full-width">
                  <label className="form-label" htmlFor="date">
                    Datum rezervace
                  </label>
                  <Field className="form-input" name="date" id="date" type="date" />
                  <ErrorMessage className="form-error" name="date" component="div" />
                </div>

                <div className="form-field-group full-width">
                  <label className="form-label" htmlFor="Poznamka">
                    Poznámka
                  </label>
                  <Field
                    className="form-textarea"
                    name="Poznamka"
                    id="Poznamka"
                    as="textarea"
                    placeholder="Speciální přání, čas rezervace apod."
                  />
                  <ErrorMessage className="form-error" name="Poznamka" component="div" />
                </div>

                <div className="form-field-group full-width">
                  <div className="form-checkbox-group">
                    <Field className="souhlas" name="souhlas" type="checkbox" id="souhlas" />
                    <label className="form-checkbox-label" htmlFor="souhlas">
                      <u
                        className="pointer"
                        onClick={() => {
                          SaveData(values);
                        }}
                      >
                        <Link href="/Ochrana_udeje">
                          Souhlasím se zásadami ochrany osobních údajů
                        </Link>
                      </u>
                    </label>
                  </div>
                  <ErrorMessage className="form-error" name="souhlas" component="div" />
                </div>
              </div>

              <div className="form-submit-wrapper">
                <Button
                  className="form-button"
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  disabled={isSubmitting}
                  sx={{
                    background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
                    color: "#060913",
                    fontWeight: 700,
                    borderRadius: "12px",
                    padding: "12px 32px",
                    textTransform: "none",
                    fontSize: "16px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #10b981 0%, #00f2fe 100%)",
                      boxShadow: "0 0 20px rgba(0, 242, 254, 0.4)",
                    },
                  }}
                >
                  Odeslat rezervaci
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

