import "./App.css";
import Todos from "./components/Todos";
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  return (
    <>
      <VStack mt={3} p={4}>
        <IconButton
          colorScheme="teal"
          size="sm"
          isRound="true"
          variant="outline"
          aria-label="toggle colormode"
          alignSelf="flex-end"
          icon={<FaMoon />}
        />
        <Heading
          mb={8}
          Size="2xl"
          fontWeight="extrabold"
          bgClip="text"
          bgGradient="linear(to-r, green.200, pink.500)"
        >
         
          Todos extraordinaire
        </Heading>
        <Todos />
        <AddTodo />
      </VStack>
    </>
  );
}

export default App;
