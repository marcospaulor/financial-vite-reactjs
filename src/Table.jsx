import './Table.css'

function Table(props) {
    
    // Get the list data from props
    const list = props.setList
    // console.log(list['Time Series (Daily)'])
    // console.log(list['Meta Data']['2. Symbol'])
    // console.log(list['Time Series (Daily)']['2021-09-03'])
    
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
                {/* Limitar tamanho da lista de dias */}

                {list['Time Series (Daily)'] && Object.keys(list['Time Series (Daily)']).slice(0,90).map((key, index) => {
                    const classLine = index % 2 === 0 ? 'tg-alz1' : 'tg-0lax'
                    return (
                        <tr key={index}>
                            <td className={classLine}>{key}</td>
                            <td className={classLine}>{list['Time Series (Daily)'][key]['1. open']}</td>
                            <td className={classLine}>{list['Time Series (Daily)'][key]['4. close']}</td>
                            <td className={classLine}>{list['Time Series (Daily)'][key]['2. high']}</td>
                            <td className={classLine}>{list['Time Series (Daily)'][key]['3. low']}</td>
                            <td className={classLine}>{list['Time Series (Daily)'][key]['5. volume']}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table