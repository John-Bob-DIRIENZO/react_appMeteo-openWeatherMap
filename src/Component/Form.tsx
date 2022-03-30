import React, {useState} from "react";

interface FormPropsInterface {
    setAskedLocation: React.Dispatch<any>
}

export default function Form({setAskedLocation}: FormPropsInterface) {
    const [typedLocation, setTypedLocation] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setAskedLocation(typedLocation);
    }

    return (
        <form onSubmit={handleSubmit}
              className='border rounded border-light p-5 col-md-4'>
            <label htmlFor="location" className='form-label text-light'>Change location</label>
            <input type="text" onChange={e => setTypedLocation(e.target.value)} className='form-control'
                   id='location'/>
            <button type='submit' className='btn btn-primary mt-3 w-100'>Search</button>
        </form>
    )
}
