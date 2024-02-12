import React, {useState} from 'react';

function FormPage() {
    const [value, setValue] = useState("")
    return (
        <form>
            <p>Title: </p>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text"/>
        </form>
    );
}

export default FormPage;