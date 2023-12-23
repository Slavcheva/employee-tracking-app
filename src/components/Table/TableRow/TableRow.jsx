import TableCell from "../TableCell/TableCell";

function TableRow({rowData, type, i}) {

    return (
        <tr>
            {rowData?.map((field, index) => (

                <TableCell key={i+"&"+index} value={field} type={type}/>
            ))}
        </tr>
    );
}

export default TableRow;