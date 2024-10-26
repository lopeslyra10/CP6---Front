import Link from 'next/link'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/Integrantes">Integrantes</Link> </li>
                <li> <Link href="/Avaliacoes/ChallengerSprint">Challenger Sprints</Link> </li>
                <li> <Link href="/Avaliacoes/GlobalSolution">Global Solution</Link> </li>
                <li> <Link href="/Avaliacoes/CheckPoints">CheckPoints</Link> </li>
                <li> <Link href="/Avaliacoes/MediaFinal">Média Final</Link> </li>
            </ul>
        </nav>
    )
}