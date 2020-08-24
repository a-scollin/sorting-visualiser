export function MergeAlgoHandler(arrayin){

    let anims = [];
    let arra = arrayin.slice();
    MergeSort(arra,0,arra.length-1,anims);
    return [anims,arra];

}

function MergeSort(arraypassed, startidx, endidx, anims){

    if(startidx === endidx) {
        return;
    }

    const middle = Math.floor((startidx+endidx)/2);

    MergeSort(arraypassed,startidx,middle,anims);
    MergeSort(arraypassed,middle+1,endidx,anims);
    merge(arraypassed,startidx,middle,endidx,anims);


}

function merge(auxillaryArray, startIndex, middleIndex, endIndex, animations) {
    let sortArray = [];
    let i = startIndex;
    let j = middleIndex + 1;
    while(i <= middleIndex && j <= endIndex) {
        //Comparing value at ith and jth index so push them to change their color
        animations.push([0,i, j]);
        //By changing color we imply that we are comparing those two values and then again we should revert back to their original color so push them again
        animations.push([1,i, j]);
        if(auxillaryArray[i] <= auxillaryArray[j]) {
            //We should overwrite the value at (i+startIndex)th index with ith index so push them to highlight swap their heights
            animations.push([2,sortArray.length + startIndex, auxillaryArray[i]]);
            sortArray.push(auxillaryArray[i++]);
        }
        else {
            //We should overwrite the value at (i+startIndex)th index with jth index so push them to highlight swap their heights
            animations.push([2,sortArray.length + startIndex, auxillaryArray[j]]);
            sortArray.push(auxillaryArray[j++]);
        }
    }
    while(i <= middleIndex) {
        animations.push([0,i, i]);
        animations.push([1,i, i]);
        animations.push([2,sortArray.length + startIndex, auxillaryArray[i]]);
        sortArray.push(auxillaryArray[i++]);
    }
    while(j <= endIndex) {
        animations.push([0,j, j]);
        animations.push([1,j, j]);
        animations.push([2,sortArray.length + startIndex, auxillaryArray[j]]);
        sortArray.push(auxillaryArray[j++]);
    }
    for (let i = startIndex; i <= endIndex; i++) {
        auxillaryArray[i] = sortArray[i - startIndex];
    }
}
