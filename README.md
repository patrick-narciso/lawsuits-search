## 💻 Sobre o projeto

Este projeto cria uma consulta e obtém respostas de processos via `CNJ` utilizando a API da JUDIT (empresa que possui crawlers para busca de processos, informações, monitoramento e mais). Neste momento ela está trazendo uma listagem com informações processuais de forma programática com números de processos que estão na pasta `mock`, e clicando em um processo da lista é possível ver maiores detalhes em outra tela com maiores detalhes.

### Estrutura

```
📦 src
 ┣ 📂 app (contém os arquivos layout.tsx com metadados para SEO e page.tsx com a página principal, pasta processo com a segunda rota e a pasta components onde residem componentes atômicos que no momento só existe o Header)
 ┣ 📂 components (para componentes reutilizáveis, possui components atômicos como Button, Input etc.)
 ┣ 📂 services (integração com apis, separados por lógica de negócio acompanhando os modules)
 ┣ 📂 services (serviços customizados que utilizam sua classe base)
 ┣ 📂 mock (dados mockados no formato json, nesse caso somente possui os processos)
 ┣ 📂 entities (models, no caso tipos e interfaces para serem utilizados)
 ┣ 📂 utils (criação de classe base http client etc.)
```

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) é recomendado a utilização da versão 20.1.0 para evitar bugs com a nova versão do next.js. Além disto, você vai precisar ter uma uma `API_KEY` que você pode obter no site da[JUDIT](https://app.judit.io/). Na raíz do projeto possui um arquivo chamado `.env.example` com o contéudo abaixo. Copie, crie um arquivo `.env.local` na raíz do seu projeto e preencha com sua chave.

```
BASE_URL=https://requests.prod.judit.io
API_KEY=YOUR_API_KEY_HERE
```

#### 🎲 Rodando a aplicação

### NPM

```bash

# Clone este repositório
$ git clone git@github.com:patrick-narciso/lawsuits-search.git

# Acesse a pasta do projeto no terminal/cmd
$ cd lawsuits-search

# Instale as dependências
$ npm run install

# execute em modo de desenvolvimento
$ npm run dev

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://react.dev/)**
- **[Next.js](https://nextjs.org/)**
- **[Axios](https://github.com/axios/axios)**
- **[Tailwind](https://tailwindcss.com/)**

Typescript foi utilizado para deixar a aplição mais estável, evitando erros de compilação e ajudando a desenvolver pelas previsibilidades ao ter um código fortemente tipado.

Axios foi utilizado por ser simples e flexível, com a criação de uma instância principal por exemplo podendo deixar os headers pré-definidos, e a possibilidade de usar seus interceptors caso haja necessidade.

As requisições à API foram feitas no lado do server para otimizar a renderização e evitar a exposição da `API_KEY` necessária para as chamadas.

## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Patrick-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/patricknarciso/)](https://www.linkedin.com/in/patricknarciso/)
[![Gmail Badge](https://img.shields.io/badge/-patrick.ncsilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:patrick.ncsilva@gmail.com)](mailto:patrick.ncsilva@gmail.com)

---
