function adicionarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
  
    if (nome && telefone) {
      const tabela = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];
      const novaLinha = tabela.insertRow();
      novaLinha.insertCell(0).textContent = nome;
      novaLinha.insertCell(1).textContent = telefone;
  
      // Limpar os campos do formulário
      document.getElementById('nome').value = '';
      document.getElementById('telefone').value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  // Função para pesquisar contato
  function pesquisarContato() {
    const pesquisa = document.getElementById('pesquisa-contato').value.toLowerCase();
    const linhas = document.querySelectorAll('#tabela-contatos tbody tr');
  
    linhas.forEach(linha => {
      const nomeContato = linha.cells[0].textContent.toLowerCase();
      if (nomeContato.includes(pesquisa)) {
        linha.style.display = '';
      } else {
        linha.style.display = 'none';
      }
    });
  }
