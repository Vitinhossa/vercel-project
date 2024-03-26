import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  ContainerListExtract,
  ContainerTitle,
  ItemContainer,
  ItemContent,
  Icon,
  IconGrey,
} from './style';

interface IExtractList {
  extract: {
    id: number;
    date: string;
    content: {
      id: number;
      type: string;
      title: string;
      subTitle: string;
      price: string;
    }[];
  }[];
  containerClick?: (e: string) => void;
}

export default function ExtractList({ extract, containerClick }:{containerClick?: (e: string) => void; extract: any;}) {

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

  return (
    <div
      style={{
        padding: `0 6px`,
        overflow: `hidden`,
      }}
    >
      {extract?.map((item) => (
        <>
          <ContainerTitle key={item.id} style={{ marginTop: `10px` }}>
            <Paragraph fontSize="16px" fontWeight="700" lineHeight="20px">
              {item.date}
            </Paragraph>
          </ContainerTitle>
          {item.content?.map((content) => (
            <ContainerListExtract
              style={{
                padding: `0px 6px 0px 6px`,
                marginTop: `14px`,
                marginBottom: `14px`,
                overflow: `hidden`,
              }}
              key={content.id}
              onClick={() => containerClick && containerClick(content)}
            >
              <ItemContainer>
                <ItemContent width="10%">
                  {getOrderStatusColor(content.status_order) === `payment` && (
                    <Icon isUp className="icon-arrow-left" />
                  )}
                  {getOrderStatusColor(content.status_order) === `charge` && (
                    <Icon className="icon-arrow-left" />
                  )}
                  {getOrderStatusColor(content.status_order) === `futuros` && (
                    <IconGrey className="icon-retry" />
                  )}
                </ItemContent>
                <ItemContent
                  flexDirection="column"
                  width="90%"
                  marginLeft="8px"
                >
                  <ItemContent width="100%" justifyContent="space-between">
                    <Paragraph
                      fontWeight="700"
                      fontSize="14px"
                      lineHeight="16px"
                      fontColor={colors.cinzaMediumDark}
                    >
                      {content.mensagem}
                    </Paragraph>
                    <Paragraph
                      fontWeight="700"
                      fontSize="14px"
                      lineHeight="16px"
                      fontColor={colors.cinzaMedium}
                    >
                      R$ {content.valor_liquido}
                    </Paragraph>
                  </ItemContent>
                  <ItemContent width="100%" justifyContent="flex-start">
                    <Paragraph
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="16px"
                      fontColor={colors.cinzaLightDark}
                      style={{ marginTop: `6px` }}
                    >
                    {moment(content.data_gerado).format('L')} às {moment(content.data_gerado).format('LTS')}
                    </Paragraph>
                  </ItemContent>
                </ItemContent>
              </ItemContainer>
            </ContainerListExtract>
          ))}
        </>
      ))}
    </div>
  );
}
