async function genre_scroll(){
    localStorage.clear()
    let index = 0;
    let counter = 0;
    
    if(counter === 0){
        document.querySelector("#back").style.backgroundColor = "gray";
        document.querySelector("#back").removeEventListener("click", click_right_arrow)
    }
    
    let response = await fetch("https://api.rawg.io/api/genres?key=c6881186f1044f2bb2a5cc2ea0ea4faa");
    let genre_data = await response.json();

  let genre_names = [];
  let genre_images = [];
  
  genre_data.results.forEach(genre => {
      genre_names.push(genre.name);
      genre_images.push(genre.image_background);
    });
    
    console.log(genre_images);
    console.log(genre_names);
    
    
    let all_dom_boxes = document.querySelectorAll(".box");
    
    for (let i = 0; i < 4; i++) {
        all_dom_boxes[i].style.backgroundImage = `url(${genre_images[i]})`
        all_dom_boxes[i].innerHTML = `
        <div class="genre_text_wrapper">
        <div class="genre_text">${genre_names[i]}</div>
        </div>
        
      `;
    }
    

  function click_right_arrow() {
  
    if(counter === genre_names.length - 4){
        document.querySelector("#front").style.backgroundColor = "gray";
        document.querySelector("#front").removeEventListener("click", click_right_arrow)
    }
    else{
        index += 1;
        counter += 1;
        console.log(counter)
        if(counter !== 0){
            document.querySelector("#back").style.backgroundColor = "black";
            document.querySelector("#back").addEventListener("click", click_left_arrow)
        }
        
    
        let the_new_genre_images = [];
        let the_new_genre_names = [];
    
    
      
    
        for (let i = index; i < (4 + index); i++) {
            the_new_genre_images.push(genre_images[i]); 
            the_new_genre_names.push(genre_names[i]);
        }
    
    
        for (let i = 0; i < 4; i++) {
            all_dom_boxes[i].style.backgroundImage = `url(${the_new_genre_images[i]})`
            all_dom_boxes[i].innerHTML = `
                <div class="genre_text_wrapper">
                  <div class="genre_text">${the_new_genre_names[i]}</div>
                </div>
                
            `;
        }
      }

      
    }



  function click_left_arrow() {
    if(counter === 0){
        document.querySelector("#back").style.backgroundColor = "gray";
        document.querySelector("#back").removeEventListener("click", click_left_arrow)
    }
    else{
        index -= 1;
        counter -= 1;
        if(counter !== genre_names.length - 4){
    
            document.querySelector("#front").style.backgroundColor = "black";
            document.querySelector("#front").addEventListener("click", click_right_arrow)
        }
        if(counter === 0){
            document.querySelector("#back").style.backgroundColor = "gray";
            document.querySelector("#back").removeEventListener("click", click_left_arrow)
        }
        else{
            document.querySelector("#back").style.backgroundColor = "black";
            document.querySelector("#back").addEventListener("click", click_left_arrow)
        }
    
    
        let the_new_genre_images = [];
        let the_new_genre_names = [];
    
    
    
        
    
    
        for (let i = index; i < (4 + index); i++) {
            the_new_genre_images.push(genre_images[i]); 
            the_new_genre_names.push(genre_names[i]);
        }
        

        for (let i = 0; i < 4; i++) {
            all_dom_boxes[i].style.backgroundImage = `url(${the_new_genre_images[i]})`
            all_dom_boxes[i].innerHTML = `
                <div class="genre_text_wrapper">
                <div class="genre_text">${the_new_genre_names[i]}</div>
                </div>
                
            `;
        }

    }
  }

  document.querySelector("#front").addEventListener("click", click_right_arrow);
  document.querySelector("#back").addEventListener("click", click_left_arrow);

}

genre_scroll()