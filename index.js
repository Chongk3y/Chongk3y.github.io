const square = document.getElementById("square");
const text = document.getElementById("text");

square.addEventListener("click", event => {
    square.animate(
        [
            {
                transform: "rotate(0)",
            },
            {
                transform: "rotate(1440deg)",
            }
        ],

        {
            duration: 2000,
            fill: "forwards",
            delay: 0,
        }
    );

    //renbo
   /* 
    text.animate(
        [
            { color: "red" },
            { color: "orange" },
            { color: "yellow" },
            { color: "green" },
            { color: "blue" },
            { color: "indigo" },
            { color: "violet" },
        ],
        {
            duration: 2000,
            iterations: 1,
        }
    );
    */

    setTimeout(() => {
        text.textContent = "WEEEEEEEEE! 😄";

        setTimeout(() => {
            text.textContent = "Click the pencil!🙂";
        }, 2000); 

    }, 0);
});



