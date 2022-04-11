import React from 'react'
import { Container, Image } from 'react-bootstrap'

const CategoryDetailComponent = () => {
    return (
        <div className='box-category'>
            <Image
                src={'https://www.elementel.co.uk/wp-content/uploads/2020/03/Remote-Phones-Option-2.jpg'}
                srcSet={`
                    ${'https://www.elementel.co.uk/wp-content/uploads/2020/03/Remote-Phones-Option-2.jpg'} 2x, 
                    ${'https://www.elementel.co.uk/wp-content/uploads/2020/03/Remote-Phones-Option-2.jpg'} 3x
                `}
                alt="Banner privacy policy"
                width={'100%'}
                height={'350px'}
            />
            <Container className='category-detail-content'>
                <h4>AFFINA – CÙNG BẠN VƯỢT QUA KHÓ KHĂN & CẢM NHẬN <br/> SỰ AN TOÀN KHI LUÔN ĐƯỢC BẢO VỆ</h4>
                <p>
                    Cuộc sống không phải lúc nào cũng diễn ra theo cách chúng ta mong muốn. Những rủi ro, tai nạn, bệnh tật,... có thể ập đến bất ngờ. Vì thế, Affina hiểu rằng, ai cũng mong có một người bạn thân thiết, đủ tin tưởng để chia sẻ và tựa vào khi cần.
                </p>
                <p>Affina được phát triển với mong muốn trở thành một người bạn đồng hành tuyệt vời, đáng tin cậy của những khách hàng cá nhân; hay một nhà hỗ trợ chuyên nghiệp của các đối tác liên kết/ nhà môi giới để triển khai phân phối bảo hiểm phi nhân thọ tại thị trường Việt Nam.
                </p>
                <p>Dù trong vai trò nào, Affina vẫn luôn bên cạnh để giúp bạn mọi việc khi bạn yêu cầu từ tìm hiểu thông tin bảo hiểm, hướng dẫn các bước tham gia, giải đáp quyền lợi của các đơn bảo hiểm, hay kết nối bạn với nhà cung cấp bảo hiểm trong trường hợp có vướng mắc liên quan đến pháp lý hay tranh chấp về chi trả quyền lợi liên quan,...
                </p>
                <p>Affina đã làm cho việc tiếp cận sản phẩm, bồi thường bảo hiểm trở nên đơn giản hơn bằng việc nỗ lực nghiên cứu trải nghiệm người dùng và vận dụng kinh nghiệm tích lũy lâu năm trong ngành bảo hiểm, công nghệ & tài chính. Giờ đây, bạn chỉ với 4 bước là bạn có thể hoàn tất quy trình mua bảo hiểm và chỉ 2 bước là xong thủ tục bồi thường, giải quyết quyền lợi.
                </p>
                <p>Có Affina nghĩa là bạn luôn có một người bạn đáng tin cậy, một người trợ lý tài ba, có thể giúp bạn tham khảo, đưa ra quyết định mua sản phẩm bảo hiểm, tài chính tối ưu. Và bạn sẽ cảm nhận sự an toàn khi bản thân và những người người thân yêu của mình luôn được bảo vệ trên mọi hành trình.
                </p>
                <p>Đừng quên, bạn ở đâu, Affina sẽ ở đó, ngay bên cạnh bạn.
                </p>
            </Container>
        </div>
    )
}

export default CategoryDetailComponent
