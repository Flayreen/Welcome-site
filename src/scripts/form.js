const form = document.querySelector(".contact__form");


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const formData = new FormData(form);
        const dataToSend = JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            text: formData.get('text')
        });

        const response = await fetch("https://site-for-nastya-992919e1b4a3.herokuapp.com/mail", {
            method: "POST",
            body: dataToSend,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.log(error)
    }
})