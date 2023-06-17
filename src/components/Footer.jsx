import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/D4D03AQH8NXmf3UxFPA/profile-displayphoto-shrink_400_400/0/1674216069023?e=1692230400&v=beta&t=RE1-BbPyeB1Ip8C5_Kc6K8kBRGnKeRhSgA5r-LzdZak";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            // fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
          Founded by Yash Gupta
          <br />
          contact us:- yg121377@gmail.com
          <br />
          &#169; All Rights Reserved
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;