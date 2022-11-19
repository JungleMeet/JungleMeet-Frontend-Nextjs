type Element=string | number

// interface ItoggleElementInArray<Type>{
//     // <Type>(element:Type),
//     element:<Type>,
//     array: Type[],
// }

// export const toggleElementInArray<T>=({element, array}:{element:T, array:<T[]>}):T[]=>{
//     if (array.includes(element)){
//         return array.filter(elm=>elm!==element)
//     }
//     return [...array,element]

// }

// this is a pure function, it is save to use with React
export function toggleElement<T extends Element> ({element, array}:{element:T,array:Array<T>}):Array<T> {
    if (array.includes(element)){
        console.log(true)
        return array.filter(elm=>elm!==element)
    }
    console.log([...array,element])
    return [...array,element]
}