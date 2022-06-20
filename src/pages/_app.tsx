import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@constants/theme";
import { Web3WalletProvider } from "src/providers/MetaMaskProvider";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const qcRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  );

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={qcRef.current}>
        <Web3WalletProvider
          config={{
            walletConnect: {
              rpc: {
                1: "https://mainet.infura.io/v3/f87b967bc65a41c0a1a25635493fa482",
                4: "https://rinkeby.infura.io/v3/f87b967bc65a41c0a1a25635493fa482",
                42: "https://kovan.infura.io/v3/f87b967bc65a41c0a1a25635493fa482",
              },
            },
            coinbaseWallet: {
              url: "https://mainet.infura.io/v3/f87b967bc65a41c0a1a25635493fa482",
              appName: "Nami Insurance",
            },
          }}
        >
          <Component {...pageProps} />
        </Web3WalletProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
