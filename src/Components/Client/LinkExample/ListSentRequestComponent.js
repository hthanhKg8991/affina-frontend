import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Stack, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../Reducers/SentRequest/SendRequestRedux';
import { isEmptyArray } from '../../../Common/Helper';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ListSentRequestComponent = () => {
    const dispatch = useDispatch();
    const { data = [] } = useSelector((state) => state.sendRequestRedux) || [];
    const callAPI = () => {
        dispatch(getAll());
    }
    useEffect(() => {
        callAPI()
    }, [dispatch])

    const exportFile = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const dataExport = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(dataExport, 'danh_sach_gui_yeu_cau' + fileExtension);
    }

    function stripScripts(s) {
        var div = document.createElement('div');
        div.innerHTML = s;
        var scripts = div.getElementsByTagName('script');
        var i = scripts.length;
        while (i--) {
          scripts[i].parentNode.removeChild(scripts[i]);
        }
        return div.innerHTML;
      }
    
    console.log(stripScripts('<span><script type="text/javascript">áddd</script></span>'));
    
    return (
        <div className='main-table list-sent-request'>
            <Container>
                <div className='wrapper-button-event text-right'>
                    <Button variant={"outline-info"}
                        // disabled={props.validate}
                        onClick={exportFile}
                    >
                        Xuất File Excel
                    </Button>
                </div>
                <Table responsive="sm" className="text-left">
                    <thead>
                        <tr>
                            <th>Họ & Tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (!isEmptyArray(data)) &&
                            data.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.note}</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ListSentRequestComponent
