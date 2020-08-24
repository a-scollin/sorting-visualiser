export function QuickAlgoHandler(arrayin){
    const array = arrayin.slice();
    const anims = [];

    QuickSort(array,0,array.length-1,anims)

    return [anims,array];

}

function QuickSort(array, low, high, anims){
    if (low < high)
        {
            /* pi is partitioning index, arr[pi] is
              now at right place */
            let pi = partition(array, low, high, anims);

            // Recursively sort elements before
            // partition and after partition
            QuickSort(array, low, pi-1,anims);
            QuickSort(array, pi+1, high,anims);
        }
    }


function partition(array, low, high, anims){

    const piv = array[high];
    let i = low - 1;
    for(let j=low;j<high;j++){
        if(array[j]<piv){
            i++;

            anims.push([0,j,high])
            anims.push([1,j,high])


            anims.push([2,j,array[i]]);
            anims.push([2,i,array[j]]);


            //swap
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
    }

    anims.push([2,high,array[i+1]]);
    anims.push([2,i+1,array[high]]);
    //swap
    const temp2 = array[i+1];
    array[i+1] = array[high];
    array[high] = temp2;

    return i+1;

}
