import Tile from '../../components/Tile'
import portfolio from './portfolio.json';
import './portfolio.css'

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>

      <div className="d-flex flex-wrap justify-content-center">
        <Tile repo={portfolio.apps[0].repo} app={portfolio.apps[0].app} name={portfolio.apps[0].name} tile={portfolio.apps[0].tile}/>
        <Tile repo={portfolio.apps[1].repo} app={portfolio.apps[1].app} name={portfolio.apps[1].name} tile={portfolio.apps[1].tile} />
        <Tile repo={portfolio.apps[2].repo} app={portfolio.apps[2].app} name={portfolio.apps[2].name} tile={portfolio.apps[2].tile} />
        <Tile repo={portfolio.apps[3].repo} app={portfolio.apps[3].app} name={portfolio.apps[3].name} tile={portfolio.apps[3].tile} />
        <Tile repo={portfolio.apps[4].repo} app={portfolio.apps[4].app} name={portfolio.apps[4].name} tile={portfolio.apps[4].tile} />
        <Tile repo={portfolio.apps[5].repo} app={portfolio.apps[5].app} name={portfolio.apps[5].name} tile={portfolio.apps[5].tile} />
        <Tile repo={portfolio.apps[6].repo} app={portfolio.apps[6].app} name={portfolio.apps[6].name} tile={portfolio.apps[6].tile} />
      </div>
    </div>
  );
}
