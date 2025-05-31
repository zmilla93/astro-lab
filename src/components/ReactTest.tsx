import { useState } from "react"

export function ReactTest() {
    const [count, setCount] = useState(0)

    return <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Click Me!</button>
        <button onClick={() => alert("Click!")}>Alert Me!</button>
        <Inner count={count}></Inner>
    </div>
}

function Inner({ count }: { count: number }) {
    return (
        <div>
            Inner Prop!! {count}
        </div>
    )
}