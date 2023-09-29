let lst = [] ;


while (true)

{ let command = prompt("What you wanna do?");

    if (command === 'new'){
        let newTodo = prompt("Add Todo:")
        console.log(`${newTodo} is added`);
        lst.push(newTodo);
    }
    else if (command==='list'){
        console.log("**************");
        for (let i=0;i<lst.length;i++){
            console.log(`${i}: ${lst[i]}`)
        }
        console.log("***************")
    }
    
    else if (command==='delete'){
        const x = (prompt("Enter specific index: "));
        lst.splice(x,1);
    }
    else if (command==='quit'){
        console.log("Quited The app")
        break ;
    }

}
