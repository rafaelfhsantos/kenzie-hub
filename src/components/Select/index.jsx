import { SelectStyled, Div } from "./style";
import { LabelStyled } from "../Input/style";

function Select({ options, register, ...rest }) {
  return (
    <Div>
      <LabelStyled>Selecionar módulo</LabelStyled>
      <SelectStyled {...register} {...rest}>
        {options.map((option, i) => {
          return (
            <option value={option} key={i}>
              {option}
            </option>
          );
        })}
      </SelectStyled>
    </Div>
  );
}

export default Select;
