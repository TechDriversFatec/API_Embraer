import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useDisclosure, Table, Thead, Tr, Th, Tbody, Td, useBreakpointValue, Tfoot, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";

const Tabela = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_aeronave")
      ? JSON.parse(localStorage.getItem("cad_aeronave"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("cad_aeronave", JSON.stringify(newArray));
  };

  return (
    <Flex textColor="white" backgroundColor="rgb(40, 47, 85)" h="100vh" align="center" justify="center" fontSize="20px" fontFamily="poppins">
      <Box maxW={1200} w="100%" h="80vh" py={10} px={2}> Gerenciar informações
        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={isMobile ? 5 : 100} textColor="white" fontSize="20px">ID</Th>
                <Th maxW={isMobile ? 5 : 100} textColor="white" fontSize="20px">Fabricante</Th>
                <Th maxW={isMobile ? 5 : 100} textColor="white" fontSize="20px">Motor</Th>
                <Th maxW={isMobile ? 5 : 100} textColor="white" fontSize="20px">Peso referencial</Th>
                <Th maxW={isMobile ? 5 : 100} textColor="white" fontSize="20px">Quantidade de reversores</Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ id, fabricante, motor, peso, quantidade }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "rgb(45, 129, 147)" }}>
                  <Td maxW={isMobile ? 5 : 100}>{id}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{fabricante}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{motor}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{peso}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{quantidade}</Td>
                  <Td p={0}>
                    <EditIcon fontSize={20} onClick={() => [setDataEdit({ id, fabricante, motor, peso, quantidade, index }), onOpen(),]} />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon fontSize={20}onClick={() => handleRemove(id)}/>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>Registrar Aeronave</Button>
      </Box>
      {isOpen && (
        <ModalComp isOpen={isOpen} onClose={onClose} data={data} setData={setData} dataEdit={dataEdit} setDataEdit={setDataEdit} />
      )}
    </Flex>
  );
};

export default Tabela
