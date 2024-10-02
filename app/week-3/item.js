
export default function Item({name, quantity, category}){
    return(
        <div>
            <ul>
                <li>
                    <div className="max-w-md p-2 m-3 ml-4 background-color: bg-stone-700 border-2 border-zinc-50 rounded-md">
                        <p className="font-bold text-2xl font-sans">{name}</p>
                        <p>Buy {quantity} in {category}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}