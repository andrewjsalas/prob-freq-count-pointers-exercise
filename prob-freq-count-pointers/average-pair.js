// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const average = (arr[left] + arr[right]) / 2;
        if (average === target) {
            return true;
        } else if (average < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}
