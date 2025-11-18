function gerardia (){
    const semana = new Date().toLocaleDateString("pt-br",{
        weekday: "long"
    });
    const hora = new Date().toLocaleTimeString("pt-br",{
        hour: "numeric",
        minute: "numeric"
    });

    const data = new Date().toLocaleDateString("pt-br")
    const datacompleta = `${semana} (${data}) às ${hora}`;

    return datacompleta;
}

export default gerardia;