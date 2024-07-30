const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_u4idl91'
const templateId = 'template_lsn0iai'
const apikey = '_bl7p4KF5nynlICvW'

function sendEmail(event) {
    event.preventDefault();
    emailjs.init(serviceId);

    emailjs
    .sendForm(serviceId, templateId, frmEmail, apikey)
    .then((result) => Swal.fire("Su mensaje se ha enviado con exito.")  )
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            Text: 'No ha sido posible el envio del mensaje',
        });
    });
}   