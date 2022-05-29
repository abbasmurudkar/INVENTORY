import { useCallback, useState } from "react"

export function getNameInitials(name) {
const splitName = name.toUpperCase().split(' ')
if(splitName.length > 1)
{
    return splitName[0][0] + splitName[1][0]
}
return splitName[0][0]
}

export function useModalState(defaultValue = false){
    const [isOpen , setIsopen] = useState(defaultValue)

    const open = useCallback(()=> setIsopen(true),[])
    const close = useCallback(()=> setIsopen(false),[])

    return {isOpen, open, close }
}