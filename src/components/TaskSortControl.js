
import {Component} from "react";


class TaskSortControl extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle = "dropdown"
                        aria-haspopup="true"
                    >
                        Sort <span className="fa fa-caret-square-o-down ml-5" ></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button" className="sort_selected">
                                      <span className="fa fa-sort-alpha-asc pr-5">
                                          From A to Z
                                      </span>
                            </a>
                        </li>

                        <li>
                            <a role="button" className="sort_selected">
                                      <span className="fa fa-sort-alpha-desc pr-5">
                                          From Z to A
                                      </span>
                            </a>
                        </li>

                        <li>
                            <a role="button" className="sort_selected">
                                      <span className="fa fa-sort-alpha-asc pr-5">
                                          Trạng Thái Kích Hoạt
                                      </span>
                            </a>
                        </li>

                        <li>
                            <a role="button" className="sort_selected">
                                      <span className="fa fa-sort-alpha-asc pr-5">
                                          Trạng Thái Ẩn
                                      </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }


}

export default TaskSortControl;
