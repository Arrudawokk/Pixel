# Preparação do teste no Meta Ads

## Escopo confirmado pelo produtor

- Meta Ads, não Google Ads.
- Limite total do teste: R$ 24,00, sem ultrapassar esse valor.
- Dois criativos de imagem e dois de vídeo, ainda a serem anexados pelo produtor.
- Modelo 1 campanha, 1 conjunto, 1 anúncio por criativo: quatro campanhas independentes.
- Divisão planejada: R$ 6,00 por campanha para todo o período, sujeita ao mínimo aceito pela interface. Não converter em R$ 6,00 por dia nem aumentar orçamento automaticamente.
- Produto anunciado: Quadradinhos Mágicos — Kit Completo. Preço base R$ 27,99, checkout existente com taxa de serviço informada na página.
- O produtor possui UTMify, mas a conexão com Cakto ainda não foi confirmada.

## O que foi preparado no site

O botão do checkout agora repassa os parâmetros utm_source, utm_medium, utm_campaign, utm_content, utm_term, utm_id, utm_source_platform, fbclid, src e sck recebidos na URL da página. Outros parâmetros não são copiados. O destino de pagamento continua vindo da configuração da loja. Os valores são preservados usando URLSearchParams; não há persistência adicional nem scripts externos novos.

Isso é passagem de atribuição, não confirmação de compra, instalação do pixel ou integração completa da UTMify.

## Preparação das campanhas

Nomes sugeridos: QM-IMG-01, QM-IMG-02, QM-VID-01 e QM-VID-02. Cada uma terá um conjunto e um anúncio, com os mesmos critérios de público e período quando definidos. Manter em rascunho enquanto faltarem criativos, conta/página corretas, pixel, orçamento compatível e verificação de atribuição.

Não foram criadas, publicadas ou ativadas campanhas. Nenhum gasto foi realizado por este trabalho. A ferramenta de acesso ao navegador falhou na inicialização; o conector Chrome do ECC também não encontrou uma instalação do Chrome.

## Pendências antes da veiculação

1. Receber os quatro arquivos e revisar conteúdo, formatos, preço e chamada.
2. Recuperar o acesso autorizado ao navegador para identificar a conta de anúncios, página, pixel e configuração de cobrança. O saldo disponível não deve ser tomado como único controle de gasto.
3. Conferir a integração Cakto–UTMify e seus logs; verificar eventos de pagamento aprovado, distinguindo-os de Pix gerado.
4. Identificar a configuração real de pixel e seu provedor. Evitar instalar rastreadores duplicados ou colocar tokens de servidor no site público.
5. Configurar e validar o pixel no site e no checkout. Não registrar Purchase no clique do botão.
6. Usar os parâmetros recomendados pelo painel UTMify e verificar sua passagem até o checkout e a compra aprovada, usando ambiente/evento de teste quando disponível e sem gerar cobrança real para testar.
7. Verificar o mínimo aceito pela plataforma e um limite agregado que respeite R$ 24 para todo o teste. Se inviável, solicitar ajuste do desenho do teste, sem aumentar o gasto autorizado.

Referência oficial consultada: https://ajuda.cakto.com.br/pt-br/articles/92-como-integrar-o-utmify-na-cakto
