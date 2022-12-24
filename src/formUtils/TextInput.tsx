import {JSX} from "solid-js";

type TextInputProps = {
    label: string;
    type: string;
    placeholder: string;
}

const TextInput = (props: TextInputProps): JSX.Element => {
    return (<div class="flex flex-col gap-y-1">
        <label for={props.label} class="input-label">{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} class="text-input"/>
    </div>)
}

export default TextInput;