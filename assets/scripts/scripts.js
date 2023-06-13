$(function () {
/*
    $(window).on('ajaxError', function(event, c,message,d,e) {
        UIkit.notification({
            message: message,
            status: 'warning',
            pos: 'top-center',
            timeout: 5000
        });
    });
*/
    $(window).on('ajaxConfirmMessage', function(event, message) {
        event.preventDefault();
        UIkit.modal.confirm(message, {labels: {ok: 'JA', cancel: 'NEIN'}}).then(() => {
            event.promise.resolve();
        }, () => {event.promise.reject()});
        return true;
    });
    $(document).on('ajaxSetup', function (event, context) {
        context.options.handleErrorMessage = function (message) {
            UIkit.notification({
                message: message,
                status: 'warning',
                pos: 'top-center',
                timeout: 5000
            });
        }
        context.options.handleFlashMessage = function (message, type) {
            UIkit.notification({
                message: message,
                pos: 'top-center',
                timeout: 5000
            });
        }
    })
});
