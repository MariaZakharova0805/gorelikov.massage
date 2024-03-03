import headerSM from "./components/headerSM.svg";
import headerLG from "./components/headerLG.svg";
import { Typography } from "antd";
import { massageStudio, alexGorelikov } from "shared/constants";
import { ButtonAppointment } from "../../entities/ButtonAppointment/ButtonAppointment";
import { ButtonMode } from "entities/ButtonAppointment/modeType";

import styles from "./TopBlock.module.scss";

export const TopBlock = () => {
  return (
    <div className={styles.block}>
      <img className={styles.smallHeader} src={headerSM} alt="massage" />
      <img className={styles.bigHeader} src={headerLG} alt="massage" />
      <Typography className={styles.massageStudio}>{massageStudio}</Typography>
      <Typography className={styles.name}>{alexGorelikov}</Typography>
      <ButtonAppointment mode={ButtonMode.White} />
    </div>
  );
};
