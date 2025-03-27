# AUTOMAÇÃO - CYPRESS AUTOMATION
_Este é o meu projeto de automação para a aplicação metro-uptime, um site estruturado para status do Metro de São Paulo, minha automação foi desenvolvida com o objetivo de validar algumas das funcionalidades principais do sistema_

Este projeto utiliza o Cypress para automatizar os testes. Cypress é um framework de testes end-to-end baseado em JavaScript, que permite aos desenvolvedores escrever testes e executá-los em navegadores reais.

## Cenários de Teste e Bug Report
**Primeiramente deixo uma planilha Bug Reports com evidências de fotos e vídeo do site https://kanban-dusky-five.vercel.app/. [BDD]**
https://docs.google.com/spreadsheets/d/1RExTGaG1C4zgSNgRNUxxeALgJziqV6JP/edit?usp=sharing&ouid=113176659839643389320&rtpof=true&sd=true


## Como Executar o Projeto
### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
+ [Node.js](https://nodejs.org/pt)
+ [GitBash](https://git-scm.com/downloads)
  
**Observação:** Caso não tenha um navegador instalado em sua maquina local, o Cypress utilizará o Electron por padrão para executar a automação.


### Passos para Instalação

1. **Clone o repositório** para sua máquina local:
```bash
git clone https://github.com/pedromeirelesrocha/metro-teste.git
```

3. **Acesse o diretório do projeto.** O diretório pode ser escolhido de acordo com o local onde você clonou o repositório:
```bash
cd caminho/para/o/diretorio/metro-teste
```

4. **Instale as dependências** do projeto:
```bash
npm install
```

## Executando o Cypress para rodar os testes:
   
```bash
# Você executa através da interface do Cypress (Cypress UI).
npx cypress open

# Execute o comando de automação no terminal.
npx cypress run
```

Grato!
