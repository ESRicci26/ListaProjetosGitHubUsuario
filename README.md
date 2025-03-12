# Projeto GitHub Repositories Viewer - Usuário Tela

Este projeto é uma aplicação web simples que permite aos usuários buscar e visualizar repositórios públicos de qualquer usuário do GitHub.
Ele utiliza a API do GitHub para buscar os repositórios e exibi-los em uma grade responsiva.

## Funcionalidades

- **Busca de Repositórios**: Insira o nome de usuário do GitHub para listar todos os repositórios públicos do usuário.
- **Exibição em Grade**: Os repositórios são exibidos em uma grade responsiva, com informações como nome, descrição e link para o repositório.
- **Design Responsivo**: O layout se adapta a diferentes tamanhos de tela, desde desktops até dispositivos móveis.
- **Feedback Visual**: Um indicador de carregamento é exibido enquanto os repositórios estão sendo buscados.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização e layout responsivo.
- **JavaScript**: Interatividade e consumo da API do GitHub.
- **GitHub API**: Para buscar os repositórios do usuário.

## Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, etc.).
- Conexão com a internet.

### Como Funciona

1. **Insira o Nome de Usuário**:
   - No campo de entrada, digite o nome de usuário do GitHub que deseja buscar (por exemplo, `ESRicci26`).

2. **Clique em "Buscar Repositórios"**:
   - Após inserir o nome de usuário, clique no botão "Buscar Repositórios" para iniciar a busca.

3. **Visualize os Repositórios**:
   - Os repositórios serão exibidos em uma grade abaixo do campo de busca. Cada card contém:
     - Nome do repositório.
     - Descrição (se disponível).
     - Link para acessar o repositório no GitHub.

4. **Responsividade**:
   - A grade de repositórios se ajusta automaticamente ao tamanho da tela, exibindo 1, 2 ou 3 colunas dependendo da largura do dispositivo.

### Estrutura do Projeto

```
projeto-github/
│
├── css/
│   └── github.css          # Estilos CSS para a página
│
├── js/
│   └── github.js           # Lógica JavaScript para buscar e exibir repositórios
│
├── github.html             # Página principal do projeto
│
└── README.md               # Documentação do projeto
```

### Personalização

- **Alterar Estilos**:
  - Para personalizar o design, edite o arquivo `css/github.css`. Você pode alterar cores, fontes, espaçamentos, etc.

- **Modificar a Lógica**:
  - Para alterar a lógica de busca ou exibição, edite o arquivo `js/github.js`. Por exemplo, você pode adicionar filtros ou paginação.

- **Adicionar Novas Funcionalidades**:
  - Você pode expandir o projeto adicionando novas funcionalidades, como:
    - Paginação de resultados.
    - Filtros por linguagem de programação.
    - Exibição de informações adicionais, como estrelas, forks e data de criação.

### Exemplo de Uso

1. Abra o arquivo `github.html` no navegador.
2. Insira o nome de usuário `ESRicci26` no campo de busca.
3. Clique em "Buscar Repositórios".
4. Veja os repositórios sendo exibidos em uma grade organizada.

### Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### Links Úteis

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [JavaScript Tutorial](https://www.w3schools.com/js/)

---

Este `README.md` fornece uma visão geral completa do projeto, incluindo instruções de uso, estrutura de arquivos e como contribuir.
Você pode personalizá-lo conforme necessário para o seu repositório no GitHub.
