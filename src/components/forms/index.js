import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export function Form(props) {
  const { handleChange, handleSubmit } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        + Tambah Pesanan
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Stack>
              {/* <Text>{form.JSON}</Text>
            <span dangerouslySetInnerHTML={{ __html: form }} /> */}
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <FormControl>
                    <FormLabel>Pesanan</FormLabel>
                    <Select
                      name={"order"}
                      onChange={handleChange}
                      placeholder="Pilih Opsi"
                    >
                      <option value="whatsapp">Whatsapp</option>
                      <option value="call">Call</option>
                      <option value="email">Email</option>
                    </Select>
                  </FormControl>{" "}
                  <FormControl>
                    <FormLabel>Nama</FormLabel>
                    <Input onChange={handleChange} name="name" type={"text"} />
                  </FormControl>{" "}
                  <FormControl>
                    <FormLabel>No. Telpon</FormLabel>
                    <Input onChange={handleChange} name="phone" type={"tel"} />
                  </FormControl>{" "}
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      onChange={handleChange}
                      type={"email"}
                      name="email"
                    />
                  </FormControl>{" "}
                  <FormControl>
                    <FormLabel>Jumlah Roti</FormLabel>
                    <Input
                      onChange={handleChange}
                      type={"number"}
                      name="total"
                    />
                  </FormControl>{" "}
                  <FormControl>
                    <FormLabel>Keterangan</FormLabel>
                    <Textarea onChange={handleChange} name="description" />
                  </FormControl>{" "}
                  <Button type={"submit"} colorScheme="blue">
                    Submit
                  </Button>
                </Stack>
              </form>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
