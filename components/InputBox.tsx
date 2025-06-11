
interface InputProps {
    placeHolder: string;
    typeInput: string;
    refrence: (instance: HTMLInputElement | null) => void;
}

function InputBox(props : InputProps) {
    return (
        <input type={props.typeInput} placeholder={props.placeHolder} ref={props.refrence} 
        className={"outline-none transition-all duration-300 px-4 py-2 border border-gray-700/80 bg-black rounded-sm focus:ring-4 min-w-72 ring-neutral-700/40"}
        />
    )
}

export default InputBox