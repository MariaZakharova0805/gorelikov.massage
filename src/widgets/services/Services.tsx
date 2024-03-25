import { Section } from "UI/shared/section/Section";
import { Col, Row, Typography } from "antd";
import { servesiesTitle } from "shared/constants";

import styles from "./Services.module.scss";
import { MassageList } from "./componets/MassageList";
import { useMemo, useState } from "react";
import { layoutCol, massageChildren } from "./constants";

import { Descriptions } from "./componets/Descriptions";
import { ServicesContext } from "./ServicesCotext";

export const Services = () => {
  const [massageDetailed, setMassageDetailed] = useState(massageChildren[0]);

  const contextValue = useMemo(
    () => ({
      massageDetailed,
      setMassageDetailed,
    }),
    [massageDetailed, setMassageDetailed]
  );

  return (
    <ServicesContext.Provider value={contextValue}>
      <Section>
        <Typography className={styles.header}>{servesiesTitle}</Typography>
        <Row gutter={[24, 24]}>
          <Col {...layoutCol}>
            <MassageList />
          </Col>
          <Col {...layoutCol}>
            <Descriptions />
          </Col>
        </Row>
      </Section>
    </ServicesContext.Provider>
  );
};
