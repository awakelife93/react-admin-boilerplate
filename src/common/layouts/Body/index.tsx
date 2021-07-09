import React from "react";
import { Container } from "../../components";
import { ComponentIE } from "../../interface";

/**
 * @description Body Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Body: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { children } = props;
  return (
    <Container.BodyContainer style={{ padding: 100 }}>
      {children}
    </Container.BodyContainer>
  );
};

export default React.memo(Body);
