export function InsertAlgoHandler(arrayin){

    const array = arrayin.slice();
    const anims = [];

    let n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];

        let j = i - 1;
            anims.push([0,j,i]);
            anims.push([1,j,i]);
        while (j >= 0 && array[j] > key) {

            anims.push([2,j+1,array[j]]);

            array[j + 1] = array[j];
            j = j - 1;

            if(j>=0){
                anims.push([0,j,i]);
                anims.push([1,j,i]);
            }


        }

        anims.push([2,j+1, key])
        array[j + 1] = key;
    }


    return [anims,array];


}
