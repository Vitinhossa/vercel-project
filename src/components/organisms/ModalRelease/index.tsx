/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
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

export const ModalRelease = ({
  visible,
  onSave,
  onClose,
  type = `receitas`,
}: {
  type?: string;
  visible: boolean;
  onSave: () => void;
  onClose: () => void;
}) => {
  const [typeModal, setTypeModal] = useState(type);

  return (

    <>
    {visible && (
      <>
      <div
      style={{
        width: `100%`,
        height: `100%`,
        position: `absolute`,
        top: visible ? `0%` : `-1000px`,
        transition: `0.4s all`,
        zIndex: 9999,
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
            Lançamento
          </h3>
          <StyledCloseIcon onClick={onClose} className="icon-close" />
        </div>

        <div style={{ margin: `20px 0 32px` }}>
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <MicroSelect
              style={{
                backgroundColor:
                  typeModal === `receitas`
                    ? `rgba(72,201,50,0.20)`
                    : `rgba(229, 20, 32, 0.2)`,
                color: typeModal === `receitas` ? `#ff9f1e` : `#E51420`,
                maxWidth: `105px`,
                margin: `0px`,
              }}
              options={options}
              onChange={(e) => {
                setTypeModal(e.target.value);
              }}
            />

            <div style={{ display: `flex`, alignItems: `center` }}>
              <p
                style={{
                  fontSize: `14px`,
                  fontWeight: 500,
                  color: `#34403B`,
                }}
              >
                {typeModal === `receitas` ? `Não foi recebido` : `Não foi pago`}
              </p>
              <div
                style={{
                  width: `40px`,
                  height: `24px`,
                  backgroundColor: `#B9B9B9`,
                  marginLeft: `4px`,
                  padding: `2px`,
                  borderRadius: `30px`,
                }}
              >
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    backgroundColor: `white`,
                    borderRadius: `50%`,
                  }}
                />
              </div>
            </div>
          </div>

          <StyledInputValue
            type="text"
            defaultValue="R$ 00,00"
            style={{
              color: typeModal === `receitas` ? `#ff9f1e` : `#E51420`,
            }}
          />

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
            <img src="/icons/credit-card.svg" alt="" />
            <StyledSelect>
              <option>Selecione uma conta</option>
              <option>200-50</option>
              <option>11451-040</option>
            </StyledSelect>
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
    </>
    )}
    </>
    
  );
};
