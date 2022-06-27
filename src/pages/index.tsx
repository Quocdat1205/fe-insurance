import type { NextPage } from "next";
import { Box, Button } from "@chakra-ui/react";
import useWeb3Wallet from "@hooks/useWeb3Wallet";
import Header from "@components/utils/Header";
import FormBuyInsuranceNew from "@components/home/FormBuyInsuranceNew";
import History from "@components/home/History";

const Home: NextPage = () => {
  const { account, activate } = useWeb3Wallet();

  return (
    <Box>
      <Header title="Insurance" image="favicon.ico" />
      {account ? (
        <Box color="black" textAlign="center">
          <FormBuyInsuranceNew />
          <History />
        </Box>
      ) : (
        <Button onClick={() => activate("metaMask")}>Connect Wallet</Button>
      )}
    </Box>
  );
};

export default Home;
