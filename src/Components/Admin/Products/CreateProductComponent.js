import { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";


function CreateProductComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate(date);
    };
    return (
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Horizontal Two column</h4>
                    <Form className="form-sample">
                        <p className="card-description"> Personal info </p>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">First Name</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Last Name</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Gender</label>
                                    <div className="col-sm-9">
                                        <Form.Select aria-label="Default select example">
                                            <option>Open this select menu</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                                    <div className="col-sm-9">
                                        <DatePicker className="form-control w-100"
                                            selected={startDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Category</label>
                                    <div className="col-sm-9">
                                        <Form.Select>
                                            <option>Category1</option>
                                            <option>Category2</option>
                                            <option>Category3</option>
                                            <option>Category4</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Membership</label>
                                    <div className="col-sm-4">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Free
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> Proffessional
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <p className="card-description"> Address </p>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Address 1</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">State 1</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Address 2</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Postcode</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Cirt</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Country</label>
                                    <div className="col-sm-9">
                                        <select className="form-control">
                                            <option>America</option>
                                            <option>Italy</option>
                                            <option>Russia</option>
                                            <option>Britain</option>
                                        </select>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default CreateProductComponent;