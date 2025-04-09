function fruits() {
    if(true) {
        var fruit1 = 'apple' // Function Scope
        let fruit2 = 'kiwi' // Block Scope
        const fruit3 = 'banana' // Block Scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits()