let myList = []

for (let a = 1; a < 101; a++) {
    let thing = {id: a,
                title: `item:${a}`}
    myList.push(thing)
}

console.log(myList)