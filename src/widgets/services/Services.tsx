import { Section } from "UI/shared/section/Section";
import { Col, Row, Typography } from "antd";
import { servesiesTitle } from "shared/constants";

import styles from "./Services.module.scss";
import { MassageList } from "./componets/MassageList";
import { useState } from "react";
import { layoutCol, massageTypes } from "./constants";
import { Descriptions } from "./componets/Descriptions";

export const Services = () => {
  const [massageType, setMassageType] = useState(massageTypes[0]);
  const [massageDetailed, setMassageDetailed] = useState(massageTypes[0].types[0]);

  return (
    <Section>
      <Typography className={styles.header}>{servesiesTitle}</Typography>
      <Row gutter={[24, 24]}>
        <Col {...layoutCol}>
          <MassageList
            massageType={massageType}
            setMassageType={setMassageType}
          />
        </Col>

        <Col {...layoutCol}>
          <Descriptions massageDetailed={massageDetailed} />
        </Col>
      </Row>
    </Section>
  );
};
