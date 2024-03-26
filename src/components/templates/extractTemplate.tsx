import { useState } from 'react';
import { colors } from '@/utils/colors';
import Header from '../molecules/Header';
import ExtractHeaderContainer from '../molecules/ExtractHeader';
import Extract from '../molecules/Extract';
import CustomModal from '../molecules/CustomModal';
import FilledButton from '../atoms/FilledButton';
import ModalListInfo from '../molecules/ModalInfoList';
import { InfoList_Template, extract_template } from '../../utils/interfaces';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'
import moment from 'moment';
import 'moment/locale/pt-br';
import { HeadingThree, Paragraph } from '../atoms/Text';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const RefundContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default function ExtractTemplate() {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [stepModal, setStepModal] = useState(0);
  const [dadosTransacao, setDadosTransacao] = useState(Array);
  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={3} />;
  moment.locale('pt-br');
  const [tabs, setTabs] = useState([
    {
      id: 0,
      text: `Todas`,
      isActive: true,
    },
    {
      id: 1,
      text: `Entrada`,
      isActive: false,
    },
    {
      id: 2,
      text: `Saída`,
      isActive: false,
    },
    {
      id: 3,
      text: `Futuros`,
      isActive: false,
    },
  ]);
  let extrato_simplificado = user.extrado_simplificado;
  let backup = user.extrado_simplificado;
  const [extract, setExtract] = useState([...extrato_simplificado]);
  const changeLists = (id: number) =>
    id > 0
      ? setExtract([...extrato_simplificado].slice(0, extrato_simplificado.length - id))
      : setExtract(extrato_simplificado);

      function retornaTaxa(value:any){
        if(value.tipo == "98")
          return value;
      }
      function getOrderStatusColor(status:any) {
        if(status == 'received') return "payment"
        if(status == 'estorno') return "estorno"
        if(status == 'send') return "charge"
        if(status == 'taxa') return "charge"
        if(status == 'correcao') return "correcao"
        if(status == 'fatura') return "charge"
        if(status == 'faturarec') return "payment"
        if(status == 'ted') return "charge"
        if(status == 'tedoutra') return "charge"
        if(status == 'doc') return "charge"
        if(status == 'docoutra') return "charge"
        if(status == 'btcsaldo') return "payment"
        if(status == 'pagboleto') return "charge"
        if(status == 'pagboletoconsumo') return "charge"
        if(status == 'investiup2p') return "charge"
        if(status == 'exchangebtc') return "charge"
        if(status == 'exchangebtccancel') return "payment"
        if(status == 'recargacelular') return "charge"
        if(status == 'pagamentopix') return "charge"
        if(status == 'tefmanual') return "payment"
        if(status == 'taxa') return "charge"
        return "payment"
      }
    const changeList = (id: number) => {

      if(id == 0)
      {
        setExtract(backup);
      }
      else if(id == 1){

        var result = backup.map((element) => {
          return {...element, content: element.content.filter((subElement) => getOrderStatusColor(subElement.status_order) === 'payment')}
        })

        setExtract(result);


      }
      //extrato_simplificado = backup.content.filter(retornaTaxa);
      else if(id == 2){
        var result = backup.map((element) => {
          return {...element, content: element.content.filter((subElement) => getOrderStatusColor(subElement.status_order) === 'charge' || getOrderStatusColor(subElement.status_order) === 'correcao' )}
        })

        setExtract(result);
      }
      //extrato_simplificado = backup.filter(retornaTaxa);
      else if(id == 3){
        var result = backup.map((element) => {
          return {...element, content: element.content.filter((subElement) => subElement.tipo === 200 )}
        })

        setExtract(result);
      }

    };
  const changeTabs = (id: number) => (
    // eslint-disable-next-line no-sequences
    setTabs((old) => old.map((tab) => ({ ...tab, isActive: tab.id === id }))),
    changeList(id)
  );

  // const onClickTransaction = () => setOpenModal(true);

  const closeModal = () => {
    setStepModal(0);
    setOpenModal(false);
  };

  return (
    <>
      <Header
        title="Extrato"
        justifyContent="flex-start"
        // clicked={() => router.push(`/home`)}
      />
      <ExtractHeaderContainer saldo={`${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(user.meus_dados.saldo)}`} />
      <div style={{ height: `100%` }}>
        <Extract
          // onClickTransaction={onClickTransaction}
          tabClick={changeTabs}
          tabs={tabs}
          extract={extract}
          containerClick={(e) => {
            setDadosTransacao(e);
            console.log(e);
            setOpenModal(true);
          }}
        />
      </div>
      {openModal && (
        <CustomModal
          iconClassName="icon-close"
          onClick={() => closeModal()}
          title="Resumo de pagamento"
          PaymentContentTitle='Hash da Transaçāo'
          PaymentContentValue={dadosTransacao.hash}
          paymentType={dadosTransacao.mensagem}
          PaymentContentMoney={`R$ ${dadosTransacao.valor_liquido}`}
          hasCurrency
          hasPaymentContent
          subtitleCurrency={`Pago em ${moment(dadosTransacao.data_gerado).format('L')} às ${moment(dadosTransacao.data_gerado).format('LTS')}`}
        >
          {stepModal === 0 && (
            <ModalContainer>
              <FilledButton
                text="Ver Comprovante"
                textColor="white"
                bgColor1={colors.verdeLight}
                height="50px"
                roundedSize="30px"
                margin="32px 0 0 0"
                action={() => setStepModal(stepModal)}
              />
              {
                dadosTransacao?.status_order === "received" &&
                <RefundContainer onClick={() => router.push('/reembolso/pix')}>
                  <div style={{ display: 'flex' }}>
                    <img src="/pix/fi_corner-down-left.svg" alt="" />
                    <div style={{ padding: '20px' }}>
                      <HeadingThree
                        fontWeight="bold"
                        margin="0 0 8px 0"
                        color={colors.black}
                        fontSize="16px"
                        >
                          Fazer reembolso
                      </HeadingThree>
                      <Paragraph
                        fontSize="14px"
                        color={colors.cinzaLightMedium}
                      >
                        Faça um reembolso e devolva o valor integral ou
                        parcial para quem te pagou até o dia <span>20 de DEZ 2022</span>
                      </Paragraph>
                    </div>
                  </div>
                  <i className="icon-chevron-right" />
                </RefundContainer>
              }
            </ModalContainer>
          )}
          {stepModal === 1 && <ModalListInfo infoList={InfoList_Template} />}
        </CustomModal>
      )}
    </>
  );
}
