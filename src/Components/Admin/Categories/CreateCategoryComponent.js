import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import JoditEditor from "jodit-react";


function CreateCategoryComponent(props) {
    const { data, dataDetail } = props;
    const editor = useRef(null);
    const config = {
        // readonly: false, // all options from https://xdsoft.net/jodit/doc/
        // enableDragAndDropFileToEditor: true,
        uploader: {
            insertImageAsBase64URI: true,
            // url: 'file/upload',
            // isSuccess: function (resp) {
            //     return resp;
            // },
            // process: function (resp) {

            //     console.log(JSON.stringify(resp));
            //     return {
            //         files: resp.data.files,
            //         path: resp.data.path,
            //         baseurl: resp.data.baseurl,
            //         error: resp.data.error,
            //         message: resp.data.message
            //     }
            // },
            // defaultHandlerSuccess: function (data) {
            //     var i, field = 'files';
            //     if (data[field] && data[field].length) {
            //         for (i = 0; i < data[field].length; i += 1) {
            //             this.selection.insertImage(data.baseurl + data[field][i]);
            //         }
            //     }
            // },
        }

    }
    const [content, setContent] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Horizontal Two column</h4>
                    <Form className="form-sample">
                        <p className="card-description"> Category info </p>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" defaultValue={dataDetail.name} />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row form-group">
                                    <label className="col-sm-3 col-form-label">Type</label>
                                    <div className="col-sm-9">
                                        <Form.Select>
                                            {
                                                // data.map((item, index) => {
                                                //     return (
                                                //         <option selected={item.type === dataDetail.type}>{item.type}</option>
                                                //     )
                                                // })
                                            }
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <p className="card-description"> Content </p>
                        <div className="row">
                            <JoditEditor
                                ref={editor}
                                value={content || dataDetail.content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => { }}
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default CreateCategoryComponent;