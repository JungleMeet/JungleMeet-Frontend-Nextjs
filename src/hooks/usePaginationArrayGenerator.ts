import { useState } from "react"

const genPageArray=(totalPage: number, centrePage:number)=>{
    const output=[]
    const firstPage=1 // for easier understanding
    const lastPage=totalPage // for easier understanding
    const c=centrePage // make variable name shorter for easier use
    
    const leftestToStart=Math.abs((centrePage-2)-firstPage)
    const rightestToEnd=Math.abs(lastPage-(centrePage+2))
    
    const leftSpot=(leftestToStart>2)?"leftDot":firstPage+1
    const rightSpot=(rightestToEnd>2)?"rightDot":lastPage-1
    
    output.push(firstPage)
    output.push(leftSpot)
    output.push(c-2,c-1,c,c+1,c+2)
    output.push(rightSpot)
    output.push(lastPage)
    const filteredUniqueOutput=[...new Set(output)].filter(item=>{
        if (typeof item === "number") return item>0 && item <=lastPage
        if (typeof item === "string") return item
    })
    // when center number is 1,2 or near the end, very few numbers will show, we could add it manually
    if (centrePage<3){
        const index=filteredUniqueOutput.indexOf(c+2)+1
        filteredUniqueOutput.splice(index,0,c+3,c+4)
    }

    if (lastPage-centrePage<3){
        const index=filteredUniqueOutput.indexOf(c-2)
        filteredUniqueOutput.splice(index,0,c-4,c-3)

    }
    return filteredUniqueOutput
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