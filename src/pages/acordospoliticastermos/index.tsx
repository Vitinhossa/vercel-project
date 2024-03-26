import ContentContainer from "@/components/atoms/ContentContainer";
import AcordosPoliticasTermosTemplate from "@/components/templates/acordospoliticastermosTemplate";

export default function AcordosPoliticasTermos (){
    const menuItems = [
        {
            id: 0,
            title: `Acordo de conta de depósito`,
            route: `/`,//trocar no futuro para a pagina de Acordo de conta de depósito
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },

        {
            id: 1,
            title: `Acordo de iniciação de transação de pagamento`,
            route: `/`,//trocar no futuro para a pagina de Acordo de iniciação de transação de pagamento
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 2,
            title: `Acordo de Resolução de disputa`,
            route: `/`,//trocar no futuro para a pagina de Acordo de Resolução de disputa
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 3,
            title: `Código de Ética e Conduta de Membros`,
            route: `/`,//trocar no futuro para a pagina de Código de Ética e Conduta de Membros
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 4,
            title: `Termos de consentimento autenticação de contas (bancos, corretoras e programa de fidelidade)`,
            route: `/`,//trocar no futuro para a pagina de Termos de consentimento autenticação de contas (bancos, corretoras e programa de fidelidade)
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 5,
            title: `Termo de consentimento de comunicação eletrônica`,
            route: `/`,//trocar no futuro para a pagina de Termo de consentimento de comunicação eletrônica
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 6,
            title: `Termos de programa de membro`,
            route: `/`,//trocar no futuro para a pagina de Termos de programa de membro
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 7,
            title: `Termos de programa de membro`,
            route: `/`,//trocar no futuro para a pagina de Termos de programa de membro
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 8,
            title: `Termos de uso`,
            route: `/`,//trocar no futuro para a pagina de Termos de uso
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 9,
            title: `Termos de uso de API`,
            route: `/`,//trocar no futuro para a pagina de Termos de uso de API
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 10,
            title: `Política de KTC`,
            route: `/`,//trocar no futuro para a pagina de Política de KTC
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 11,
            title: `Política de Privacidade`,
            route: `/`,//trocar no futuro para a pagina de Política de Privacidade
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 12,
            title: `Política de programa de Afiliados`,
            route: `/`,//trocar no futuro para a pagina de Política de programa de Afiliados
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },
        {
            id: 13,
            title: `Política de segurança cibernética`,
            route: `/`,//trocar no futuro para a pagina de Política de segurança cibernética
            hasIcon: true,
            href: `https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro`
        },


    ];
    return(
        <ContentContainer>
            <AcordosPoliticasTermosTemplate menuItems={menuItems}/>
        </ContentContainer>
    )
}