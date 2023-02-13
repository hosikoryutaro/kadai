import { Link } from "react-router-dom";

function TOP() {
  return (
    <div>
      <h1>私がオススメするラーメン店</h1>
      <ul>
        <li>
          <Link to="/hiroaka">ヒロアカ</Link>
        </li>
        <li>
          <Link to="/koori">氷の城壁</Link>
        </li>
        <li>
          <Link to="/yozakura">夜桜さんちの大作戦</Link>
        </li>
      </ul>
    </div>
  );
}

export default TOP;
