// document.querySelector("button")
//     .addEventListener("click", handledClick);

// function handledClick() {
//     alert("i was clicked");
// }

// use anomious
document.querySelectorAll(".drum") //class drum 
    .forEach((btn, index) => {
        btn.addEventListener("click", () =>{

            if(index == 0){
                alert("hello");
            }else{
                alert("bye")
            }
        });
    });
