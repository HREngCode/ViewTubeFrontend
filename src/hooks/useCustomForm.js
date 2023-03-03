import { useState } from "react";

//custom hooks are functions that we write ourselves that can be inputed into any file
//written by the react eng on the current project. 
//custom hooks must have "use" keyword in the beginning

const useCustomForm = (initialValues = {}, onSubmit) => {
  const [formData, setFormValues] = useState(initialValues);

  //from forms lecture
  //every input we create needs to be bound to a state variable and needs to implement the onChange listener
  //used for every inputs onChange event attribute listener
  const handleInputChange = (e) => {
    //line of code that we can add to functions to let it run asynchronously. can be called multiple times
    e.persist();
    if (e.target.name === "isStudent") {

      //"{.....}" passing javascript object. "..."=spread operator takes all key/value pairs and makes new object
      //e.target.name takes a look at the event name that the input that triggered the function.
      //if the key/value doesn't exist, it will be added to the object
      setFormValues({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {

    //prevents the default behavior of reloading the page
    e.preventDefault();
    onSubmit(formData);
  };

  //callback(); this calls back a function that is called back in a parameter.

  const reset = () => {
    setFormValues(initialValues);
  };

  //returns javaScript object {}
  return [formData, handleInputChange, handleSubmit, reset];
};

export default useCustomForm;
