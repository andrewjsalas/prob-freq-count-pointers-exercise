// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCounts = {};

    for (const letter of letters) {
        if (!letterCounts[letter] || letterCounts[letter] === 0) {
            return false;
        } else {
            letterCounts[letter]--;
        }
    }

    return true;
}
