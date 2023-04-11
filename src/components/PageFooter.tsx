import {FaFacebook, FaLinkedin} from "react-icons/fa";

export default function PageFooter() {
    return (
        <footer className={"py-20"}>
            <div className="container flex justify-between">
                <div>
                    <h2 className={"text-4xl font-bold uppercase mb-6"}>Hydrovertic</h2>
                    <p>Copyright © 2023 Hydrovertic. All rights reserved.</p>
                </div>

                <div className={"grid justify-items-end"}>
                    <h3 className={"mb-4"}>Lorem ipsum dolor sit amet</h3>

                    <div className={"flex gap-4 text-2xl"}>
                        <FaLinkedin className={"cursor-pointer"}/>
                        <FaFacebook className={"cursor-pointer"}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}