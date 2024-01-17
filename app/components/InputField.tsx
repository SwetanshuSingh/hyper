import { Dispatch, SetStateAction } from "react";

type InputFieldProps = {
    value : string,
    type : string,
    id : string,
    state : string,
    setFormData : Dispatch<SetStateAction<{name : string, email : string, password : string}>>
}

const InputField = ({ value, type, id, state, setFormData } : InputFieldProps) : JSX.Element => {

  const handleChange = (evt : any) => {
    const field = evt.target.name;
    const value = evt.target.value;

    setFormData((prev : any) => {
        prev[field] = value
        return {...prev }
    })
  }
  
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="font-semibold tracking-wide">
        {value} :
      </label>
      <input
        id={id}
        name={id}
        value={state}
        className="rounded-md p-2 outline-none bg-[#1E2126]"
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;