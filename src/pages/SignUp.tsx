import { VStack, Heading, Center } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import { Button } from "../components/Buttont";
import { Input } from "../components/Input";

export function SignUp() {
  return (
    <VStack flex={1} bgColor="gray.200" px={10}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Center>
          <Heading my="24" fontSize="xl">
            Criar conta
          </Heading>

          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirme a senha" />

          <Button title="Cadastrar" />
        </Center>
      </TouchableWithoutFeedback>
    </VStack>
  );
}
