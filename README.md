# Iggym

Iggym é um aplicativo mobile desenvolvido com Expo e React Native, projetado para fornecer uma experiência completa e personalizada aos usuários. O projeto utiliza tecnologias modernas, como gerenciamento de estado, autenticação JWT, upload de imagens e integração com APIs, enquanto mantém um design responsivo e acessível.

## Tecnologias

- **React Native**: Framework principal para desenvolvimento mobile.
- **Expo**: Ferramenta para acelerar o desenvolvimento e facilitar o acesso a APIs nativas.
- **React Navigation**: Gerenciamento de rotas públicas e privadas.
- **React Hook Form**: Gerenciamento de formulários e validações.
- **Yup**: Validação de dados de formulários.
- **Axios**: Comunicação com a API.
- **JWT**: Autenticação e renovação de tokens.
- **Expo Image Picker**: Acesso à galeria de fotos para upload de imagens.
- **Async Storage**: Armazenamento local de dados do usuário.
- **Gluestack UI**: Biblioteca de componentes para uma interface moderna e estilizada.

## Funcionalidades

- **Autenticação**: Login e registro de usuários com JWT e suporte a refresh token.
- **Rotas Protegidas**: Separação entre áreas públicas e privadas do aplicativo.
- **Formulários**: Gerenciamento de formulários com validação utilizando React Hook Form e Yup.
- **Integração com API**: Operações CRUD e interações dinâmicas com um backend.
- **Upload de Imagens**: Seleção de imagens da galeria do dispositivo e upload para o servidor.
- **UI Responsiva**: Interface moderna, acessível e ajustada para diferentes tamanhos de tela.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- Expo CLI

Além disso, um backend configurado para autenticação JWT e suporte às operações de upload de imagem é necessário.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/stecks10/IgGym.git
   cd iggym
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```

## Scripts Disponíveis

- `npm start`: Inicia o projeto no Expo.
- `npm run android`: Executa o projeto em um dispositivo ou emulador Android.
- `npm run ios`: Executa o projeto em um dispositivo ou simulador iOS.
- `npm run web`: Executa o projeto no navegador.

## Estrutura do Projeto

iggym/ ├

- assets/ #
  Recursos estáticos, como imagens e fontes

- components/ # Componentes reutilizáveis da interface.
- hooks/ # Hooks personalizados (e.g., useAuth).
- screens/ # Telas do aplicativo.
- services/ # Configuração de API e outras integrações externas.
- utils/ # Funções utilitárias e constantes.
- App.tsx # Arquivo principal da aplicação.

## Próximos Passos

- Adicionar testes automatizados para maior confiabilidade.
- Melhorar a cobertura de acessibilidade.
- Implementar notificações push.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais informações.
