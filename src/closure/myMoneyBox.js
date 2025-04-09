// function moneyBox(coins) {
    
//     let saveCoins = 0
//     saveCoins += coins
//     console.log(`Money box: $${saveCoins}`);
// }
// moneyBox(5)
// moneyBox(5)

function moneyBox() {
    let saveCoins = 0
    function displayMoney(coins) {
        saveCoins += coins
        console.log(`Money box: $${saveCoins}`)
    }
    return displayMoney
}
 const myMoneyBox = moneyBox()
 myMoneyBox(5)
 myMoneyBox(5)

 const moneyBoxAna = moneyBox()
 moneyBoxAna(12)
 moneyBoxAna(4)

 
 function shoppingCart() {
    let cart = []
    function addItems(item) {
        cart.push(item)
        return cart
    }
    return addItems
 }

 const s = shoppingCart()
 console.log(s('salsa de tomate'));
 console.log(s('pan'));
 console.log(s('papa'));
 console.log(s('frijoles'));
 
 
 function createPetList() {
    let petList = [];
    function addPetList(pet) {
        if(!pet) {
            return petList;
        }
        petList.push(pet)
    }
    return addPetList;
 }
 const myPetList = createPetList()

 myPetList('rodolfooo')
 myPetList('alune')
 console.log(myPetList())


 
 
 

