import React from "react";
import { Container } from "../../components";
import { IComponent } from "../../interface";

/**
 * @description Body Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Body: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { children } = props;
  return (
    <Container.BodyContainer style={{ padding: 30 }}>
      {children}
    </Container.BodyContainer>
  );
};

export default React.memo(Body);
