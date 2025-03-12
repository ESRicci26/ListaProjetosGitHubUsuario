document.addEventListener("DOMContentLoaded", function () {
  const listaRepositorios = document.getElementById("lista-repositorios");
  const loading = document.getElementById("loading");
  const buscarReposButton = document.getElementById("buscar-repos");
  const githubUserInput = document.getElementById("github-user");

  const buscarRepositorios = async (username) => {
    try {
      loading.style.display = "block";
      listaRepositorios.innerHTML = ""; // Limpa a lista antes de carregar novos repositórios

      const response = await fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=150`);
      if (!response.ok) {
        throw new Error('Erro ao buscar repositórios');
      }
      const data = await response.json();
      exibirRepositorios(data);
    } catch (error) {
      console.error('Erro:', error);
      listaRepositorios.innerHTML = "<p>Não foi possível carregar os repositórios. Verifique o nome de usuário.</p>";
    } finally {
      loading.style.display = "none";
    }
  };

  const exibirRepositorios = (repositories) => {
    if (repositories.length > 0) {
      const repositoriosHTML = repositories.map(repo => `
        <div class="repositorio">
          <h3>${repo.name}</h3>
          <p>${repo.description || 'Sem descrição disponível'}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </div>
      `).join("");
      listaRepositorios.innerHTML = repositoriosHTML;
    } else {
      listaRepositorios.innerHTML = "<p>Nenhum repositório encontrado.</p>";
    }
  };

  // Evento de clique no botão para buscar repositórios
  buscarReposButton.addEventListener("click", () => {
    const username = githubUserInput.value.trim();
    if (username) {
      buscarRepositorios(username);
    } else {
      alert("Por favor, insira um nome de usuário do GitHub.");
    }
  });
});