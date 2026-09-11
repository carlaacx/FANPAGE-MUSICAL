document.addEventListener("DOMContentLoaded", function() {
    
    const btnTocar = document.getElementById("btn-tocar");
    const textoDisco = document.getElementById("texto-disco");

    const garimpos = [
        "Lado A, faixa 3: 'Como Nossos Pais' com Elis Regina em 1976.",
        "Lado B: 'Metamorfose Ambulante' do Raul Seixas (Seja um maluco beleza).",
        "Raridade: 'Preciso Me Encontrar' do Cartola (1976). Coloca o fone e fecha os olhos.",
        "Rockzin:✮⋆˙'November Rain' do Gun's in Roses (1991).✮⋆˙ A que nunca pode faltar na playlist.",
        "No Radar:⋆˚꩜｡ּ 'Mulher Homem Bicho' de Ana Frango Eletrico ⋆˚꩜｡ּ.",
        "Clássico Romantico: 'Linger' The Cramberries (1993)."
       
    ];

    btnTocar.addEventListener("click", function() {
        const sorteio = Math.floor(Math.random() * garimpos.length);
        textoDisco.textContent = garimpos[sorteio];
    });

});