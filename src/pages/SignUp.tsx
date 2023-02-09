import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { VStack, Heading, Center, ScrollView } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

interface FormDataProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "A confirmação de senha não é igual"),
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleRegister(data: FormDataProps) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <VStack flex={1} bgColor="gray.200">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView _contentContainerStyle={{ px: 10, pb: 5 }}>
          <Center>
            <Heading my="24" fontSize="xl">
              Criar conta
            </Heading>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Confirme a senha"
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />

            <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
          </Center>
        </ScrollView>
      </TouchableWithoutFeedback>
    </VStack>
  );
}
