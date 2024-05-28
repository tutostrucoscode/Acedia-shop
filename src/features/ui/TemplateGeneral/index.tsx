import { Ico } from "@/assets/icons";
import {
  Avatar,
  Box,
  Container,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TemplateGeneralProps {
  children: React.ReactNode;
}

const TemplateGeneral: React.FC<TemplateGeneralProps> = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box minH={"32rem"}>
      <Box
        borderBottomWidth={"1px"}
        bg={"gray.100"}
        pos={"relative"}
        zIndex={1800}
      >
        <Container maxW="7xl">
          <HStack justify={"space-between"}>
            <HStack gap={10}>
              <HStack gap={3}>
                <IconButton
                  hidden={!isMobile}
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Open menu"
                  icon={<Ico.Menu />}
                />

                {/* Logo */}
                <Box>Logo</Box>
              </HStack>
              <Box></Box>
            </HStack>
            <HStack gap={4}>
              <Avatar name="Dan Abrahmov" />
            </HStack>
          </HStack>
        </Container>
      </Box>
      {children}
    </Box>
  );
};

export default TemplateGeneral;
