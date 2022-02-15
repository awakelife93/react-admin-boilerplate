import _ from "lodash";
import React, { useCallback, useEffect, useRef } from "react";
import { CSSProperties } from "styled-components";
import { Container, InputBox, Label } from ".";

type DownLoaderType = {
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
 * @param {DownLoaderType} props
 * @returns {React.ReactElement}
 */
const DownLoader: React.FC<DownLoaderType> = (
  props: DownLoaderType
): React.ReactElement => {
  const downloadInput: React.MutableRefObject<any | undefined> = useRef<HTMLDivElement>();
  const {
    children,
    next,
    fileType,
    containerStyles,
    labelStyles,
    containerStyleItems,
  } = props;
  
  const initialize = (): void => {
    const { current } = downloadInput;
    if (!_.isUndefined(current)) {
      current.value = "";
    }
  };

  const handleFileInput = useCallback(
    (e: any): void => {
      next(e.target.files[0]);
      initialize();
    },
    [next]
  );

  useEffect(() => {
    return () => {
      initialize();
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
