let heading = document.createElement("h1")
heading.classList = "heading"; //give class name to heading

// Create spans for each word
let spanHappy = document.createElement("span");
spanHappy.textContent = "HAPPY ";
spanHappy.style.color = "orange";

let spanIndependence = document.createElement("span");
spanIndependence.textContent = "INDEPENDENCE ";
spanIndependence.style.color = "Blue";

let spanDay = document.createElement("span");
spanDay.textContent = "DAY";
spanDay.style.color = "green";

// Append spans to heading
heading.appendChild(spanHappy);
heading.appendChild(spanIndependence);
heading.appendChild(spanDay);

// Add heading to body
document.body.appendChild(heading);

let image_ele = document.createElement("img");
image_ele.src = "https://asset.gecdesigns.com/img/wallpapers/india-independence-day-image-digital-art-of-creative-indian-national-flag-wallpaper-sr06082410-cover.webp"
document.body.appendChild(image_ele);
image_ele.id = "image"

let create_btn = document.createElement("button")
create_btn.textContent = "JAI HIND";
create_btn.id = "button1";
document.body.appendChild(create_btn);


let new_para = document.createElement("p")
new_para.innerHTML = "India is not just a country, </br>it’s an emotion where every heart beats in tricolor pride."
new_para.style.display = "none"; // hide initially
new_para.style.color = "green";
new_para.style.fontSize = "40px";
new_para.style.marginTop = "20px";
document.body.appendChild(new_para);

new_para.style.textAlign = "center";
new_para.style.fontFamily = "Arial, sans-serif";
new_para.style.fontWeight = "bold";
new_para.style.fontStyle = "italic";

// Create audio element
let audio_ele = document.createElement("audio");
audio_ele.src =""; // replace with your audio URL
audio_ele.id = "audio";
document.body.appendChild(audio_ele);


create_btn.onclick = function() {
    let curr_img = document.getElementById("image")
    curr_img.src = "https://roseyevening.wordpress.com/wp-content/uploads/2021/08/wp-1629005072587.gif?w=600"
    create_btn.remove();
    document.body.style.backgroundColor = "black";
    curr_img.id = "curr_img1"
    new_para.style.display = "block";
    audio_ele.play();
    
}



