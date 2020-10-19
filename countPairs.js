//Input variables
let arr=[3, 3, 3, 4, 3, 5, 5, 5, 5, 5, 5, 4, 4, 4, 5];
let arr_len=arr.length;

//Function definition (using Hash Map for time complexity of O(n) and space Complexity of O(n))
function countPair(arr, arr_len)
{
    
    let count=0;
    //Using the Hash Map to keep count of every number 
    let pairs=new Map();
    for(let i=0; i<arr_len; i++)
        {
            if(pairs.has(arr[i]))
            {
                let val=pairs.get(arr[i])+1;
                pairs.set(arr[i], val);
    
            }
            else
            {
                pairs.set(arr[i], 1);
    
            }
        }
    
    //Counting the pairs from Hash Map 
    for(let key of pairs.keys())
    {
            count=count + Math.floor(pairs.get(key)/2);
     }
    return count;
}

//Function call
//countPair(arr, arr_len);
console.log("Number of pairs are : "+countPair(arr, arr_len));
    