import Link from "next/link";

export default function StudentInfo({name}){
    return (
        <div>
            <p>{name}</p>
            <Link href="https://github.com/stranzn/cprg306-assignments">Github Repository</Link>
        </div>
    );
} 
