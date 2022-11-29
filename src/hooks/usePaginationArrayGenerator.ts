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
    return filteredUniqueOutput
}

interface IUsePaginationArrayGeneratorProps{
    totalPage:number;
}

const usePaginationArrayGenerator = ({totalPage}:IUsePaginationArrayGeneratorProps) => {
    const centerNumber=Math.ceil((totalPage-1)/2)
    const [centrePage, setCentrePage] = useState(centerNumber)
    // the initial state cannot be access therfore use the ||
    const paginationArray=genPageArray(totalPage,centrePage||centerNumber)

    const handleClickOnLeftDot=()=>{
        if (centrePage-3>0) setCentrePage(prev=>prev-3)
    }

    const handleClickOnRightDot=()=>{
        if (centrePage+3<=totalPage) setCentrePage(prev=>prev+3)
    }
    return ( {paginationArray,handleClickOnLeftDot,handleClickOnRightDot,setCentrePage } );
}
 
export default usePaginationArrayGenerator;