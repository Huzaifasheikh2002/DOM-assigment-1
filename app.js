                                //DOM
                    // Assignment # 58-67JAVASCRIPT
// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById("main-content");
console.log(mainContent);
// ii. Display all child elements of “main-content” element.a
console.log(mainContent.children);
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
var render = document.getElementsByClassName("render")
render.innerHTML = "huzaifa"
console.log(render.innerHTML)
// iv. Fill input value whose element id first-name using javascript.
var input = document.getElementById("first-name")
input.value = "Huzaifa"
console.log(input.value)
// v. Repeat part iv for id ”last-name” and “email”.
var lastName = document.getElementById("last-name")
lastName.value = "Enter your last name"
console.log(lastName.value)
                    // part 2
// i. What is node type of element having id “form-content”. 
var form=document.getElementById("form-content")
console.log(form.nodeType)   
// ii. Show node type of element having id “lastName” and its child node.
var lastName=document.getElementById("lastName");
console.log(lastName.childNodes)
// iii. Update child node of element having id “lastName”.
lastName.childNodes[1].innerHTML="huzaifa";
console.log(lastName.childNodes[1].innerHTML)
// iv. Get First and last child of id “main-content”.
console.log(mainContent.firstElementChild);
console.log(mainContent.lastElementChild)
// v. Get next and previous siblings of id “lastName”.
console.log(lastName.nextElementSibling);
console.log(lastName.previousElementSibling);
// vi. Get parent node and node type of element having id “email”
var email = document.getElementById("email")
console.log(email.parentNode);





