import { VerticalStats } from '../VerticalStats/VerticalStats';
import './InfoDisplay.css'

export const InfoDisplay = ({ option, description, stats }) => {
  return (
    <section className='info-display'>
      {option === 0
        ? <p>{description}</p>
        : <VerticalStats
          hp={stats.hp}
          at={stats.at}
          def={stats.def}
          specialAttack={stats.specialAt}
          specialDefense={stats.specialDef}
          speed={stats.speed}>
        </VerticalStats>}
    </section >
  )
}