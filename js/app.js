'use strict';
<<<<<<< HEAD
var b = document.getElementById('b1');
b.addEventListener('click',myScript);
var myTasks=[];

function myScript(){
  var text = document.getElementById('textfield');
  var date = document.getElementById('datefield');
  var toDo ={text:text.value,date:date.value};
  myTasks.push(toDo);

  localStorage.setItem('myTasks',JSON.stringify(myTasks));
  addAllTasks();
  text.value='';
  date.value='';

}

function addAllTasks(){
  var list=document.getElementById('MyToDo');
  list.innerHTML='';
  for(var i=0; i< myTasks.length;i++){
    var entry=document.createElement('li');
    var p1=document.createElement('p');
    var p2=document.createElement('p');
    p1.appendChild(document.createTextNode(myTasks[i].text));
    p2.appendChild(document.createTextNode(myTasks[i].date));
    p1.setClass='todo';
    p2.setClass='date';
    entry.appendChild(p1);
    entry.appendChild(p2);
    list.appendChild(entry);
  }

}
initializeList();

function initializeList(){
  var tmp=localStorage.getItem('myTasks');
  if(tmp!==null){
    myTasks=JSON.parse(tmp);
    addAllTasks();
  }
}
=======

>>>>>>> sahar
