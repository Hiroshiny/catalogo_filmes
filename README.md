# 🎬 Catálogo de Filmes - Frontend Web

Este repositório contém o código-fonte do **frontend web** do sistema de Catálogo de Filmes, desenvolvido como parte do **Trabalho de Desenvolvimento de Sistemas - Etapa 3**.  
O objetivo é oferecer aos usuários uma plataforma moderna para **explorar filmes populares**, visualizar informações detalhadas e salvar **favoritos** após autenticação.

---

## 🚀 Tecnologias Utilizadas

O frontend do Catálogo de Filmes foi construído utilizando uma stack moderna e eficiente:

*   **Framework:** [React](https://react.dev/) – Biblioteca JavaScript para construção de interfaces interativas.
*   **Bundler:** [Vite](https://vitejs.dev/) – Ambiente de desenvolvimento rápido e moderno.
*   **Roteamento:** [React Router](https://reactrouter.com/) – Navegação entre páginas.
*   **HTTP Client:** [Axios](https://axios-http.com/) – Consumo da API do backend.
*   **Estilos:** CSS puro – Layout responsivo e adaptado à paleta do projeto.

---

## ✨ Funcionalidades do Frontend

O frontend oferece a interface para o usuário interagir com as seguintes funcionalidades:

*   **Catálogo de Filmes:** Exibição em grid de filmes locais e populares via integração com a [TMDb API](https://www.themoviedb.org/).
*   **Detalhes de Filmes:** Exibição de título, descrição, ano e poster dos filmes.
*   **Autenticação de Usuário:** Login via **Google** ou via **email/senha** armazenados localmente.
*   **Favoritos:** Usuários autenticados podem favoritar filmes, integrando-se ao backend.
*   **Layout Responsivo:** Interface que se adapta a diferentes dispositivos.
*   **Header Fixo:** Navegação principal com botão **Iniciar sessão**.

---

## 🛠️ Como Executar Localmente

Siga os passos abaixo para configurar e executar o frontend do Catálogo de Filmes em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio-frontend>
    cd catalogo-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto com:
    ```env
    VITE_API_URL=http://localhost:4000
    VITE_GOOGLE_CLIENT_ID=COLE_AQUI_SEU_CLIENT_ID
    ```

4.  **Inicie a aplicação:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

## 🗺️ ROADMAP

- [x] Layout inicial em React + Vite  
- [x] Integração com backend (API REST)  
- [x] Login via email/senha (localStorage)  
- [x] Login via Google Identity Services  
- [ ] Exibição de favoritos na interface  
- [ ] Página de detalhes para cada filme  
- [ ] Implementação de filtros e busca (por título, gênero, ano)  
- [ ] Responsividade avançada (mobile-first)  
- [ ] Adição de tema claro/escuro  

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para colaborar:

1.  Faça um fork deste repositório.  
2.  Crie uma nova branch para sua feature ou correção de bug:  
    ```bash
    git checkout -b feature/minha-nova-feature
    ```  
3.  Faça suas alterações e realize o commit:  
    ```bash
    git commit -m 'feat: Adiciona funcionalidade X'
    ```  
4.  Envie suas alterações para o seu fork:  
    ```bash
    git push origin feature/minha-nova-feature
    ```  
5.  Abra um Pull Request descrevendo suas alterações.  

---

## 👤 Autor

Projeto desenvolvido como parte do **Trabalho de Desenvolvimento de Sistemas - Etapa 3**  
Escola Estadual Manoel Ignácio — Hortolândia/SP
