

// buradaki children sana gönderdiğim componenti olduğu gibi göster demek
const Title  = ({children, addClass}) => {
    return (
        <div className={`${addClass} font-dancing font-bold`}>{children}</div>
    )
}



export default Title;
