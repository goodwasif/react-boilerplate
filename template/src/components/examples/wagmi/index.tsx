import { useAccount } from "wagmi";
import { Account } from "./Account";
import { Connect } from "./Connect";
import { NetworkSwitcher } from "./NetworkSwitcher";

export default function Wagmi() {
  const { isConnected } = useAccount();

  if (isConnected) {
    return (
      <>
        <Account />
        <NetworkSwitcher />
      </>
    );
  }

  return (
    <div>
      <Connect />
    </div>
  );
}
