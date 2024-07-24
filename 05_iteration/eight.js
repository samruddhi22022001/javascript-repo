// reduce method 

const myNo = [1, 2, 3, 4, 5, ]

const myTotal = myNo.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval

},0)
console.log(myTotal);

const myTotal2 = myNo.reduce((acc, currval) => acc + currval , 0)
console.log(myTotal2);

const shoppingCart = [{
    cource: "java",
    price: 6000
},
{
    cource: "Math",
    price: 2000

},
{
    cource:"Python",
    price: 5600

}
]

shopTotal = shoppingCart.reduce((acc, item) => acc + item.price ,0)

console.log(shopTotal);