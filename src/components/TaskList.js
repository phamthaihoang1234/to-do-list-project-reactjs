
import {Component} from "react";


class TaskList extends Component {
    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"

                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"

                                >
                                    <option value="">Tất Cả</option>
                                    <option value="">Ẩn</option>
                                    <option value="">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


}

export default TaskList;
