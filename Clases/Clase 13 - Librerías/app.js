/*
SWEET ALERT

const boton = document.querySelector("#btn-alert");

boton.addEventListener("click", () => {
    Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
    });
});
*/

/*
SWEET ALERT

const boton = document.querySelector("#btn-alert");

boton.addEventListener("click", () => {
    const { value: email } = Swal.fire({
        title: "Input email address",
        input: "email",
        inputLabel: "Your email address",
        inputPlaceholder: "Enter your email address",
    });

    if (email) {
        Swal.fire(`Entered email: ${email}`);
    }
});
*/

const boton = document.querySelector("#btn-alert");

boton.addEventListener("click", () => {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        gravity: "bottom",
        position: "left",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
});
