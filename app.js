//Selectors
let addBtn = document.querySelector("#add");
let todayList = document.querySelector(".todayList");
let userInput = document.querySelector("#todayNew");
let completedList = document.querySelector(".completedList");
let warns = document.querySelector(".warnMsg");

//Warn Messege
function warnMsg() {
    warns.style.display = 'block';
    userInput.style.border = '1px solid red'
}
userInput.addEventListener('keypress', function () {
    warns.style.display = 'none';
    userInput.style.border = '0px solid red'
})

//Add Tasks
addBtn.addEventListener('click', function () {
    if (userInput.value == '') {
        warnMsg()
    }
    else {
        let newList = document.createElement('li');
        let listP = document.createElement('label');
        let deleted = document.createElement('span');
        let check = document.createElement('span');
        let deletedText = document.createTextNode('X')
        let checkDone = document.createTextNode('Complete')
        deleted.appendChild(deletedText);
        check.appendChild(checkDone);
        check.classList.add('doneBtn');
        deleted.classList.add('deleteBtn');
        let listcontent = document.createTextNode(userInput.value)
        listP.appendChild(listcontent);
        newList.appendChild(listP);
        newList.appendChild(deleted);
        newList.appendChild(check);
        todayList.appendChild(newList);

        // Delete Tasks
        deleted.addEventListener('click', function () {
            deleted.parentElement.remove();
        })

        deleted.addEventListener("mouseover", func, false);
        deleted.addEventListener("mouseout", func1, false);

        function func() {
            newList.setAttribute("style", "border:1px solid red;")
        }
        function func1() {
            newList.setAttribute("style", "border:none;")
        }


        //Complete Tasks
        check.addEventListener('click', function () {
            if (newList.classList.contains('done')) {
                check.parentElement.remove();
                todayList.appendChild(newList);
                check.innerHTML = 'Complete'
            }
            else {
                check.parentElement.remove();
                completedList.appendChild(newList);
                check.innerHTML = 'Redo';
            }

            newList.classList.toggle('done')
            newList.classList.toggle('finished')
            check.classList.toggle('doneBtn');
            check.classList.toggle('redoBtn')
        })
    }
})
