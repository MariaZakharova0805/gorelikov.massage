import { socialLinks } from "shared/constants";

export const MainPage = () => (
  <div>
    {/* <ButtonAppointment /> */}
    <div style={{ backgroundColor: "green" }}>
      {socialLinks.map((link) => (
        <a key={link.id} target="_blank" href={link.link} rel="noreferrer">
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);
