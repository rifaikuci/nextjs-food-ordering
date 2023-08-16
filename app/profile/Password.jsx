import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import {useFormik} from "formik";
import {newPasswordSchema} from "@/schema/newPassword";
import axios from "axios";


const Password = ({user}) => {

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
                {...user, password: values.password}
            );
            actions.resetForm();
        } catch (err) {
            console.log(err);
        }
    }
    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        enableReinitialize: true,
        initialValues :{
            password: "",
            confirmPassword: "",
            email : "",
            address: "",
            job: "",
            bio: ""
        },
        onSubmit,
        validationSchema: newPasswordSchema
    })

    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 2,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your confirmPassword",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        },
    ];

    return (
        <form className={"lg:p-8 flex-1 lg:mt-0 mt-5"} onSubmit={handleSubmit}>
            <Title addClass={"text-[40px]"}>Password Settings</Title>

            <div className={"grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4"}>
                {
                    inputs.map((input) => (
                        <Input key={input.id} {...input} onChange={handleChange}
                               onBlur={handleBlur}/>
                    ))
                }
            </div>
            <button className={"btn-primary mt-4"} type={"submit"}>Update</button>
        </form>
    )
}

export default Password;
