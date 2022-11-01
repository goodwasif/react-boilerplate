import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WagmiConfig } from "wagmi";
import { queryClient } from "lib/react-query";
import { wagmiClient } from "lib/wagmi";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
    </QueryClientProvider>
  );
}
