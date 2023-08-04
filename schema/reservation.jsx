import  * as Yup from "yup";


export  const reservationSchema = Yup.object({

    fullName: Yup.string()
        .required("Full name is required")
        .min(3, "Full name must be at least 3 characters"),
    phoneNumber: Yup.string()
        .required("phoneNumber is required")
        .min(10, "phoneNumber must be at least 10 characters"),
    email: Yup.string()
        .required("email is required")
        .email("email is invalid"),
    person: Yup.string()
        .required("person is required"),
    date: Yup.string()
        .required("Date is required")
})
