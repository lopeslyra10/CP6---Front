import Link from 'next/link'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/Integrantes">Integrantes</Link> </li>
                <li> <Link href="/Integrantes">Challenger Sprints</Link> </li>
                <li> <Link href="/Integrantes">Global Solution</Link> </li>
                <li> <Link href="/Integrantes">Challenger Sprints</Link> </li>
            </ul>
        </nav>
    )
}