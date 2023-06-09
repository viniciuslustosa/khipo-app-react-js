import Swal from 'sweetalert2';

const modal = {
    error: (message: string) => {
        Swal.fire({
            title: 'Ops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    },
    openLoading: (description = '') => {
        Swal.fire({
            title: 'Aguarde....',
            html: description,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
    },
    closeLoading: () => {
        Swal.close();
    },
    serverError: (message: string) => {
        Swal.fire({
            title: 'Ops!',
            text: message,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Tentar Novamente',
            cancelButtonText: 'Voltar',
        })
        .then((result) => {
            if (result.isConfirmed) {
                document.location.reload();
            } else if (result.isDismissed) {
                window.history.go(-1);
            }
        });
    },
    confirmation: (message?: string) => {
        return Swal.mixin({
            toast: true,
        }).fire({
            title: 'Confirmar exclusão?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#AD3232',
            background: '#22272e',
            cancelButtonColor: '#373E47',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
        })
    },
    mixinToast: (
        message?: string,
        timer?: number,
        icon?: 'success'
            | 'error'
            | 'warning'
            | 'info'
            | 'question',
        position?:
            'top'
            | 'top-start'
            | 'top-end'
            | 'top-left'
            | 'top-right'
            | 'center'
            | 'center-start'
            | 'center-end'
            | 'center-left'
            | 'center-right'
            | 'bottom'
            | 'bottom-start'
            | 'bottom-end'
            | 'bottom-left'
            | 'bottom-right'
    ) => {
        const Toast = Swal.mixin({
            toast: true,
            position: position ?? 'bottom',
            showConfirmButton: false,
            confirmButtonColor: '#AD3232',
            background: '#22272e',
            cancelButtonColor: '#373E47',
            timer: timer ?? 2000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
        return Toast.fire({
            icon: icon ?? 'success',
            title: message,
        })
    }
}
export default modal;