## Como rodar a aplicação

# Pré-requisitos

Ter o Git instalado no seu computador
Ter o Node.js e o npm instalados no seu computador

## Passo 1: Clonar o repositório

Para começar, abra o terminal do seu sistema operacional e execute o seguinte comando para clonar o repositório para a sua máquina:

git clone https://github.com/dbnvides/Rick-and-morty-search.git

## Passo 2: Instalar as dependências

Navegue para a pasta onde você clonou o repositório e, em seguida, execute o seguinte comando para instalar as dependências necessárias:

Caso use npm:
npm install

yarn:
yarn install

## Passo 3: Iniciar a aplicação

Agora que todas as dependências foram instaladas, você pode iniciar a aplicação usando o seguinte comando:

Caso use npm:
npm dev

yarn:
yarn dev

Este comando irá iniciar a aplicação em um servidor local na porta 3000. Abra o seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento.

## Passo 4: Utilizar a aplicação

A aplicação foi desenvolvida seguindo a metodologia Mobile First, com o objetivo de proporcionar a melhor experiência possível para o usuário. Com isso em mente, foram implementados diversos recursos para facilitar a utilização da barra de pesquisa, como um botão para limpar o campo de busca e a busca automática assim que o usuário começar a digitar.

Além disso, ao clicar em um card de personagem, o usuário é redirecionado para uma página personalizada com o nome do personagem selecionado. Nessa página, o card é ampliado e exibe informações adicionais sobre o personagem, permitindo ao usuário obter mais detalhes sobre o mesmo.

Para retornar à página de pesquisa, basta clicar no botão localizado no canto superior direito, que abre um menu com a opção "HOME". Adicionalmente, na página inicial, o menu apresenta uma opção para acessar o repositório da aplicação.
