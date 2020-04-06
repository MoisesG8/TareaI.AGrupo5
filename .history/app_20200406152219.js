function getdata() {

    return {
        nombre: document.getElementById("nombre").value,
        labora: document.getElementById("labora").value,
        salario: document.getElementById("salario").value,
        fecha: (new Date()).toLocaleDateString()
    };
}

function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'credito.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
}

function generartxt(datos) {
    var texto = [];
    if (datos.salario == "no") {
        texto.push('Datos personales:\n');
        texto.push('Nombre: ');
        texto.push(datos.nombre);
        texto.push('\n');
    }
}