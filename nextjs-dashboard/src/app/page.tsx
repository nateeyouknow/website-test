'use client';
import {FormEvent} from 'react';

export default function MainPage(){
    function printstuffs(event: FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get("username"));
        alert("Submitted successfully!");
    }
    
    return <div>
        <form onSubmit={printstuffs}>
            <input type="text" name="username" />
            <button className="text-red-500 font-bold border-2 p-4 bg-blue-50 cursor-pointer" type="submit">Submit</button>
        </form> 
    </div>;
}