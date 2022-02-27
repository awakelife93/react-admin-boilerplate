import { Container } from "@/common/components";
import { IComponent } from "@/common/interface";
import React from "react";

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
