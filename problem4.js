// 📝 Problem 4: Price Search

// একটা ফাংশন বানাও যেটা product list থেকে নির্দিষ্ট price এর সব product বের করবে।

// Input:

// [
//   {id: 1, name:'realme Phone', price: 26351},
//   {id: 2, name:'oppo phone ', price: 16351},
//   {id: 3, name:'infinix phone', price: 18351},
//   {id: 4, name:'samsung phone', price: 26351}
// ]
// search = 26351


// Output:

// [
//   {id: 1, name:'realme Phone', price: 26351},
//   {id: 4, name:'samsung phone', price: 26351}
// ]


const allPhones=[
  {id: 1, name:'realme Phone', price: 26351},
  {id: 2, name:'oppo phone ', price: 16351},
  {id: 3, name:'infinix phone', price: 18351},
  {id: 4, name:'samsung phone', price: 26351}
]

function phones(phonePrices, search){
    const searchResult=[];
    for(const phonePrice of phonePrices){
        if(phonePrice.price === search){
            searchResult.push(phonePrice);
        }
    }
    return searchResult;
}

const result=phones(allPhones, 26351);
console.log(result);