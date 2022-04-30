import type { NextPage } from 'next'
import SectionCard from '../components/SectionCard'

const Home: NextPage = () => {

  return (
    <div className='container-fluid p-0 position-fixed d-flex justify-content-center || bg w414 h100pc'>
      <div className="col-11 d-flex flex-column || w414 h100pc">
        <div className='justify-content-center fw-bold d-flex align-items-center || h100 font-pacifico fs40'>O que deseja pedir?</div>
        <div className="flex-column d-flex justify-content-around || htotal">
          <SectionCard icon='' title=''/>
          <SectionCard icon='' title=''/>
          <SectionCard icon='' title=''/>
          <SectionCard icon='' title=''/>
        </div>
      </div>
    </div>
  )
}

export default Home
