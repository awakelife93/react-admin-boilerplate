import _ from "lodash";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, InputBox } from ".";
import { I18nCommandEnum } from "../../core";

interface SearchBarIE {
  next: Function;
}

/**
 * SearchBar
 * @description 검색 컴포넌트
 * @param {SearchBarIE} props
 * @returns {React.ReactElement}
 */
const SearchBar: React.FC<SearchBarIE> = (
  props: SearchBarIE
): React.ReactElement => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = useCallback((e: any): void => {
    const v = e.target.value;
    setInputValue(v);
  }, []);

  const onClickSearch = useCallback((): void => {
    const { next } = props;

    if (_.isFunction(next)) {
      next(inputValue);
    }
  }, [inputValue, props]);

  return (
    <Container.RowContainer>
      <InputBox.CommonInputBox
        style={{ marginBottom: 10, marginRight: 10, paddingLeft: 10 }}
        onChange={onChangeInput}
        placeholder={t(I18nCommandEnum.SEARCH_NOTE)}
      />
      <Button.SubMitButton
        style={{ margin: 0, marginBottom: 10 }}
        onClick={onClickSearch}
      >
        {t(I18nCommandEnum.SEARCH)}
      </Button.SubMitButton>
    </Container.RowContainer>
  );
};

export default SearchBar;
