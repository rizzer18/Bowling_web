import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "romanroskanuk74@gmail.com",
        pass: "zxvl krax yacg uhvv",
    }
})

