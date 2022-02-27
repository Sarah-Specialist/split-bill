import './receipt.css'

export default function Receipt(props) {

    
    return (
        <>
        <h1>Your receipt</h1>
        <table className="receiptTable">
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {props.receipt.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                    </tr> 
                )
            }
            )}
        </table>
        </>
    )
}