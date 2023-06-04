//Complexity
//Time Complexity=O(n);
//Space Complexity=O(1);

// Function to sort an square array
function sortSquares(arr){
    let n = arr.length;

    // First convert each array elements into its square
    for (let i = 0; i < n; i++)
        arr[i] = arr[i] * arr[i];

    // Sort an array using "inbuilt sort function" in Arrays class.
    arr.sort();
}
// Question squaring of given number
let arr = [-4,-1,0,3,10];
let n = arr.length;

console.log("Before sort " + "<br/>");
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");

sortSquares(arr);
console.log("" + "<br/>");
console.log("After Sort " + "<br/>");
for (let i = 0; i < n; i++)
    console.log(arr[i] + " ");