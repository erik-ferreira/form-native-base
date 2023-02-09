import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

interface InputProps extends IInputProps {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bgColor="gray.700"
        fontSize="md"
        h={16}
        isInvalid={invalid}
        _focus={{
          bgColor: "gray.200",
          borderWidth: 2,
          borderColor: "green.500",
        }}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
