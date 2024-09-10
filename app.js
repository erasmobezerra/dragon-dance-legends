function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = 
        `<div class="item-resultado"> 
            <p class="descricao-erro">
                >>> Erro! É obrigatório informar o nome ou título de um personagem da serie. <<<
            </p>
        </div>
        `;

        return         
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let nome = "";

    // Itera sobre cada dado da lista de dados
    for (let personagem of personagensHouseOfTheDragon) {        
        nome = personagem.nome.toLowerCase()
        titulo = personagem.titulo.toLowerCase()
        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || titulo.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">                
                <h2>
                    <a href="#" target="_blank">${personagem.nome}</a>
                </h2>
                <p class="descricao-meta">Título: ${personagem.titulo}</p>                
                <p class="descricao-meta">Casa: ${personagem.casa}</p>    
                <p class="descricao-meta">Descrição: ${personagem.descricao}</p>            
                <p class="descricao-meta">Mais informações,<a href=${personagem.link} target="_blank"> cliquei aqui!</a></p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = `
        '<div class="item-resultado"> 
            <p class="descricao-erro">
               >>> Atenção! Nome ou título informado não encontrado. Tente novamente! <<< 
            </p>
        </div>       
    `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
