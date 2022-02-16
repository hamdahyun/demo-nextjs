import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default wrapper.withRedux(MyApp);