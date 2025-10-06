let userform = document.getElementById("userform")
let usertable = document.getElementById("usertable")
let serchbox = document.getElementById("serchbox")

let studentlist = []


userform.addEventListener("submit", function (e) {

    let newstudents = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        reshte: e.target.reshte.value,
        age: e.target.age.value,
        id: generateUniqueId(),
    }
    console.log(newstudents);

    studentlist.push(newstudents)

    // document.getElementsByTagName("input").forEach(input => {
    //     input.value ="";
    // });


    e.preventDefault()
    usertwolist(studentlist,usertable)
})


function usertwolist(list, container) {
    container.innerHTML="";

    list.forEach((key, index) => {

        let row = document.createElement("tr")

        row.innerHTML = `
        <td>${key.firstname}</td>
        <td>${key.lastname}</td>
        <td>${key.reshte}</td>
        <td>${key.age}</td>       
        <button class="deleted">حذف</button>  
        `
container.appendChild(row)
    })
}

// function userdeleted(e){
//     let ali = e.target.
// }






function generateUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0; // Random number between 0 and 15
        const v = c === 'x' ? r : (r & 0x3 | 0x8); // For 'x', any random number; for 'y', ensure we get a value 8-11
        return v.toString(16); // Convert to hexadecimal
    });
};
