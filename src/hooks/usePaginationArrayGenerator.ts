import { useState } from "react"

const genPageArray=(totalPage: number, centrePage:number)=>{
    const output = [];
    if (totalPage < 10) {
        for (let i = 1; i <= totalPage; i++) {
            output.push(i);
        }
        return output;
    }
    const firstPage = 1; // for easier understanding
    const lastPage = totalPage; // for easier understanding
    const c = centrePage; // make variable name shorter for easier use

    const leftestToStart = Math.abs(centrePage - 2 - firstPage);
    const rightestToEnd = Math.abs(lastPage - (centrePage + 2));

    const leftSpot = leftestToStart > 2 ? "leftDot" : firstPage + 1;
    const rightSpot = rightestToEnd > 2 ? "rightDot" : lastPage - 1;
    const middleSection = [c - 2, c - 1, c, c + 1, c + 2];

    // if the number is out of range or already exists, replace it, the result will be unordered
    const modifiedSection = middleSection.map((number) => {
        if (number < 1 || [firstPage, leftSpot].includes(number)) {
            return number + 5;
        }
        if (number > lastPage || [rightSpot, lastPage].includes(number)) {
            return number - 5;
        }
        return number;
    });
    output.push(firstPage, leftSpot, ...modifiedSection, rightSpot, lastPage);
    const filteredUniqueOutput = [...new Set(output)];

    filteredUniqueOutput.sort((a, b) => {
        if (a === "leftDot") a = 1.5;
        if (b === "leftDot") b = 1.5;
        if (a === "rightDot") a = lastPage - 0.5;
        if (b === "rightDot") b = lastPage - 0.5;
        // the following line is to satisfy typescript. it considers a or b could be other strings
        if (typeof a === 'string'|| typeof b==='string') return -1
        return a - b;
    });
    return filteredUniqueOutput;
}

interface IUsePaginationArrayGeneratorProps{
    totalPage:number;
}

const usePaginationArrayGenerator = ({totalPage}:IUsePaginationArrayGeneratorProps) => {
    const [centrePage, setCentrePage] = useState(1)
    // the initial state cannot be access therfore use the ||
    const paginationArray=genPageArray(totalPage,centrePage||1)

    const handleClickOnLeftDot=()=>{
        if (centrePage-3>0) setCentrePage(prev=>prev-3)
    }

    const handleClickOnRightDot=()=>{
        if (centrePage+3<=totalPage) setCentrePage(prev=>prev+3)
    }
    return ( {paginationArray,handleClickOnLeftDot,handleClickOnRightDot,setCentrePage } );
}
 
export default usePaginationArrayGenerator;