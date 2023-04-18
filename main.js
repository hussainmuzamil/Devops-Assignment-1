// var e = document.getElementById("slctLanguages");
var userSelection;
let parentDiv;
window.onload = function(){
    parentDiv = document.getElementById("parentDiv");
    projectInfo.forEach(function(item){
        writeHtml(item);
    });
};
function onChange() {
//   var value = e.value;
//   var text = e.options[e.selectedIndex].text;
 userSelection = document.getElementById("slctLanguages").value;
 let array = projectInfo.filter(filterBylang)
 if(userSelection == ""){
     array = projectInfo
 }
 parentDiv.replaceChildren();
array.forEach(function(item){
    // var anchor = document.getElementById("link");
    // anchor.href += item.url;
    // anchor.innerHTML = anchor.innerHTML + item.title;  
    // var mydiv = document.getElementById("myDiv");
    // var aTag = document.createElement('a');
    // aTag.setAttribute('href',item.url);
    // aTag.innerText = item.title;
    // mydiv.appendChild(aTag);

    // let div = document.createElement('div');
    // div.classList.add("box");
    // let insideChildDiv = document.createElement('div');
    // insideChildDiv.classList.add("text");
    // let anchor = document.createElement('a');
    // anchor.setAttribute('href',item.url);
    // anchor.innerText = item.title;
    // insideChildDiv.appendChild(anchor);
    // div.appendChild(insideChildDiv);
    // // let parentDiv = document.getElementById("parentDiv");
    // parentDiv.appendChild(div);
    writeHtml(item);
});
  console.log(array);
  console.log(userSelection);
}
function writeHtml(item){
    let div = document.createElement('div');
    div.classList.add("box");
    let insideChildDiv = document.createElement('div');
    insideChildDiv.classList.add("text");
    let anchor = document.createElement('a');
    anchor.setAttribute('href',item.url);
    anchor.innerText = item.title;
    insideChildDiv.appendChild(anchor);
    div.appendChild(insideChildDiv);
    // let parentDiv = document.getElementById("parentDiv");
    parentDiv.appendChild(div);
}
function filterBylang(item) {
    if (userSelection === item.language) {
      return true;
    }
    return false;
  }
// e.onchange = onChange;
// onChange();
var projectInfo = [
{
    "title" : "Complain Management System",
    "url" : "#",
    "language" : "C#"
},
{
    "title" : "Bank Management System",
    "url" : "#",
    "language" : "C"
},
{
    "title" : "Calculator App",
    "url" : "#",
    "language" : "kotlin"
},
{
    "title" : "Login And Signup",
    "url" : "#",
    "language" : "kotlin"
},
{
    "title" : "Blog Api",
    "url" : "#",
    "language" : "Java"
},
{
    "title" : "lexical Analyser",
    "url" : "#",
    "language" : "C++"
},
{
    "title" : "Fit Finder",
    "url" : "#",
    "language" : "C++"
},
{
    "title" : "Book Store",
    "url" : "#",
    "language" : "Java"
},
]

