# Configuração do painel do portfólio

O painel usa Supabase Auth para login e recuperação de senha. O conteúdo fica na tabela `public.portfolio_content`; o site pode ler o registro público, mas apenas a conta administrativa definida nas políticas pode gravá-lo.

## Preparar o projeto

1. No Supabase `cmkuokwefatfmrralamj`, abra o **SQL Editor** e execute o conteúdo de [SUPABASE_PORTFOLIO_SCHEMA.sql](./SUPABASE_PORTFOLIO_SCHEMA.sql).
2. Em **Authentication → Users**, crie ou convide `corelabs.dev.nexus@gmail.com` e confirme o e-mail. Em **Authentication → Settings**, desabilite novos cadastros públicos; a tela do portfólio oferece apenas login e recuperação.
3. Em **Authentication → URL Configuration**, defina `https://reinaldobarreto31.github.io` como Site URL e permita `https://reinaldobarreto31.github.io/` em Redirect URLs.
4. Confirme que o provedor **Email** está habilitado. Use “Esqueci minha senha” na tela administrativa para definir a senha e testar a recuperação.

As variáveis públicas `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` já foram cadastradas em **GitHub → Settings → Secrets and variables → Actions → Variables**. A chave publishable pode aparecer no cliente; nunca use nem publique uma chave `service_role`.

O código local já foi preparado para ler e gravar nesse projeto. Ele só entrará em produção depois de publicar as alterações do repositório e concluir as etapas acima.

## Como validar após publicar

1. Abra o portfólio e use o botão **Painel Admin** no rodapé.
2. Entre com `corelabs.dev.nexus@gmail.com`.
3. Edite um campo e aguarde o indicador mudar para **Sincronizado com Supabase**.
4. Recarregue a página ou abra-a em outro navegador: o conteúdo deve vir do Supabase.

Se o painel indicar erro de sincronização, confira se o SQL foi executado e se a conta usada está confirmada com o e-mail permitido nas políticas RLS.
