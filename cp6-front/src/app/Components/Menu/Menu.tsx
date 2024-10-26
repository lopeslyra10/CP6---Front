import Link from 'next/link'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/Integrantes">Integrantes</Link> </li>
                <li> <Link href="/avaliacoes/ChallengerSprint">Challenger Sprints</Link> </li>
                <li> <Link href="/avaliacoes/GlobalSolution">Global Solution</Link> </li>
                <li> <Link href="/avaliacoes/CheckPoints">CheckPoints</Link> </li>
                <li> <Link href="/avaliacoes/MediaFinal">Média Final</Link> </li>
            </ul>
        </nav>
    )
}