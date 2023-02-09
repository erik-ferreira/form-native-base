import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      w="full"
      h={16}
      bg="green.700"
      _pressed={{
        bgColor: "green.900",
      }}
      {...rest}
    >
      <Text color="white" fontSize="lg">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
