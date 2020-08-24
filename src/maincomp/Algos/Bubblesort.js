export function BubbleAlgoHandler(arraypassed){
    const array = arraypassed.slice();
    const anims = [];
    let len = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len-1; i++) {
            anims.push([0,i,i+1]); //look at array i this is i(mod4) == 0
            anims.push([1,i,i+1]); //unlook at array i this is i(mod4) == 1
            if (array[i] > array[i + 1]) {
                anims.push([2,i,array[i+1]]); //array i is now array i+1 height
                anims.push([2,i+1,array[i]]); //array i+1 is now array i height
                //swap!
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true;

        }
    }
    } while (swapped);

    return [anims,array];

}
