
interface InputProps {
    placeHolder: string;
    typeInput: string;
    refrence: (instance: HTMLInputElement | null) => void;
}

function InputBox(props : InputProps) {
    return (
        <input type={props.typeInput} placeholder={props.placeHolder} ref={props.refrence} 
        className={"outline-none px-4 py-2 border border-gray-800 bg-black text-white rounded-sm focus:ring-4 min-w-72 ring-neutral-800"}
        />
    )
}

export default InputBox