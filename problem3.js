// 📝 Problem 3: Laptop Search

// একটা ফাংশন বানাও যেটা laptop list থেকে search করা নামের সাথে মিলে এমন laptop return করবে।

// Input:

// [
//   {id: 1, name:'mac air', price: 263751},
//   {id: 2, name:'Hp elite', price: 167351},
//   {id: 3, name:'Asus pro', price: 245351}
// ]
// search = 'asus'


// Output:

// [
//   {id: 3, name:'Asus pro', price: 245351}
// ]


const laptopList = [
    { id: 1, name: 'mac air', price: 263751 },
    { id: 2, name: 'Hp elite', price: 167351 },
    { id: 3, name: 'Asus pro', price: 245351 },
]
function alllaptops(laptops, search) {
    const searchResult=[];
    for(const laptop of laptops){
        if(laptop.name.toLowerCase().includes(search.toLowerCase())){
            searchResult.push(laptop);
        }
    }
    return searchResult;
}

const result =alllaptops(laptopList, 'asus');
console.log(result);