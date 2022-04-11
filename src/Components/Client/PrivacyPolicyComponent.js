import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'

const PrivacyPolicyComponent = () => {
    return (
        <div>
            <Image
                src={'https://ermprotect.com/wp-content/uploads/2021/02/data-privacy.jpg'}
                srcSet={`
                    ${'https://ermprotect.com/wp-content/uploads/2021/02/data-privacy.jpg'} 2x, 
                    ${'https://ermprotect.com/wp-content/uploads/2021/02/data-privacy.jpg'} 3x
                `}
                alt="Banner privacy policy"
                width={'100%'}
                height={'auto'}
            />
            <Container className='privacy-policy'>
                <h4>Cam kết bảo mật và quyền riêng tư</h4>
                <p>
                    Bảo vệ tính cá nhân và quyền riêng tư của khách hàng là ưu tiên cao nhất của Công ty chúng tôi. Là đơn vị giới thiệu các sản phẩm bảo hiểm, chúng tôi hoàn toàn tuân thủ các luật và quy định của Pháp luật Việt Nam về bảo vệ và bảo mật tính riêng tư và an toàn thông tin của Quý khách, bằng các cam kết sau:

                    · Cam kết bảo mật ở mức cao nhất các thông tin mà khách hàng cung cấp, bất kể khách hàng cũ hay mới.

                    · Cam kết không bán, làm thất thoát thông tin mà Quý khách đã cung cấp hoặc cung cấp cho bên thứ ba với mục đích tiếp thị, trừ khi được sự cho phép của Quý khách.

                    · Cam kết chỉ sử dụng và chia sẻ hạn chế một số các thông tin Quý khách cung cấp trên website này để cung cấp các sản phẩm bảo hiểm hoặc dịch vụ mà Quý khách yêu cầu từ website này.
                </p>

                <h6>1. Công bố sử dụng thông tin của AFFINAVN</h6>
                <p>

                    Thông qua kênh bán hàng trực tuyến này, chúng tôi cam kết thu thập một cách hợp pháp các thông tin về Quý khách, những thông tin có thể được sử dụng để cung cấp các sản phẩm hoặc dịch vụ mà chúng tôi cho rằng Quý khách sẽ quan tâm và cho phép.

                    Một số thông tin mà Quý khách cung cấp có thể là không công khai và chỉ một mình Quý khách biết, những thông tin này chúng tôi sẽ thu thập trong quá trình truyền thông và giao dịch giữa Quý khách và chúng tôi, hoặc website của chúng tôi, hoặc những thông tin chúng tôi thu thập từ một bên thứ ba, hoặc những thông tin từ những nguồn khác.
                </p>

                <h6>2. Các thông tin chúng tôi thu thập về Quý khách</h6>
                <p>

                    Các thông tin chúng tôi thu thập về Quý khách bao gồm các thông tin Quý khách cung cấp cho chúng tôi khi Quý khách đăng ký mua sản phẩm hoặc sử dụng dịch vụ trên internet, qua điện thoại hoặc qua các phương tiện khác. Những thông tin này có thể bao gồm: Họ và tên, địa chỉ, số điện thoại, email, thông tin về xe, bằng lái, tình trạng hôn nhân, thông tin vợ hoặc chồng, thông tin về con cái,…
                </p>
                <h6>3. Các thông tin chúng tôi công khai</h6>
                <p>

                    Các thông tin chúng tôi thu thập được từ Quý khách chỉ được công khai khi có yêu cầu từ các cơ quan pháp luật hoặc có sự đồng ý của Quý khách.

                    Chúng tôi có thể cung cấp thông tin hoặc một phần thông tin về Quý khách cho các Công ty bảo hiểm là Đối tác của chúng tôi theo quy định của pháp luật….
                </p>

                <h6>4. Môi trường an ninh và bảo mật</h6>
                <p>

                    Các thông tin chúng tôi thu thập được từ Quý khách chỉ được công khai khi có yêu cầu từ các cơ quan pháp luật hoặc trong các trường hợp khác phải có sự đồng ý của Quý khách.

                    Chúng tôi cam kết ở mức cao nhất bảo mật và đảm bảo an ninh cho các thông tin Quý khách cung cấp khỏi những truy nhập không được phép. Ví dụ: chúng tôi sử dụng công nghệ mã hóa đường truyền đề bảo vệ thông tin và chỉ cho phép bên thứ ba tiếp cận các thông tin này, đủ để thực hiện việc cung cấp dịch vụ và sản phẩm bảo hiểm liên quan.
                </p>
                <h6>5. Xem xét và điều chỉnh các thông tin về Quý khách</h6>
                <p>
                    Là người có các hợp đồng bảo hiểm đã đặt mua qua website www.affina.com.vn của Công ty TNHH AFFINA Việt Nam, Quý khách luôn có thể xem xét các thông tin về bản thân tại website www.affina.com.vn, hoặc hỏi qua số điện thoại trực tiếp: 028.77722999. Tất cả các khách hàng đều có quyền biết những thông tin nào của mình đang được AFFINAVN nắm giữ, được phép thay đổi các thông tin này, được biết các thông tin nào đang được bảo mật và thông tin nào đã được AFFINAVN công khai.
                </p>

            </Container>
        </div>
    )
}

export default PrivacyPolicyComponent
