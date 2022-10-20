import {Input} from '@chakra-ui/react';

const placeHolderStyle = {
    fontFamily: 'secondary', 
    fontSize: 'text4', 
    fontWeight: '400',
    color: 'gray.400'
}

interface IFormInput {
    type: string,
    placeholder: string
}
const FormInput = ({type, placeholder}:IFormInput) => {
    return (
        <Input 
            type={type} 
            placeholder={placeholder}
            _placeholder={placeHolderStyle}
            w='359px'
            h='50px'
            borderColor='gray.400'
            pl='21px'
            pt='15px'
            pb='15px'
        />
    )
}

export default FormInput;