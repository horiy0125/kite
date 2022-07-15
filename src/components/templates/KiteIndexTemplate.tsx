import { Link } from 'react-router-dom';
import { KiteBaseTemplate } from './base/KiteBaseTemplate';

export const KiteIndexTemplate: React.FC = () => {
  return (
    <KiteBaseTemplate>
      <h1>IndexPage</h1>

      <form>
        <label>
          てすと
          <input type="text" />
        </label>
      </form>

      <table>
        <thead>
          <th>ほげ</th>
          <th>ふが</th>
          <th>ぴよ</th>
        </thead>

        <tbody>
          <tr>
            <td>hoge</td>
            <td>fuga</td>
            <td>piyo</td>
          </tr>
        </tbody>
      </table>

      <button type="submit" onClick={() => alert('あらーと')}>
        Submit
      </button>

      <Link to={'/404'}>Link</Link>
    </KiteBaseTemplate>
  );
};
