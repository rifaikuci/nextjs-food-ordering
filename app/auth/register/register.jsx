import { useFormik } from "formik";
import Link from "next/link";
import { registerSchema} from "@/schema/register";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import axios from "axios";
import {toast} from "react-toastify";

const Register = () => {
    const onSubmit = async (values, actions) => {

        try {
            const res = await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register/`, values);
            if(res.status === 200) {
                console.log(res);
                toast.success("User created successful")
            }
        }catch (e) {
            toast.error(e.response.data.message)
        }
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            onSubmit,
            validationSchema: registerSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your fullName",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your confirmPassword",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ];

    return (
        <div className="container mx-auto">
            <form
                className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
                onSubmit={handleSubmit}
            >
                <Title addClass="text-[40px] mb-6">Register</Title>
                <div className="flex flex-col gap-y-2 w-full">
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-full gap-y-3 mt-6">
                    <button className="btn-primary" type={"submit"}>REGISTER</button>
                    <Link href="/auth/login">
            <span className="text-sm underline cursor-pointer text-secondary">
              Do you no have a account?
            </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
