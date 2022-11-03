
class Local_Storage{
    constructor(givenLS_name, givenLS_value){ 
        this.LS_name = givenLS_name;
        this.LS_value = givenLS_value;
        localStorage.setItem(LS_name, JSON.stringify(LS_value));
    }
    get_LS(){
        if(null == localStorage.getItem(this.LS_name))
            return ([]);
        return(JSON.parse(localStorage.getItem(this.LS_name)));
    }
    LS_UpDate(LS_Obj){
        localStorage.setItem(this.LS_name,JSON.stringify(LS_Obj));
    }
    clear_LS(){
        localStorage.clear(this.LS_name);
    }
}

class Book {
    constructor(givenBook_Name, givenBook_Author, givenBook_Type){
        this.bookName = givenBook_Name;
        this.bookAuthor = givenBook_Author;
        this.bookType = givenBook_Type;
    }

    addTo_DOM(bookObj){
        
               
        document.getElementsByTagName("tbody")[0].innerHTML += `<tr>
                                                                    <td>${bookObj.bookName}</td>
                                                                    <td>${bookObj.bookAuthor}</td>
                                                                    <td>${bookObj.bookType}</td>
                                                                </tr> `;
    }
    clear(){
        document.getElementById("libraryForm").reset(); // Method Used To Reset All the Filled input-tags Just like .value = "";
    }
}

let addBook = document.getElementById("addBtn");

addBook.addEventListener('click', (Event_Obj)=>{  
    let bookName = document.getElementById("bookName").value; 
    let bookAuthor = document.getElementById("bookAuthor").value;  

   
    let mr = document.getElementById("radioMotivational"), tech_Radio = document.getElementById("radioTech"), fitness_Radio = document.getElementById("radioFitness"), bookType = (mr.checked) ? "Motivational"  : (tech_Radio.checked) ? "Technology" : (fitness_Radio.checked) ? "Fitness" : console.log("not selected.."), bookObj = new Book(bookName, bookAuthor, bookType );
    bookObj.clear(); 
    bookObj.addTo_DOM(bookObj);
    Event_Obj.preventDefault(); 
});