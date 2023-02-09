import { NativeBaseProvider } from "native-base";

import { SignUp } from "./src/pages/SignUp";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}
