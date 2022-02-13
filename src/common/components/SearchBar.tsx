import _ from "lodash";
import { ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, InputBox } from ".";
import { I18nCommandEnum } from "../../core";

type SearchBarType = {
  next: Function;
}

/**
 * SearchBar
 * @description 검색 컴포넌트
 * @param {SearchBarIE} props
 * @returns {React.ReactElement}
 */
const SearchBar: React.FC<SearchBarType> = (
  props: SearchBarType
): React.ReactElement => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");

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
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
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
