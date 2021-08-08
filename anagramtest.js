strs = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
console.log(anagram(strs))

function anagram(strs) {
    const temp = [];

    for (const s of strs) {
        const keys = Array(26).fill(0);
        for (const c of s) {
            ++keys[c.charCodeAt(0) - 97]
        }
        const key = keys.join("#");
        let idx = hasKey(temp, key)
        if (idx != -1) {
            temp[idx].push(s)
        } else {
            temp.push([])
            temp[temp.length - 1].push(key)
            temp[temp.length - 1].push(s)
        }

    }
    const res = [[]];
    for (let i = 0; i < temp.length; i++) {
        res[i] = temp[i].slice(1)
    }

    return res
};

function hasKey(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == key) {
            return i
        }
    }

    return -1
}