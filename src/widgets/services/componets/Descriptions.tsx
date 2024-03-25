import styles from "../Services.module.scss";
import { useServicesContextContext } from "../ServicesCotext";

export const Descriptions = () => {
  const { massageDetailed, setMassageDetailed } = useServicesContextContext();

  return <div className={styles.descriptions}>{massageDetailed.name}</div>;
};
