import { Flex, Text, Spacer, Box, Button } from "@chakra-ui/react";
import React, { forwardRef, useState, useEffect } from "react";
import type { BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  children: React.ReactNode;
  noOfLines: number;
}

const ExpandableText = forwardRef<HTMLDivElement, Props>(
  ({ children, noOfLines, ...rest }, ref) => {
    const [expandedCount, setExpandedCount] = useState<number | undefined>(noOfLines);
    const [isClicked, setIsClicked] = useState(false);
    const handleToggle = () => {
      setIsClicked(true);
      setExpandedCount(expandedCount ? undefined : noOfLines);
    };

    useEffect(() => {
      return () => {
        console.log("Component will be unmount");
      };
    }, []);

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const isTextClamped =
      (inputRef.current?.scrollHeight as number) > (inputRef.current?.clientHeight as number) ||
      isClicked;

    return (
      <Box ref={ref} {...rest}>
        <Box ref={inputRef} noOfLines={expandedCount}>
          {children}
        </Box>

        <Flex>
          <Spacer />
          <Button
            display={isTextClamped ? "block" : "none"}
            fontSize="text5"
            variant="link"
            onClick={handleToggle}
            mr="20px"
          >
            <Text fontSize="text5" lineHeight="lh32" textColor="blue.500">
              {!expandedCount ? "Show less" : "Read all"}
            </Text>
          </Button>
        </Flex>
      </Box>
    );
  }
);

ExpandableText.displayName = "ExpandableText ";

export default ExpandableText;
