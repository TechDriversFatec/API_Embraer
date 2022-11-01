import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Box, } from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [fabricante, setFabricante] = useState(dataEdit.fabricante || "");
    const [motor, setMotor] = useState(dataEdit.motor || "");
    const [peso, setPeso] = useState(dataEdit.peso || "");
    const [quantidade, setQuantidade] = useState(dataEdit.quantidade || "");
    const [id, setId] = useState(dataEdit.id || "");

    const handleSave = () => {
        if (!fabricante || !motor || !peso || !quantidade || !id) return;

        if (idAlreadyExists()) {
            return alert("ID já cadastrado!");
        }

        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = { fabricante, motor, peso, quantidade, id };
        }
        const newDataArray = !Object.keys(dataEdit).length
            ? [...(data ? data : []), { fabricante, motor, peso, quantidade, id }]
            : [...(data ? data : [])];
        localStorage.setItem("cad_aeronave", JSON.stringify(newDataArray));

        setData(newDataArray);

        onClose();
    };

    const idAlreadyExists = () => {
        if (dataEdit.id !== id && data?.length) {
            return data.find((item) => item.id === id);
        }

        return false;
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro de Aeronaves</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl display="flex" flexDir="column" gap={4}>
                            <Box>
                                <FormLabel>ID</FormLabel>
                                <Input type="id" value={id} onChange={(e) => setId(e.target.value)}/>
                            </Box>
                            <Box>
                                <FormLabel>Fabricante</FormLabel>
                                <Input type="text" value={fabricante} onChange={(e) => setFabricante(e.target.value)} />
                            </Box>
                            <Box>
                                <FormLabel>Motor</FormLabel>
                                <Input type="text" value={motor} onChange={(e) => setMotor(e.target.value)} />
                            </Box>
                            <Box>
                                <FormLabel>Peso referencial</FormLabel>
                                <Input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
                            </Box>
                            <Box>
                                <FormLabel>Quantidade de reversores</FormLabel>
                                <Input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter justifyContent="start">
                        <Button colorScheme="green" mr={3} onClick={handleSave}>SALVAR</Button>
                        <Button colorScheme="red" onClick={onClose}>CANCELAR</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalComp;