import i18next from "i18next";
export function switchLang(pl, lt)
{
    return i18next.language === "pl"?pl:lt;
}