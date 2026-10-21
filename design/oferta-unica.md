# Direção visual — oferta única

## Contrato

- Superfície: página de vendas estática de Quadradinhos Mágicos.
- Público: adultos escolhendo atividades infantis imprimíveis.
- Ação principal: acessar o checkout do único Kit Completo; o botão fica indisponível enquanto a URL real não estiver configurada.
- Hierarquia: nome do produto; Kit Completo, preço e CTA; bônus ilustrados ao lado; conteúdo detalhado e amostra abaixo.
- Oferta: preço promocional R$ 27,99, referência visual R$ 37,99, sem contador ou expiração; checkout de R$27,99 permanece disponível.
- Conteúdo: 120 atividades no total, incluindo os quatro kits de quatro atividades cada. Remover comparações e referências ao plano Normal.
- Referência: paleta creme/verde da página atual, SVGs reais dos bônus B01, B05, B09 e B13; manter a primeira decisão de compra antes da explicação extensa.
- Desktop 1440x900: um quadro amplo, com compra à esquerda e quatro bônus em grade à direita.
- Mobile 390x844 e 360x640: compra primeiro, preço e CTA na primeira tela; bônus em seguida, dentro do mesmo quadro, sem rolagem horizontal.
- Sem novas dependências de produção, sem efeitos decorativos ou nova apresentadora.

## Estados e verificações

- Carregamento: imagens com dimensões reservadas; grade da amostra mostra status enquanto carrega.
- Vazio: checkout ausente mostra Compras em breve, com link desabilitado; avaliações continuam aguardando relatos reais.
- Erro: falha de dados da demonstração apresenta orientação para recarregar ou baixar a amostra.
- Parcial: sem JavaScript, o HTML já apresenta o preço e o checkout corretos; a compra não depende de sessionStorage.
- Sucesso: imagens carregadas, demonstração operável; checkout de teste HTTPS habilita CTA; checkout continua disponível após recarregar, com sessão antiga expirada ou armazenamento bloqueado.
- Permissão: não aplicável, esta página pública não solicita autenticação ou permissões do navegador.

Evidências visuais e relatório ECC ficam na pasta local de QA, fora dos arquivos publicados.
