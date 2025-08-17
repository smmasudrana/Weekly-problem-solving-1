// Problem-02: Count Vowels

// ⚠️ Function Name Must be countVowels()

// একটা function বানাও, যেটা একটা string ইনপুট নিবে এবং ওই string এর মধ্যে কতগুলো vowel (a, e, i, o, u) আছে সেটা count করে return করবে।

// 📥 Input:

// "programming is fun"

// 🚀 Output:

// 5


//answer of this problem;
function countVowels(vowels){
    const vowel=['a', 'e', 'i','o', 'u']
    const allVowels=[];

    for(const char of vowels){
        if(vowel.includes(char)){
            allVowels.push(char);
        }
    }
    return allVowels;
}

const sentence=('programming is fun');
const result =countVowels(sentence);
console.log(result);