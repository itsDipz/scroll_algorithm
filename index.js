// Sebbes ide: 




let boxes_node_list = document.querySelectorAll(".box");
let colors = ["red", "green", "orange", "blue", "purple", "brown", "black", "gray"];
let the_index = 0;
let box_arr = [];


boxes_node_list.forEach(box => {
    box_arr.push(box);
})

for (let i = the_index; i < 4; i++) {
    box_arr[i].style.backgroundColor = colors[i];
}


for (let w = 0; w < 4; w++) {
    if (box_arr[w].style.backgroundColor === colors[0]) {
        document.querySelector("#back").style.backgroundColor = "gray";
        document.querySelector("#back").removeEventListener("click", backClick);
        console.log("done");
        break;
    }
}


function frontClick() {
    let the_colors = [];
    the_index += 1;
    document.querySelector(".wrapper_for_boxes").innerHTML = "";

    for (let i = the_index; i < 4 + the_index; i++) {
        the_colors.push(colors[i]);
    }

    for (let j = 0; j < 4; j++) {
        box_arr[j].style.backgroundColor = the_colors[j];
    }

    for (let w = 0; w < 4; w++) {
        if (box_arr[w].style.backgroundColor === colors[colors.length - 1]) {
            document.querySelector("#front").style.backgroundColor = "gray";
            document.querySelector("#front").removeEventListener("click", frontClick);
            console.log("done");
            break;
        }
        else {
            document.querySelector("#front").style.backgroundColor = "black";
            document.querySelector("#front").addEventListener("click", frontClick);
        }
    }

    for (let w = 0; w < 4; w++) {
        if (box_arr[w].style.backgroundColor === colors[0]) {
            document.querySelector("#back").style.backgroundColor = "gray";
            document.querySelector("#back").removeEventListener("click", backClick);
            console.log("done");
            break;
        }
        else {
            document.querySelector("#back").style.backgroundColor = "black";
            document.querySelector("#back").addEventListener("click", backClick);
        }
    }


    let new_div = document.createElement("div");
    new_div.classList.add("box");
    new_div.style.backgroundColor = colors[the_index];
    box_arr.splice(0, 1);
    box_arr.unshift(new_div)

    box_arr.forEach(box => {
        document.querySelector(".wrapper_for_boxes").appendChild(box);
    });
}


function backClick() {
    let the_colors = [];
    the_index -= 1;
    document.querySelector(".wrapper_for_boxes").innerHTML = "";

    for (let i = the_index; i < 4 + the_index; i++) {
        the_colors.push(colors[i]);
    }

    for (let j = 0; j < 4; j++) {
        box_arr[j].style.backgroundColor = the_colors[j];
    }

    for (let w = 0; w < 4; w++) {
        if (box_arr[w].style.backgroundColor === colors[0]) {
            document.querySelector("#back").style.backgroundColor = "gray";
            document.querySelector("#back").removeEventListener("click", backClick);
            console.log("done");
            break;
        }
        else {
            document.querySelector("#back").style.backgroundColor = "black";
            document.querySelector("#back").addEventListener("click", backClick);
        }
    }


    for (let w = 0; w < 4; w++) {
        if (box_arr[w].style.backgroundColor === colors[colors.length - 1]) {
            document.querySelector("#front").style.backgroundColor = "gray";
            document.querySelector("#front").removeEventListener("click", frontClick);
            console.log("done");
            break;
        }
        else {
            document.querySelector("#front").style.backgroundColor = "black";
            document.querySelector("#front").addEventListener("click", frontClick);
        }
    }

    let new_div = document.createElement("div");
    new_div.classList.add("box");
    new_div.style.backgroundColor = colors[the_index];
    box_arr.splice(0, 1);
    box_arr.unshift(new_div)

    box_arr.forEach(box => {
        document.querySelector(".wrapper_for_boxes").appendChild(box);
    });


}

document.querySelector("#front").addEventListener("click", frontClick);

document.querySelector("#back").addEventListener("click", backClick);

