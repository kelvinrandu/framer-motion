import React from "react";
import { HStack, IconButton, VStack, StackDivider, Spacer } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function Todos() {
  const todos = [
    {
      id: 1,
      name: "maize",
    },
    {
      id: 2,
      name: "beans",
    },
    {
      id: 3,
      name: "lettuce",
    },
  ];
  return (
  
      <VStack
        w="50%"
        divider={<StackDivider />}
        borderWidth="2px"
        borderRadius="lg"
        p={4}
        borderColor="gray.100"
        maxW={{ base: "90vw", sm: "80vw" ,lg:"50vw", xl: "40vw"}}
        alignItems="stretch"
      >
        {todos.map((todo) => (
          <HStack >
            <ul>{todo.name}</ul>
            <Spacer/>
            <IconButton icon={<FaTrash />} isRound="true" />
          </HStack>
        ))}
      </VStack>
  
  );
}

export default Todos;
