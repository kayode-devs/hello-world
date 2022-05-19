window.addEventListener("load", function(){
})
    let album = document.getElementById("albums");
    let page2 = document.getElementById("page2");    
    var todo = document.getElementById("todo-i");
    var item = document.querySelector(".item");
    var note = document.getElementById("note");
    var todoContainer = document.querySelector(".list");
    var li = document.getElementById("createLi");
    var back = document.getElementById("back");
    var notesInput = document.getElementById("notes-v");
    var titleInput = document.getElementById("title-v");
    var title = document.querySelector(".title");
    var notes = document.querySelector(".notes");
    var items;
    var content;
    var noteContent;
    var dateP;
        
    back.addEventListener("click", goBack)
    function goBack(){
        return open();
}



    function load(){
        run = setTimeout(open);
    }
function open(){
    document.getElementById("page1").style.display = "flex";
    document.getElementById("todo").style.display = "none";
    document.getElementById("page2").style.display = "none";
}

todo.addEventListener("click", todopage)
function todopage(){
    document.getElementById("page1").style.display = "none";
    document.getElementById("todo").style.display = "flex";
    return;
}

note.addEventListener("click", pageOne);
function pageOne(){
    return open();
}

function add(){
    document.getElementById("page2").style.display = "flex";
    document.getElementById("page1").style.display = "none";
    document.getElementById("todo").style.display = "none";
    titleInput.focus(); 
    titleInput.value = "";
    notesInput.value = "";
}

function myFunction(){

    const create = createNewElement();

    setTimeout(function(){
        return open()
    }, 1000)
    // edit function 
    items.addEventListener("click", function(){
        add();
        todoContainer.removeChild(items);
        noteContent.removeChild(dateP);
        content.removeChild(noteContent)
        
        titleInput.value = content.innerText;
        
        notesInput.value = noteContent.innerText;  
        // return addLocalStorage();   
          
    })
    console.log(content.value);
    
}
function createNewElement () {
    items = document.createElement("div");
    content = document.createElement("p");
    noteContent = document.createElement("p");
    dateP = document.createElement("p");
   
   // add classes from css files
   items.classList.add("item");
   content.classList.add("title");
   noteContent.classList.add("notes");
   dateP.classList.add("date");
   
   // add 
   content.innerText = titleInput.value;
   noteContent.innerText = notesInput.value;
   
   // Date values
   dateP.style.fontSize = "12px";
   var d = new Date();
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   var date = days[d.getDay()] + " " + d.getDate() + "," + " " + months[d.getMonth()] + "-" + d.getFullYear();
   var currentDate =  date;
   dateP.innerText = currentDate;

   // Append Elements
   items.append(content);
   content.append(noteContent);
   noteContent.append(dateP)
   todoContainer.appendChild(items);
   
}

const key = titleInput.value;
const value = notesInput.value;
localStorage.setItem(key, value);
localStorage.getItem(key, value);    
console.log(localStorage.getItem(key));


    for(let i = 0; i<localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.value(key);   

    
    }



    

// function albums(){
//     page2.style.opacity = ".5";
//     album.style.zIndex = "100"
//     album.style.opacity = "1";
//     album.style.display = "block";
// }
        







