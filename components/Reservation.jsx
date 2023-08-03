import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";


const Reservation = () => {

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name"
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number"
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Address"
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons"
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            placeholder: "How time"
        }
    ]
    return (
        <div className={"container mx-auto py-12"}>
            <Title addClass={"text-[40px] mb-10"}>Book A Table</Title>
           <div className={"flex justify-between flex-wrap-reverse gap-x-10"}>

               <div className={"lg:flex-1  w-full"}>
                   <div className={"flex flex-col gap-y-3"}>

                       {
                           inputs.map((input) => (
                               <Input key={input.id} {...input}  />
                           ))
                       }

                   </div>
                   <button className={"btn-primary my-4"}>
                       Book NOW
                   </button>
               </div>
               <div className={"lg:flex-1 w-full"}>
                   <iframe
                       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3006.4099016224945!2d29.025596299999997!3d41.10373815453713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e9381e0337%3A0xc03b04a918eecae9!2zxLBUw5wgS2lteWEgTWV0YWx1cmppIEZha8O8bHRlc2k!5e0!3m2!1str!2sus!4v1690976424894!5m2!1str!2sus"
                        allowFullScreen="" loading="lazy" className={"w-full h-full"}
                       referrerPolicy="no-referrer-when-downgrade"></iframe>
               </div>
           </div>

        </div>
    )
}


export default Reservation;
