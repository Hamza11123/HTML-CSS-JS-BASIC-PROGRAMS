
const get_DataFromLS = localStorage_Name => JSON.parse(localStorage.getItem(localStorage_Name));
function PUT_DataToLS(localStorage_Name, notes_OBJ) {
    localStorage.setItem(localStorage_Name, JSON.stringify(notes_OBJ));
}

const is_Empty = localStorage_Name => {
    if (localStorage.getItem(localStorage_Name) === null)
        return true;
    return false;
}

function get_OnlyObj_from_LS(localStorage_Name) {
    let obj = [];
    if (is_Empty(localStorage_Name))
        return (obj);       // returning 'obj'
    else
        return (get_DataFromLS(localStorage_Name));
}

// Display The Notes into The DoM
function DisplayNotesFrom_LS() {
    let notes_Obj = get_OnlyObj_from_LS('notes'); 

    let str = "";  

    for (let i = 0; i < notes_Obj.length / 2; i++) {  

        
        str += ` <div class="dynamicDiv card mx-2 my-2" style="width: 18rem; ">
        <div class="card-body">
          <h5 class="card-title">${notes_Obj[2 * i]}</h5>
          <p class="dynamicContent card-text">${notes_Obj[(2 * i) + 1]}</p>
          <button id=${2 * i} onclick = "deleteNote_Functionality(this.id)" class="btn btn-primary">Delete Moment</button> 
        </div>
    </div> `;
    }
    notesCont.innerHTML = str;
}

function deleteNote_Functionality(i) {
    notes_Obj = get_OnlyObj_from_LS("notes");
    notes_Obj.splice(i, 2);  
    PUT_DataToLS("notes", notes_Obj);  
    DisplayNotesFrom_LS(); 
}


function filterThroughInputTag() {
    // let notes_Obj = get_OnlyObj_from_LS("notes");
    let inputStr = searchBar.value, Html_Elm = Array.from(document.getElementsByClassName('dynamicContent'))

    
    for (let index = 0; index < Html_Elm.length; index++) {
        const element = Html_Elm[index];
        if (!Html_Elm[index].innerHTML.includes(inputStr))
            document.getElementsByClassName('dynamicDiv')[index].style.display = "none";
        else
            document.getElementsByClassName("dynamicDiv")[index].style.display = "block";
    }
}


let notesTitle = document.getElementById('notesTitle'), txtArea = document.getElementById("txtArea"), searchBar = document.getElementById("searchBar"), addNotes_Btn = document.getElementById("addBtn"), notesCont = document.getElementById("notesContainer");
DisplayNotesFrom_LS();
addNotes_Btn.addEventListener("click", () => {
    let notes_Obj = get_OnlyObj_from_LS("notes");
    notes_Obj.push(notesTitle.value, txtArea.value); 
    PUT_DataToLS('notes', notes_Obj);
    DisplayNotesFrom_LS();
});

searchBar.addEventListener("input", function () {
    filterThroughInputTag();
});

