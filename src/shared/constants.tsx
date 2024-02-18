import FacebookBefore from "../UI/icons/FacebookBefore";
import InstagramBefore from "../UI/icons/InstagramBefore";
import VKBefore from "../UI/icons/VKBefore";
import { v4 as uuidv4 } from "uuid";
import WhatsAppBefore from "../UI/icons/WhatsAppBefore";
import TelegramBefore from "../UI/icons/TelegramBefore";
import { InstagramFooter } from "UI/icons/InstagramFooter";
import VKFooter from "../UI/icons/VKFooter";
import FacebookFooter from "../UI/icons/FacebookFooter";
import WhatsAppFooter from "../UI/icons/WhatsAppFooter";
import TelegramFooter from "../UI/icons/TelegramFooter";
import EmailFooter from "UI/icons/EmailFooter";

export const appointmentLink = "https://www.google.kz/?hl=ru";
export const phoneNumber = "+7 995 919 77 49";
export const baseName = "massage.gorelikov";

export const massageStudio = "Студия массажа";
export const alexGorelikov = "Александра Гореликова";
export const makeAppointment = "Записаться";
export const servesiesTitle = "Услуги студии";
export const aboutStudioTitle = "О студии";
export const resultsTitle = "Результаты клиентов";
export const contactsTitle = "Контакты студии";
export const instaWarning =
  "Instagram продукт компании Мета, запрещенной на территории РФ";

export const allRigthReserved = "© 2024 Все права защищены";
export const menuItems = [
  { id: uuidv4(), name: "услуги" },
  { id: uuidv4(), name: "о студии" },
  { id: uuidv4(), name: "отзывы" },
  { id: uuidv4(), name: "контакты" },
];

export const socialLinks = [
  {
    id: uuidv4(),
    header: true,
    footer: true,
    link: "https://www.instagram.com/massage.gorelikov",
    icon: <InstagramBefore />,
    iconFooter: <InstagramFooter />,
    name: `Instagram.com/${baseName}`,
  },
  {
    id: uuidv4(),
    header: true,
    footer: true,
    link: "https://vk.com/aleksandr49gorelikov",
    icon: <VKBefore />,
    iconFooter: <VKFooter />,
    name: "Vk.com/aleksandr49gorelikov",
  },
  {
    id: uuidv4(),
    header: true,
    footer: true,
    link: "https://www.facebook.com/massage.gorelikov",
    icon: <FacebookBefore />,
    iconFooter: <FacebookFooter />,
    name: `Facebook.com/${baseName}`,
  },
  {
    id: uuidv4(),
    header: true,
    footer: true,
    link: "https://wa.me/79959197749",
    icon: <WhatsAppBefore />,
    iconFooter: <WhatsAppFooter />,
    name: `WhatsApp ${phoneNumber}`,
  },
  {
    id: uuidv4(),
    header: true,
    footer: true,
    link: "https://t.me/+79959197749",
    icon: <TelegramBefore />,
    iconFooter: <TelegramFooter />,
    name: `@${baseName}`,
  },
  {
    id: uuidv4(),
    name: "Email",
    link: `${baseName}@mail.ru`,
    iconFooter: <EmailFooter />,
    text: `${baseName}@mail.ru`,
    footer: true,
    header: false,
  },
];

const saloon = "Салон красоты в Москвe";
export const adresses = [
  {
    id: uuidv4(),
    adress: "г. Москва, Измайловский пр., д. 10 к. 2",
    saloon: "салон красоты “B-Beauty”",
    days: "Понедельник, Среда",
    time: "с 10:00 до 21:00",
    src: "https://yandex.ru/map-widget/v1/org/b_beauty/71813641185/?ll=37.770223%2C55.794113&z=16",
    href: "https://yandex.ru/maps/org/b_beauty/71813641185/?utm_medium=mapframe&utm_source=maps",
    linkText: "B-beauty на карте Москвы — Яндекс Карты",
    desc: "Ногтевая студия в Москве",
    saloonName: "B-beauty",
    yandexTitle: saloon,
  },
  {
    id: uuidv4(),
    adress: "г. Москва, ул. Сумская, д. 6 к. 1",
    saloon: "салон красоты “Broadway“",
    days: "Четверг, Воскресенье",
    time: "с 09:00 до 21:00 ",
    src: "https://yandex.ru/map-widget/v1/org/broadway/1289926858/?ll=37.605062%2C55.624057&z=16",
    href: "https://yandex.ru/maps/org/broadway/1289926858/?utm_medium=mapframe&utm_source=maps",
    linkText: "“Broadway“ на карте Москвы — Яндекс Карты",
    desc: "Визажисты, стилисты в Москве",
    saloonName: "Broadway",
    yandexTitle: saloon,
  },
];
