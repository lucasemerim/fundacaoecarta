=== Autentica��o Integrada AD Sinpro/RS ===
Programador: Lucas Emerim Marques
Refer�ncias: http://blog.doh.ms/2008/03/10/desenvolvendo-plugins-para-wordpress/?lang=pt-br
			 http://daviwp.com/como-criar-um-plugin-para-wordpress/
			 http://www.escolawp.com/2012/01/como-criar-plugins-para-wordpress-parte-i/			 

== Resumo ==

		Efetuada a autentica��o dos usu�rios atrav�s da p�gina intermedi�ria de valida��o das credenciais no AD (Active Directory) do Sinpro/RS <autenticaAplicacaoAd.asp>.  	
		Esta p�gina est� na intranet do Sinpro/RS, uma vez que a intranet n�o estiver acess�vel a autentica��o � efetuada diretamente pela base de dados de usu�rios do
		wordpress. A cada autentica��o no AD � atualizado os dados dos usu�rios na base de dados do wordpress, mantendo assim uma c�pia fiel dos dados do usu�rio no 
		wordpress.

== Descri��o ==

Apresenta��o das principais funcionalidades do plugin:
	1 � Verifica acesso � p�gina de autentica��o localizada na intranet do Sinpro < autenticaAplicacaoAd.asp > 
	2 - <P�gina de autentica��o acess�vel> Autenticam credenciais de acesso (usu�rio, senha e token)
	3 - <Credenciais OK>Verifica a exist�ncia do usu�rio na base do wordpress.
	4 - <Usu�rio inexistente> Insere os dados do usu�rio.
	5 - <Usu�rio j� cadastrado> Atualiza as informa��es do usu�rio.
	6 - <P�gina de autentica��o n�o acess�vel> Valida credenciais diretamente no wordpress.


== Instala��o ==

1. Fa�a upload dos arquivos para a pasta `/wp-content/plugins/`  (mantenha a pasta original do plugin)
1. Ative o plugin na interface de 'Plugins' do WordPress
1. Na Aba de op��es configure o plugin
