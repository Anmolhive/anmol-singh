import HomePage from './Components/Home/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anmol Singh',
  description: 'Experienced software engineer with a track record of delivering innovative solutions, ensuring high-quality software, and driving project success. Skilled in analyzing complex requirements, architecting robust systems, and optimizing performance with efficient algorithms and data structures. Proficient in multiple programming languages and frameworks, emphasizing clean, maintainable code. Collaborative team player experienced in meeting business objectives through cross-functional collaboration.',
}

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
