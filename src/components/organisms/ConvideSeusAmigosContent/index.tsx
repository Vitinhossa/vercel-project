import Header from '@/components/molecules/Header';
import FilledButton from '@/components/atoms/FilledButton';
import { HeadingOne, HeadingThree, HeadingTwo, Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { useAuth } from '@/contexts/auth';
import {
  AffiliateProgram,
  CommissionDistributedList,
  CommissionItem,
  CommissionItemImage,
  CommissionItemSection,
  CommissionList,
  CommissionSection,
  CommissionType,
  Container,
  Content,
  Image,
  InvitationLink,
  Section,
  ShareButton,
  ShareButtonList,
  Icon
} from './style';
import { useState } from 'react';
import ShareDataModal from '@/components/molecules/ShareDataModal';
import ModalCompartilhar from '@/components/molecules/ModalCompartilhar';

export default function ConvideSeusAmigosContent() {

  const { user, loading }:any = useAuth();
  const [openShareModal, setOpenShareModal] = useState(false)

  const shareList = [
    {
      icon: 'ic_baseline-whatsapp.svg',
      link: () => {}
    },
    {
      icon: 'fi_instagram.svg',
      link: () => {}
    },
    {
      icon: 'fi_twitter.svg',
      link: () => {}
    },
    {
      icon: 'fi_facebook.svg',
      link: () => {}
    },
    {
      icon: 'pinterest.svg',
      link: () => {}
    },
    {
      icon: 'fi_linkedin.svg',
      link: () => {}
    },
    {
      icon: 'fi_youtube.svg',
      link: () => {}
    },
    {
      icon: 'fi_mail.svg',
      link: () => {}
    },
  ]

  const commissions = [
    {
      plan: 'Special 10x',
      image: 'special.png',
      commission: {
        total: '2',
        levels: '2',
        distributed: {
          direta: '2'
        }
      }
    },
    {
      plan: 'Start 10x',
      image: 'start.png',
      commission: {
        total: '5',
        levels: '3',
        distributed: {
          direta: '2',
          segunda: '2',
          terceira: '1'
        }
      }
    },
    {
      plan: 'Middle 10x',
      image: 'middle.png',
      commission: {
        total: '8',
        levels: '4',
        distributed: {
          direta: '4',
          segunda: '2',
          terceira: '1',
          quarta: '1'
        }
      }
    },
    {
      plan: 'Premier 10x',
      image: 'premier.png',
      commission: {
        total: '10',
        levels: '5',
        distributed: {
          direta: '5',
          segunda: '2',
          terceira: '1',
          quarta: '1',
          quinta: '1'
        }
      }
    },
    {
      plan: 'Elite 10x',
      image: 'elite.png',
      commission: {
        total: '12',
        levels: '6',
        distributed: {
          direta: '6',
          segunda: '2',
          terceira: '1',
          quarta: '1',
          quinta: '1',
          sexta: '1'
        }
      }
    },
  ]


  return (
    <div style={{ overflowY: openShareModal ? 'hidden' : 'auto' }}>
    <Container>
      <Header title='Convide seus amigos' />
      <Content>
        <Image src="./convideseusamigos.svg" />
        <HeadingOne>Ganhe dinheiro indicando seus amigos!</HeadingOne>
        <Paragraph>Só aceitamos abertura de contas por indicação, então, aproveite.</Paragraph>
        <Section>
          <HeadingThree>Compartilhe com:</HeadingThree>
          <ShareButtonList>
            {
              shareList.map(item => (
                <ShareButton key={item.icon} onClick={() => setOpenShareModal(true)}>
                  <Image src={`./icons/share/${item.icon}`} />
                </ShareButton>
              ))
            }
          </ShareButtonList>
        </Section>
        <Section>
          <HeadingThree>Copie seu código de membro:</HeadingThree>
          <FilledButton
            width='100%'
            height='44px'
            text={user?.meus_dados?.inviteCode.toUpperCase()}
            hasBorder
            border={`2px solid ${colors.verdeMedium}`}
            textColor={colors.verdeMedium}
            action={() => navigator.clipboard.writeText(user?.meus_dados?.inviteCode.toUpperCase())}
          />
        </Section>
        <Section>
          <HeadingThree>Copie seu link de convite:</HeadingThree>
          <InvitationLink>operacao-luis.land.com.br/register/{user?.meus_dados?.inviteCode.toUpperCase()}</InvitationLink>
          <FilledButton
            width='100%'
            height='44px'
            text='COPIAR LINK'
            hasBorder
            border={`2px solid ${colors.verdeMedium}`}
            textColor={colors.verdeMedium}
            action={() => navigator.clipboard.writeText(`operacao-luis.land.com.br/register/${user?.meus_dados?.inviteCode.toUpperCase()}`)}
          />
        </Section>
      </Content>
      <CommissionSection>
        <HeadingTwo>Comissões por referenciamento de clientes:</HeadingTwo>
        <CommissionList>
          {
            commissions.map(item =>
            <CommissionItem key={item.plan}>
              <CommissionItemSection>
                <Paragraph>Plano</Paragraph>
                <HeadingThree>{item.plan}</HeadingThree>
                <CommissionItemImage src={`./plans/cards/${item.image}`} />
              </CommissionItemSection>
              <CommissionItemSection>
                <CommissionType>
                  <Paragraph>
                    Comissão total
                    <span>{item.commission.total}%</span>
                  </Paragraph>
                </CommissionType>
                <CommissionType>
                  <Paragraph>
                    Comissão em níveis
                    <span>{item.commission.levels} níveis</span>
                  </Paragraph>
                </CommissionType>
                <CommissionType>
                  <Paragraph>
                    Comissão distribída
                  </Paragraph>
                  <CommissionDistributedList>
                    {
                      Object.entries(item.commission.distributed).map( ([key, value]) => (
                        <Paragraph>
                          { key }:
                          <span>{value} %</span>
                        </Paragraph>
                      ))
                    }
                  </CommissionDistributedList>
                </CommissionType>
              </CommissionItemSection>
            </CommissionItem>
          )}
        </CommissionList>

        <Section>
          <HeadingThree>Conheça nossa política de afiliados</HeadingThree>
          <AffiliateProgram>
            <Paragraph>Política de programa de Afiliados</Paragraph>
            <Icon className='icon-chevron-right' />
          </AffiliateProgram>
        </Section>
      </CommissionSection>
      {openShareModal && (
    <ModalCompartilhar
      closeAction={() => setOpenShareModal(false)}
      textShare={user?.meus_dados?.inviteCode.toUpperCase()}
    />
  )}
    </Container>
    </div>
  );
}
