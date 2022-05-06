import { Accordion, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SEND_REQUEST } from "../../Routers/RoutePath";

function QuestionOftenComponent() {
    return (
        <Container fluid className="frequently-asked-question">
            <Container>
                <Nav className="justify-content-center flex-column align-items-center">
                    <h1>Câu hỏi thường gặp</h1>
                </Nav>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Hỏi: Tại sao bạn nên tham gia thêm sản phẩm sức khỏe?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Việt Nam thuộc nhóm nước có nguy cơ cao bị ảnh hưởng sức khỏe do yếu tố môi trường và điều kiện sống. </li>
                                <li>Chi phí y tế liên quan đến dịch vụ khám chữa bệnh luôn cao hơn chỉ số giá tiêu dùng (CPI) trong nước. Vì thế, nhiều người sẽ gặp khó khăn khi phải xoay xở khoản phí viện phí lớn nếu bản thân hoặc người thân  không may mắc bệnh cần phải điều trị.
                                </li>
                                <li>Hệ thống BHXH và phúc lợi xã hội chưa ổn định, BHYT hiện chưa đủ đáp ứng yêu cầu về sự thuận tiện, nhanh chóng, cũng như nhu cầu về sử dụng các dịch vụ y tế chất lượng cao.
                                </li>
                                <li>BHYT không chi trả các chi phí phát sinh, khi khách hàng tiếp cận với các dịch vụ khám chữa bệnh có chất lượng cao hơn tại Hệ thống tư nhân, bệnh viện quốc tế.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hỏi: Có giới hạn độ tuổi khi mua bảo hiểm sức khỏe không?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Có. Chương trình bảo hiểm sức khỏe Benefits One áp dụng cho độ tuổi từ 30 ngày tuổi đến 65 tuổi.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Hỏi: Có yêu cầu kiểm tra sức khỏe hoặc khai báo tình trạng y khoa nào trước khi mua không?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Không. Bạn không phải khám sức khỏe và không cần khai báo tình trạng y khoa trước khi tham gia bảo hiểm này.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Hỏi: Tôi có nên mua bảo hiểm chăm sóc sức khỏe cho bố mẹ không?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Đó là điều nên làm, bởi có bảo hiểm sẽ giúp đảm bảo việc chăm sóc, điều trị y tế tốt nhất cho bố mẹ của bạn trong trường hợp rủi ro, không may bất ngờ. Việc tham gia bảo hiểm cho bố mẹ sẽ giúp bạn chủ động hơn, giảm nỗi lo về tài chính & an tâm khi bố mẹ luôn được bảo vệ tối đa.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Hỏi: Bố mẹ tôi mắc bệnh từ trước có được mua bảo hiểm sức khỏe không?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Có, bạn có thể chọn một chương trình bảo hiểm cho các bệnh đã mắc từ trước của bố mẹ. Tùy thuộc vào thời gian chờ theo chương trình mà bạn đã chọn. Bạn nên chọn một chương trình bảo hiểm y tế có thời gian chờ đợi tối thiểu.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Hỏi: Bảo hiểm sức khỏe cho phép khám/ chữa bệnh ở những bệnh viện nào?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Bạn có thể khám chữa bệnh tại tất cả các cơ sở y tế hoạt động hợp pháp tại Việt Nam.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Hỏi: Hợp đồng sẽ được gửi đến khách hàng như thế nào?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ul>
                                <li>Khi mua và thanh toán thành công sản phẩm bảo hiểm sức khỏe, khách hàng sẽ được cấp giấy chứng nhận bảo hiểm điện tử phát hành qua email đã đăng ký. Giấy chứng nhận điện tử có đầy đủ giá trị pháp lý theo quy định tại Nghị định 52/2013/NĐ-CP ngày 16/05/2013 của Chính phủ về Thương mại điện tử.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Hỏi: Ưu điểm nổi bật sản phẩm sức khỏe Benefits One?</Accordion.Header>
                        <Accordion.Body>
                            <p>Trả lời:</p>
                            <ol>
                                <li>Thủ tục đăng kí, thanh toán và truy vấn quyền lợi bảo hiểm trực tuyến</li>
                                <li>Không phải kiểm tra sức khỏe, không cần khai báo tình trạng sức khỏe trước khi tham gia bảo hiểm</li>
                                <li>Khách hàng sẽ được cam kết được tham gia tái tục trong những năm tiếp theo</li>
                                <li>Bệnh ung thư không bị loại trừ, bảo hiểm cho các bệnh hiểm nghèo</li>
                                <li>Trẻ em được tham gia độc lập mà không cần đi kèm cha mẹ</li>
                                <li>Bảo hiểm cho tất cả cơ sở y tế có giấy phép hợp pháp và cung cấp được chứng từ hợp.</li>
                                <li>Bảo lãnh viện phí nhanh chóng trong vòng 30 phút với bảo lãnh ngoại trú và 24h với bảo lãnh nội trú với mạng lưới hơn 120 cơ sở y tế liên kết trên cả nước.</li>
                                <li>Mở rộng phạm vi địa lý toàn cầu để bạn tự do lựa chọn nơi điều trị phù hợp nhất</li>
                                <li>Khách hàng hoàn toàn yên tâm rằng, Benefits one bảo vệ chúng ta trước những nguy cơ tiềm tàng như Covid-19, Biến chứng sau khi tiêm Vaccine</li>
                                <li>Chương trình đa dạng về quyền lợi, mức phí nên bạn có nhiều sự lựa chọn</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="text-center question-btn">
                    <Link to="/support-center" className="btn question-btn-primary">Trung tâm trợ giúp</Link>
                    <Link to={SEND_REQUEST} className="btn question-btn-outline-primary">Gửi câu hỏi</Link>
                </div>
            </Container>
        </Container>
    )
}
export default QuestionOftenComponent;