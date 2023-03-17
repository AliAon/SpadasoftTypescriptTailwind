import React, { useRef } from "react";
const AddNew: React.FC<{
  onAddNewItem: (text: string) => void;
}> = (props) => {
  const AddNewInput = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputtext=AddNewInput.current!.value
    props.onAddNewItem(inputtext);
  };
  return (
    <form onSubmit={onSubmitHandler} className="shadow-2xl">
      <input type="text" ref={AddNewInput} className="rounded-l-lg" />
      <button type="submit" className="rounded-r-lg bg-black	text-white	p-2.5			">Submit</button>
    </form>
  );
};
export default AddNew;
