"use strict";
const toDoLists = [
    'Complete typeScript Course 🚀',
    'Complete python Course 🔥',
    'watch modern family season 9 😆 ',
];
// add to do in  toDoLists wen page load
const addToDo = () => {
    for (let toDo of toDoLists) {
        $('ul  ').append(`<li> <span><i class='fa fa-trash'></i></span> 
      ${toDo}
      </li>`);
    }
};
// add new to do
const addNewToDo = () => {
    $("input[type='text']").keypress(function (event) {
        if (event.which === 13) {
            //grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val('');
            //create a new li and add to ul
            $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + '</li>');
        }
    });
};
//  delete toDo
const deleteToDo = () => {
    //Click on X to delete Todo
    $('ul').on('click', 'span', function (event) {
        $(this)
            .parent()
            .fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();
    });
};
addToDo();
addNewToDo();
deleteToDo();
$('.fa-plus').click(function () {
    $("input[type='text']").fadeToggle();
});
// Check Off Specific Todos By Clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});
