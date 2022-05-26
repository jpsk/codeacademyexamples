// Taip importuojam scss
import "bootstrap/scss/bootstrap.scss";

// 16 paskaitos stiliai
//import './styles/L16-style.scss';

// Musu stiliai
import './styles/L17-style.scss'


// Taip importuojam bootstrap is node_modules
import * as bootstrap from 'bootstrap';

// Taip inicializuojam "toastus"
// ir priskiriam "liveToastBtn" mygtukui

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
})
