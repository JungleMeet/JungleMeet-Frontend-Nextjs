import { Box } from "@chakra-ui/react";

export const FooterContent = `&copy; ${new Date().getFullYear()} Jungle Meet Forum.`;

const Footer = () => {
  return (
    <Box as="footer" display="flex" justifyContent="center" opacity={0.4} fontSize="sm">
      {FooterContent}
    </Box>
  );
};

export default Footer;
