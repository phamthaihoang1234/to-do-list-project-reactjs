import './App.css';

function App() {
  return (
    <div className="container">
        <div className="text-center">
          <h1>Task Manager</h1><hr/>
        </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
             {/*Form*/}
            <div class="panel panel-warning">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Add Task
                  <span className="fa fa-times-circle text-right">
                  </span>
                  </h3>
              </div>
              <div class="panel-body">
                <form  >
                  
                
                    <div class="form-group">
                    <label >Name :</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    />
                  </div>
                  <label >Status</label>
                  <select  className="form-control" 
                  name="status"
                  >
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select><br/>

                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <span className="fa fa-plus mr-5" id="acti"></span>Save
                    </button>

                      <button type="submit" className="btn btn-danger" >
                      <span className="fa fa-close mr-5" id="acti"></span>Cancel
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
        </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div>
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Add Task
                </button>
            </div>


              <br/>

              {/*Search and sort*/}
              {/*Search*/}
              <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input
                        name=""
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">
                                    <span className="fa fa-search mr-5">Search</span>
                            </button>
                        </span>
                    </div>
                </div>
                  {/*Sort*/}
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
              </div>
              <br/>

              {/*list*/}
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
          </div>

      </div>

      
    </div>
  );
}

export default App;
