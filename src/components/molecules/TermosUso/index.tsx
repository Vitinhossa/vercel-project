import * as S from './style';

export default function TermosUso({check, setCheck}) {
  return (
    <S.Container>
      <S.Checkbox>
        <label className="container-label" id="myCheckbox">
          <input type="checkbox"  onClick={() => setCheck(!check)}
        checked={check}></input>
          <span className="checkmark"></span>
        </label>
      </S.Checkbox>
      <S.Text>
        Concordo com os <S.Link href="#">Termos de Uso</S.Link> e a{' '}
        <S.Link href="#">Política de Privacidade</S.Link> desse serviço.
      </S.Text>
    </S.Container>
  );
}
