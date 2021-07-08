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
  const { layoutStyles, children } = props;
  return (
    <Container.BodyContainer style={{ ...layoutStyles }}>
      {children}
    </Container.BodyContainer>
  );
};

export default React.memo(Body);
