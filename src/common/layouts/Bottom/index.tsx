import { Container, Label } from "@/common/components";
import { IComponent } from "@/common/interface";
import { CommonColor } from "@/common/styles";
import React from "react";

/**
 * @description Bottom Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Bottom: React.FC<IComponent> = (
  props: IComponent
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
