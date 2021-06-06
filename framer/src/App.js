import { React, useState, useEffect } from "react";
import Todos from "./components/Todos";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
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
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <Heading
            mb={8}
            Size="2xl"
            fontWeight="extrabold"
            bgClip="text"
            bgGradient="linear(to-r, green.200, pink.500)"
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Todos extraordinaire
          </Heading>
        </motion.div>
        <Todos todos={todos} deleteTodo={deleteTodo} />
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <AddTodo addTodo={addTodo} />
        </motion.div>
      </VStack>
    </>
  );
}

export default App;
