/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import FilledButton from '@/components/atoms/FilledButton';
import { MicroSelect } from '@/components/atoms/MicroSelect';

const StyledSelect = styled.select`
  width: 100%;
  background-color: white;
  border: none;
  font-size: 1rem;
  color: #adb5bd;
  outline: none;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  border: none;
  font-size: 1rem;
  color: #adb5bd;
  outline: none;
  &::placeholder {
    font-size: 1rem;
    color: #adb5bd;
  }
`;

const StyledContainerInput = styled.label`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #edeff0;
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  p {
    font-size: 1rem;
    color: #adb5bd;
  }
  input[type='file'] {
    display: none;
  }
`;

const StyledInputValue = styled.input`
  font-size: 24px;
  font-weight: 700;
  color: #0f3b93;
  text-align: center;
  width: 100%;
  border: none;
  outline: none;
`;

const StyledFakeBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const StyledContainer = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 40px 40px 0 0;
  width: 100%;
  padding: 42px 28px;
  background-color: white;
`;

const StyledCloseIcon = styled.i`
  font-size: 16px;
  color: #34403b;
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    color: #0f3b93;
  }
`;

const options = [
  { value: `receitas`, text: `Receitas` },
  { value: `despesas`, text: `Despesas` },
];

export const ModalDeposit = ({
  visible = false,
  onSave,
  onClose,
}: {
  visible: boolean;
  onSave: () => void;
  onClose: () => void;
}) => (
  <div
    style={{
      width: `100%`,
      height: `100%`,
      position: `absolute`,
      bottom: visible ? `0` : `-1000px`,
      transition: `0.4s all`,
    }}
  >
    <StyledFakeBackground />
    <StyledContainer>
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <h3
          style={{
            fontSize: `18px`,
            marginBottom: `20px`,
          }}
        >
          Depósito
        </h3>
        <StyledCloseIcon onClick={onClose} className="icon-close" />
      </div>

      <div style={{ margin: `20px 0 32px` }}>
        <StyledInputValue type="text" defaultValue="R$ 00,00" />

        <StyledContainerInput>
          <img src="/icons/calendar.svg" alt="" />
          <StyledSelect>
            <option>Selecione uma data</option>
            <option>20/10/2021</option>
            <option>21/10/2021</option>
          </StyledSelect>
        </StyledContainerInput>
        <StyledContainerInput>
          <img src="/icons/edit.svg" alt="" />
          <StyledInput type="text" placeholder="Digite uma descrição" />
        </StyledContainerInput>
        <StyledContainerInput>
          <img src="/icons/bookmark.svg" alt="" />
          <StyledSelect>
            <option>Selecione uma categoria</option>
            <option>Moradia</option>
            <option>Alimentação</option>
            <option>Educação</option>
          </StyledSelect>
        </StyledContainerInput>
        <StyledContainerInput htmlFor="flp_comprovante">
          <img src="/icons/upload.svg" alt="" />
          <p>Comprovante</p>
          <input type="file" id="flp_comprovante" />
        </StyledContainerInput>
      </div>

      <FilledButton
        text="Salvar"
        bgColor1="#0f3b93"
        textColor="white"
        roundedSize="30px"
        padding="14px"
        margin="0 0 10px"
        action={onSave}
      />
      <FilledButton text="Cancelar" action={onClose} />
    </StyledContainer>
  </div>
);
