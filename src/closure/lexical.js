const myGlobal = 0;

function miFunction() {
    const myNumber = 1;
    console.log(myGlobal);
    

    function myParent() { // Function interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
            
        }
        return child()
    }
    return myParent()
}
miFunction()