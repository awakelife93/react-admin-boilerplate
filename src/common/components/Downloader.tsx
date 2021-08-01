import _ from "lodash";
import React from "react";
import { useCallback, useEffect, useRef } from "react";
import { CSSProperties } from "styled-components";
import { Container, InputBox, Label } from ".";

interface DownLoaderIE {
  children?: React.ReactElement;
  fileType?: string;
  containerStyles?: CSSProperties;
  labelStyles?: CSSProperties;
  containerStyleItems?: {
    hoverBackgroundColor?: string;
    defaultBackgroundColor?: string;
    activeBackgroundColor?: string;
  };
  next: Function;
}
/**
 * DownLoader
 * @description 다운로드 컴포넌트이다.
 * @param {DownLoaderIE} props
 * @returns {React.ReactElement}
 */
const DownLoader: React.FC<DownLoaderIE> = (
  props: DownLoaderIE
): React.ReactElement => {
  const downloadInput: React.MutableRefObject<any> = useRef<HTMLDivElement>();
  const {
    children,
    next,
    fileType,
    containerStyles,
    labelStyles,
    containerStyleItems,
  } = props;

  const init = () => {
    if (downloadInput.current) {
      downloadInput.current.value = "";
    }
  };

  const handleFileInput = useCallback(
    (e: any): void => {
      next(e.target.files[0]);
      init();
    },
    [next]
  );

  useEffect(() => {
    return () => {
      init();
    };
  }, []);

  if (_.isEmpty(containerStyleItems)) {
    return (
      <Container.LayoutContainer style={{ ...containerStyles }}>
        <Label.CommonLabel htmlFor={"input-file"} style={{ ...labelStyles }}>
          {children}
        </Label.CommonLabel>
        <InputBox.CommonInputBox
          ref={downloadInput}
          type={"file"}
          accept={fileType}
          id={"input-file"}
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
      </Container.LayoutContainer>
    );
  } else {
    return (
      <Container.DynamicColorContainer
        style={{ ...containerStyles }}
        hoverBackgroundColor={containerStyleItems?.hoverBackgroundColor}
        defaultBackgroundColor={containerStyleItems?.defaultBackgroundColor}
        activeBackgroundColor={containerStyleItems?.activeBackgroundColor}
      >
        <Label.CommonLabel htmlFor={"input-file"} style={{ ...labelStyles }}>
          {children}
        </Label.CommonLabel>
        <InputBox.CommonInputBox
          ref={downloadInput}
          type={"file"}
          accept={fileType}
          id={"input-file"}
          style={{ display: "none" }}
          onChange={handleFileInput}
        />
      </Container.DynamicColorContainer>
    );
  }
};

export default React.memo(DownLoader);
