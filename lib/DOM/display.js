function init() {
    const form = document.querySelector("form");
    const shareContainer = document.querySelector("#shareContainer");
    const secretMessageContainer = document.querySelector("#secretMessageContainer");
    const newMessage = document.querySelector("#createMessage");



    if (window.location.href.indexOf("#") !== -1) {

        secretMessageContainer.style.display = "block";

        newMessage.addEventListener("click", () => {
            window.location.href = "/index.html";
        })

    } else {

        form.style.display = "block";
        form.addEventListener('submit', e => {
            e.preventDefault();

            form.style.display = "none";
            shareContainer.style.display = "block";
        });

    }
}
export { init };