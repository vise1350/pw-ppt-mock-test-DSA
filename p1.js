
// solution of question 01 (Moving Zeros)

function shift(nums){
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            let val=nums.splice(i,1)[0]
            nums.push(val)
        }
        
    }
    return nums
    


}
// console.log(shift([0,1,0,3,12]))