import {FaFacebook, FaLinkedin} from "react-icons/fa";

export default function PageFooter() {
    return (
        <footer className={"py-20"}>
            <div className="container flex flex-col md:flex-row justify-between gap-6">
                <div>
                    <h2 className={"text-4xl font-bold uppercase mb-6"}>Hydrovertic</h2>
                    <p>Copyright © 2023 Hydrovertic. All rights reserved.</p>
                </div>

                <div className={"grid md:justify-items-end"}>
                    <h3 className={"mb-4 text-secondary"}>Lorem ipsum dolor sit amet</h3>

                    <div className={"flex gap-4 text-2xl text-primary"}>
                        <FaLinkedin className={"cursor-pointer"}/>
                        <FaFacebook className={"cursor-pointer"}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}