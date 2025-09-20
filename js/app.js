let userform = document.getElementById("userform")
let usertable = document.getElementById("usertable")

let studentlist = []


userform.addEventListener("submit", function (e) {

    let newstudents = {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        reshte: e.target.reshte.value,
        age: e.target.age.value,
    }
    console.log(newstudents);

    studentlist.push(newstudents)

    // document.getElementsByTagName("input").forEach(input => {
    //     input.value ="";
    // });


    e.preventDefault()
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
        
        `
container.appendChild(row)
    })
}

usertwolist(studentlist,usertable)



