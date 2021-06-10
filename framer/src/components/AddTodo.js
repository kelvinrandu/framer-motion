import {React, useState} from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import {nanoid} from "nanoid";


function AddTodo({addTodo}) {
    const [content,setContent] =useState('');
    const toast = useToast();
  function handlesubmit(e) {
      e.preventDefault();
      if(!content){
        toast({
            title: "empty todo",
            status: "warning",
            position:  "top",
            duration: 4000,
            isClosable: true,
          })
        return
      }

      const todo ={
          id: nanoid(),
          name: content
      }
      addTodo(todo);
      setContent('');
     

  }
  return (
      <form onSubmit={handlesubmit}>
    <HStack mt={8}>
      <Input variant="filled" value={content} onChange={(e)=>setContent(e.target.value)} placeholder="add new todo" />
      <Button
        colorScheme="pink"
        px="8"
        type="submit"
        _hover={{
          bgGradient: "linear(to-r, teal.500,green.500)",
        }}
        
      >
       
        add todo
      </Button>
    </HStack>
    </form>
  );
}

export default AddTodo;
