/* This function contains the action for inputting text, submitting the task, 
giving each new element specific attributes, clearing the task from the current 
tasks.
*/
function actionForSubmitting(){

    document.getElementById('submit').onclick = function(){
        let newResponse = String(document.getElementById('inputField').value)
        
        if(!/\S/.test(newResponse)){

            alert('You must enter a task.')
            document.getElementById('inputField').value = ''

        }else{
            
            document.getElementById('inputField').value = ''

            let newDiv = document.createElement('div')
            let newH4 = document.createElement('h4')
            let newInputBtn = document.createElement('input')

            newDiv.setAttribute('class', 'divContainer')
            newH4.setAttribute('class', 'h4Container')
            newInputBtn.setAttribute('type', 'checkbox')
            newInputBtn.setAttribute('class', 'myCheckBox')

            textForH4 = document.createTextNode(newResponse)

            newH4.appendChild(textForH4)
            newDiv.appendChild(newInputBtn)
            newDiv.appendChild(newH4)

            newDiv.style.display = 'flex';
            newDiv.style.flexDirection = 'row';
            newDiv.style.justifyContent = 'left';
            newDiv.style.marginTop = '-40px';
            newDiv.style.whiteSpace = 'normal';

            let appendSpot = document.getElementById('toDoSaved')

            appendSpot.appendChild(newDiv)

            let checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                let parentDiv = checkbox.closest('div');
                
                let childElement = parentDiv.querySelector('h4');
                if(checkbox.checked){
                    childElement.style.textDecoration = 'line-through';

                }else{
                    childElement.style.textDecoration = 'none'
                }
                });
            })
            let boxClicked = document.querySelectorAll('input[type="checkbox"]')
            boxClicked.forEach(boxCheckbox => {
            boxCheckbox.addEventListener('click', () => {
                var parentDiv = boxCheckbox.closest('div')
                var newDivSpot = document.getElementById('completedSaved')
                var oldDivSpot = document.getElementById('toDoSaved')
                //var oldParentDiv = oldDivSpot.closest('div')
                
                if(boxCheckbox){
                    parentDiv.remove()
                    newDivSpot.appendChild(parentDiv)
                    parentDiv.firstChild.setAttribute('disabled', 'disabled')
                }

            })
        })
    }}
}

function clearCompleted(){
    document.getElementById('clearCompletedTask').onclick = function(){
        let taskEntries = document.getElementById('completedSaved')
        if(taskEntries.firstChild){
            if(confirm('WARNING: Are you sure you want to clear your completed tasks?')){
                while(taskEntries.firstChild){
                    taskEntries.removeChild(taskEntries.lastChild)
                }
            }
        }else{
            alert('There is nothing to reset.')
        }
    }
}

function resetButton(){
    document.getElementById('reset').onclick = function(){
        let myNode = document.getElementById('toDoSaved')
        let myNodeComplete = document.getElementById('completedSaved')
        
        if( myNode.firstChild == null && myNodeComplete.firstChild == null){
            alert('There is nothing to reset.')
        }else {
            if(confirm('WARNING: Are you sure you want to clear the list?') == true){
                while( myNode.firstChild){
                    myNode.removeChild(myNode.lastChild)
                }
                while( myNodeComplete.firstChild){
                    myNodeComplete.removeChild(myNodeComplete.lastChild)
                }
            }
        }
    }
}

function enterKey(){
    const textInput = document.querySelector('#inputField') 
    const buttonSubmit = document.querySelector('#submit')
    textInput.addEventListener('keyup', event => {
        if (event.key === 'Enter'){
            event.preventDefault();
            buttonSubmit.click();
        }
    })
}

function redirectDashboard(){
    let dashboard = '/dashboard.html'
    window.location.href = `http://localhost:5000${dashboard}`
}

function redirectApps(){
    let apps = '/apps.html'
    window.location.href = `http://localhost:5000${apps}`
}

function todoList(){
    let todo = '/todo.html'
    window.location.href = `http://localhost:5000${todo}`
}

function returnNav(){
    let navigation = '/navigation.html'
    window.location.href = `http://localhost:5000${navigation}`
}

function backButton(){
    let loginPage = '/login.html'
    window.location.href = `http://localhost:5000${loginPage}`
}

function returnNav(){
    let navigation = '/navigation.html'
    window.location.href = `http://localhost:5000${navigation}`
}

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = " PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;

    document.querySelector("#clock")
            .innerHTML = currentTime;
}

showTime();
actionForSubmitting();
resetButton();
enterKey();
clearCompleted();
