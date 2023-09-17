export function filterSuggestedData(data, word, max = 4) {
    if(word.length < 1){
        return [];
    }
    const regexExp = new RegExp(word);
    let countToMax = 0;
    const result = data.filter((value) => {
        const resultTest = regexExp.test(value);

        if(resultTest) {
            countToMax++;
        }

        return resultTest && countToMax <= max;
    })
    return result;
}