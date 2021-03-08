
import * as yup from "yup";

export const registerSchema = yup.object().shape({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup
      .string()
      .email("That is not a valid email address.")
      .required("Email is Required."),
    password: yup
      .string()
      .required("Please enter a password.")
      .max(50,"Too long")
      .min(8,"Too short"),
    confirmPassword: yup
      .string()
      .required("You must confirm your password.")
      .max(50,"Too long")
      .min(8,"Too short"),
    adminPassword: yup
      .string()
      .required("You must enter the admin password.")
  })

export const signInSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter an valid email")
      .required("Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .max(50, "Too long")
      .min(6, "Too short")
  });


export const forgotPasswordSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Please enter your email."),
  })

export const addRichTextArticleSchema = yup.object().shape({
    title: yup
        .string()
        .required("A title is required."),
    date: yup
        .string()
        .required("A date is required."),
    body: yup
        .string()
        .required("A body paragraph is required."),
    status: yup
        .string()
        .required("A status is required."),
})

export const addPdfArticleSchema = yup.object().shape({
  title: yup
      .string()
      .required("A title is required."),
  date: yup
      .string()
      .required("A date is required."),
  status: yup
      .string()
      .required("A status is required."),
})

export const editRichTextArticleSchema = yup.object().shape({
  title: yup
      .string()
      .required("A title is required."),
  date: yup
      .string()
      .required("A date is required."),
  body: yup
      .string()
      .required("A body paragraph is required."),
  status: yup
      .string()
      .required("A status is required."),
})

export const editPdfArticleSchema = yup.object().shape({
  title: yup
      .string()
      .required("A title is required."),
  date: yup
      .string()
      .required("A date is required."),
  pdfUrl: yup
      .string()
      .required("A PDF URL is required."),
  status: yup
      .string()
      .required("A status is required."),
})