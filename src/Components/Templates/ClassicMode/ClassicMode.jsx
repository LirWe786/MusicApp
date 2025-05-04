import UploadBtn from "../../Atoms/uploadBtn/UploadBtn";
const ClassicMode = ({ children }) => {
    return (

        <>
            <header>
                <div className="logo">
                    <img width={50} src="./icons/logo.png" />
                    <img width={200} src="/logo-yandex.png" alt="" />
                </div>
                <UploadBtn />
            </header>
            {children}
        </>
    )
}
export default ClassicMode;