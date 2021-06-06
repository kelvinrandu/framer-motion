import React from "react";
import {
  HStack,
  IconButton,
  VStack,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function Todos({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="cyan" p="4" m="4" borderRadius="lg">
        no todo list
      </Badge>
    );
  }

  return (
    <VStack
      w="50%"
      divider={<StackDivider />}
      borderWidth="2px"
      borderRadius="lg"
      p={4}
      borderColor="gray.100"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack>
          <ul>{todo.name}</ul>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default Todos;
