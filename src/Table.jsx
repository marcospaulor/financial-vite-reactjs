import './Table.css'

function Table(list) {
  return (
    <div className='table'>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-0lax">Date</th>
                    <th className="tg-0lax">Open</th>
                    <th className="tg-0lax">Close</th>
                    <th className="tg-0lax">High</th>
                    <th className="tg-0lax">Low</th>
                    <th className="tg-0lax">Volume</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tg-alz1">2022-09-23</td>
                    <td className="tg-alz1">09</td>
                    <td className="tg-alz1">23</td>
                    <td className="tg-alz1">54</td>
                    <td className="tg-alz1">21</td>
                    <td className="tg-alz1">65</td>
                </tr>
                <tr>
                    <td className="tg-0lax">2022-09-23</td>
                    <td className="tg-0lax">09</td>
                    <td className="tg-0lax">23</td>
                    <td className="tg-0lax">54</td>
                    <td className="tg-0lax">21</td>
                    <td className="tg-0lax">65</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table