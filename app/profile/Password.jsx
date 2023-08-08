import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import {useFormik} from "formik";
import {profileSchema} from "@/schema/profile";
import {registerSchema} from "@/schema/register";
import {newPasswordSchema} from "@/schema/newPassword";


const Password = () => {

    const onSubmit = async (values, actions) => {
        await  new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    }
    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
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
