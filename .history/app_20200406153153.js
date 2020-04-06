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
    if (datos.labora == "no") {
        texto.push('Datos personales:\n');
        texto.push('Nombre: ');
        texto.push(datos.nombre);
        texto.push('\n');
        texto.push('Actualmente no labora, entonces no puede aprobarse ningun credito');
    } else if (datos.labora == "si") {
        if (datos.salario < 1500) {
            texto.push('Datos personales:\n');
            texto.push('Nombre: ');
            texto.push(datos.nombre);
            texto.push('\n');
            texto.push('su salario:\n ');
            texto.push(datos.salario);
            texto.push('\n');
            texto.push('Es insuficiente para la aprobacion, entonces no puede aprobarse ningun credito');
        } else if (datos.salario >= 1500) {
            texto.push('Datos personales:\n');
            texto.push('Nombre: ');
            texto.push(datos.nombre);
            texto.push('\n');
            texto.push('su salario:\n ');
            texto.push(datos.salario);
            texto.push('\n');
            texto.push('USTED CUMPLE CON LOS REQUISITOS');
            texto.push('\n');
            texto.push('CREDITO APROBADO...');
        }
    }
}
document.getElementById('boton-txt').addEventListener('click', function() {
    var datos = getdata();
    descargarArchivo(generartxt(datos), 'credito.txt');
}, false);