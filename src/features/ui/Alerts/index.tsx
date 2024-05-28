import { Alert as ChakraAlert } from "@chakra-ui/react";
import { Trans } from "react-i18next";

const Alert = () => {
  return (
    <ChakraAlert status="info">
      <Trans>Courses</Trans>
    </ChakraAlert>
  );
};

export default Alert;
