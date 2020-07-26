var list = document.getElementById("list");
function btnClick(){
    var TodoItem = document.getElementById("val");
    var value = TodoItem.value;
    var li = document.createElement("li");
    // var liItem = document.createTextNode(value);
    var liItem = document.createElement("input")
    liItem.setAttribute("type","text")
    liItem.setAttribute("id","text-data")
    liItem.setAttribute("value",value)
    liItem.disabled = true;


    var btn = document.createElement("button")
    btn.setAttribute("id","edit");
    btn.setAttribute("class","btn btn-info edits");
    btn.setAttribute("onclick" , "editBTN(this)")
    var editbtn = document.createTextNode("Edit")
    btn.append(editbtn)

    var btns = document.createElement("button")
    btns.setAttribute("id","save");
    btns.setAttribute("class","btn btn-info");
    btns.setAttribute("hidden" , true)
    btns.setAttribute("onclick" , "saveBTN(this)")
    var sbtn = document.createTextNode("Save")
    btns.append(sbtn)

    var btnd = document.createElement("button")
    btnd.setAttribute("id","delete");
    btnd.setAttribute("class","btn btn-danger");
    btnd.setAttribute("onclick" , "deleteBTN(this)")
    var debtn = document.createTextNode("Delete")
    btnd.append(debtn)

    li.append(liItem)
    li.append(btn)
    li.append(btns)
    li.append(btnd)
    list.append(li);

    TodoItem.value = "";
}

function editBTN(id){
    // var valll = document.getElementById("text-data").value;
    var valll = id.parentNode.firstChild.value;
    id.parentNode.childNodes[2].hidden = false;
    id.parentNode.firstChild.value = "";
    id.parentNode.firstChild.disabled = false;
    id.parentNode.firstChild.focus();
    id.parentNode.firstChild.value = valll;
    id.hidden = true;
    var array = document.getElementsByClassName("edits");
    for(var i=0; i<array.length;i++){
        array[i].disabled = true;
    }
    // var TodoItem = document.getElementById("val");
    // var values =  id.parentNode.firstChild.nodeValue;
    // var input = document.createElement("input")
    // input.setAttribute("class","form-control")
    // input.setAttribute("type","text")
    // input.setAttribute("value" , values);
    // TodoItem.value = values;
    // document.getElementById("add").hidden = true;
    // document.getElementById("save").hidden = false;
    // id.parentNode.childNodes[0].nodeValue = "";
}
function saveBTN(id){
    id.parentNode.firstChild.disabled = true;
    var array = document.getElementsByClassName("edits");
    for(var i=0; i < array.length;i++){
        array[i].disabled = false;
    }
    id.hidden = true;
    id.parentNode.childNodes[1].hidden = false;
}

function deleteBTN(id){
    
    id.parentNode.remove();
    var array = document.getElementsByClassName("edits");
    for(var i=0; i < array.length;i++){
        array[i].disabled = false;
    }
}
function deleteAll(){
    list.innerHTML = "";
}