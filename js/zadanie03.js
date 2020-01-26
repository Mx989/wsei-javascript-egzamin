function bigestSumOfTwoElements(array) {
    if (array.length === 1) return array[0];
    if (array.length === 0) return false;
    else {
        const x1 = Math.max.apply(null, array);
        array.splice(array.indexOf(x1), 1);
        const x2 = Math.max.apply(null, array);
        console.log(x1 + x2);
        return x1 + x2;
    }
}

bigestSumOfTwoElements([1, 2, 3, 4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23, 45, 17, 12]) // => 68