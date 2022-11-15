import { Box, Text, Flex} from "@chakra-ui/react";
import React from "react";

function TeamMember(props:any) { 
    return (
        <Box mt="55px" ml="28px" mr="2px" alignItems="center" mb="40px">
            <Flex gap="5px">
                <Text
                    color="#000"  
                    fontFamily="Inter" 
                    fontStyle="normal"
                    fontWeight="700" 
                    fontSize="20px"
                    lineHeight="28px"
                >
                    {props.memberName} -
                </Text>
                <Text
                    color="rose.900" 
                    fontFamily="Inter" 
                    fontStyle="normal"
                    fontWeight="700" 
                    fontSize="20px"
                    lineHeight="28px"
                >
                    {props.title}
                </Text>
            </Flex>
            <Text
                mt="25"
                color="#000" 
                fontFamily="Inter" 
                fontStyle="normal"
                fontWeight="400" 
                fontSize="16px"
                lineHeight="20px"
            >
                Email: {props.Email}
                <br/>
                LinkedIn: {props.LinkedIn}   
                {/* How to make it a link? */}
            </Text>
        </Box>
    )
}


export default TeamMember;