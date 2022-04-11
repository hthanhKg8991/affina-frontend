import { Link } from "react-router-dom";

function GetAllCategoryComponent(props) {
    const { data = [] } = props;
    console.log('data:::', data);
    return (
        <div className="col-lg-12 stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Danh sách Danh Mục</h4>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> Name </th>
                                    <th> Content </th>
                                    <th> Type </th>
                                    <th> Status </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td> {index} </td>
                                                <td> {item.name} </td>
                                                <td> {item.content} </td>
                                                <td> {item.type} </td>
                                                <td> {item.status} </td>
                                                <td>
                                                    <Link to={"/category/" + item.type}>View</Link>/
                                                    <Link to="/category/create">Create</Link>/
                                                    <Link to={"/category/edit/" + item.id}>edit</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default GetAllCategoryComponent;