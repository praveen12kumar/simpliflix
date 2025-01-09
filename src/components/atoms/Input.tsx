"use client";

interface InputProps{
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value:string;
    type: "email" | 'password' | 'text' | 'chekbox';
}


const  Input: React.FC<InputProps> = ({placeholder, onChange, value, type})=>{
    return(
        <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="w-full text-md text-gray-700 bg-neutral-200 border outline-none border-gray-50 p-2 rounded"
        />
        
        
    )
};

export default Input;