const botonEnviar = document.querySelector('#btn-enviar');


function ValidarEmail(correoElectronico) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(correoElectronico) ? true : false;
}

let Validar = () => 
{
    let inputMensajes = document.querySelectorAll('#mensajeContacto [required]');
    let mensajeError = true;

    var correoElectronico = document.getElementById('email').value;
    
    mensajeError = ValidarEmail(correoElectronico);

    for(i = 0; i < inputMensajes.length; i++)
    {
        if(inputMensajes[i].value == '')
        {
            inputMensajes[i].classList.add('errorVacio');
            mensajeError = false;
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
            'title': 'Éxito',
            'text':  'Su mensaje ha sido enviado',
            'icon': 'success' 
        });
    }
    else
    {
        Swal.fire({
            'title': 'ERROR',
            'text':  'Complete correctamente los campos',
            'icon': 'warning' 
        });
    }
};

botonEnviar.addEventListener('click', EnviarDatos);
