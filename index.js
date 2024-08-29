window.onload = function () {
    const text = "João Pedro Helbel";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-animation").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
};


document.getElementById('downloadBtn').addEventListener('click', function () {

    var url = 'img/Curriculo.Joao_Helbel.pdf';
    var fileName = 'Curriculo_Joao_Helbel.pdf';

    var link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    alert('Currículo baixado!');
});
