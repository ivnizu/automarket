const botonEnviar = document.querySelector('#btn-enviar');

let Validar = () => 
{
    let inputMensajes = document.querySelectorAll('#mensajeContacto [required]');
    let mensajeError = false;

    for(i = 0; i < inputMensajes.length; i++)
    {
        if(inputMensajes[i].value == '')
        {
            inputMensajes[i].classList.add('errorVacio');
            mensajeError = true;
        }
        else
        {
            inputMensajes[i].classList.remove('errorVacio');
        }
    }

    return mensajeError;
};

let EnviarDatos = () =>
{
    let mensajeError = Validar();
    if(mensajeError)
    {
        Swal.fire({
            'title': 'ERROR',
            'text':  'Complete correctamente los campos',
            'icon': 'warning' 
        });
    }
    else
    {
        Swal.fire({
            'title': 'Éxito',
            'text':  'Su mensaje ha sido enviado',
            'icon': 'success' 
        });
    }
};

botonEnviar.addEventListener('click', EnviarDatos);