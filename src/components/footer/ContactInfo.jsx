import * as React from "react";

const ContactInfo = ({ icon, text }) => {
    return (
        <div className="flex gap-5">
            <img
                loading="lazy"
                src={icon}
                className="object-contain shrink-0 aspect-[1.04] w-[29px]"
                alt=""
            />
            <div className="self-start basis-auto">{text}</div>
        </div>
    );
}

export default ContactInfo;