import React from "react";
import { Container, Label } from "../../components";
import { ComponentIE } from "../../interface";
import { CommonColor } from "../../styles";

/**
 * @description Bottom Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Bottom: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  return (
    <Container.BottomContainer>
      <Label.CommonLabel style={{ color: CommonColor.WHITE }}>
        github:{" "}
        <a href="https://github.com/awakelife93" rel="noreferrer" target="_blank">
          https://github.com/awakelife93
        </a>
      </Label.CommonLabel>
    </Container.BottomContainer>
  );
};

export default React.memo(Bottom);
