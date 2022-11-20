type Element=string | number

// this is a pure function, it returns a new array. it is save to use with React
export function toggleElement<T extends Element> ({element, array}:{element:T,array:Array<T>}):Array<T> {
    if (array.includes(element)){
        return array.filter(elm=>elm!==element)
    }
    return [...array,element]
}