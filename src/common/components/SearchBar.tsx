import _ from "lodash";
import { ChangeEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Container, InputBox } from ".";
import { I18nCommandEnum } from "../../core";
import { defaultInputDebounceTime } from "../const";

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
  const { next } = props;
  const { t } = useTranslation();
  
  const onSearch = useCallback(
    _.debounce((inputValue: string): void => {
      if (_.isFunction(next)) {
        next(inputValue);
      }
    }, defaultInputDebounceTime),
  [next]);

  return (
    <Container.RowContainer>
      <InputBox.CommonInputBox
        style={{ marginBottom: 10, paddingLeft: 10 }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
        placeholder={t(I18nCommandEnum.SEARCH_NOTE)}
      />
    </Container.RowContainer>
  );
};

export default SearchBar;
