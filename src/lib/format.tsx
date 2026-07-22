import React from "react";

export function formatPhoneHref(href: string) {
    return href
        .replace(/^tel:/, "")
        .replace(/^(\+91)(\d{5})(\d{5})$/, "$1 $2 $3");
}

export function formatWhatsappHref(href: string) {
    return href
        .replace(/^https:\/\/wa\.me\//, "")
        .replace(/^(\+91)(\d{5})(\d{5})$/, "$1 $2 $3");
}

export function formatEmailHref(href: string) {
    return href.replace(/^mailto:/, "");
}

export function formatWebsiteHref(href: string) {
    return href
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .replace(/\/$/, "");
}

export function renderGradientWords(text: string) {
    const words = text.split(" ");

    return words.map((word, index) => (
        <React.Fragment key={index + text}>
            <span className="px-1 text-grad-primary bg-linear-to-t">{word}</span>
            {/* {index < words.length - 1 && " "} */}
        </React.Fragment>
    ));
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long", });

    const getOrdinal = (n: number) => {
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return (
        <>
            {day}<sup>{getOrdinal(day)}</sup> {month} {year}
        </>
    );
}