import { useEffect, useState } from "react";
import { Alert, Modal, Input, Button, Form, message } from "antd";
import thungxop from "/thungxop.png";
import email from "/mail.png";
import giphy from "/2iiB.gif";
import tree from "/ZRV7.gif";
import audioChristmas from "/christmas.mp3";

function App() {
  const [visible, setVisible] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEmail, setIsModalEmail] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleCancelEmail = () => {
    setIsModalEmail(false);
    const audio = new Audio(audioChristmas);
    audio.play();
  };
  const handleClose = () => setVisible(false);

  const onChangeBox = () => {
    if (!visible) {
      showModal();
    }
  };

  const onFinish = (values) => {
    const { answer } = values;
    if (answer === "kẹo") {
      message.success("Câu trả lời đúng!");
      setTimeout(() => {
        setIsModalOpen(false);
        setAnswer(true);
      }, 2000);
    } else {
      message.error("Câu trả lời sai!");
    }
  };

  return (
    <>
      <div className="bg-[url('assets/bgChristmas.jpg')] h-[100vh] bg-no-repeat bg-center relative">
        <Alert
          message="Bạn được tặng 1 thùng xốp!"
          description="Vui lòng click vào thùng xốp để mở nó ra."
          type="info"
          showIcon
          closable
          onClose={handleClose}
          visible={visible}
        />
        {answer ? (
          <>
            <div className="absolute top-0 left-0 bottom-0">
              <img
                src={giphy}
                alt=""
                className="h-full overflow-hidden object-cover"
              />
            </div>
            <div className="absolute top-40 left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl font-bold font-pt-serif text-red-500">
                Merry Christmas
              </h3>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px]">
              <img src={tree} alt="" className="" />
            </div>
            <Modal
              title={null}
              open={isModalEmail}
              onOk={handleOk}
              onCancel={handleCancelEmail}
              footer={null}
            >
              <img src={email} alt="" />
            </Modal>
          </>
        ) : (
          <div
            className="absolute bottom-20 left-[50%] translate-x-[-50%]"
            onClick={onChangeBox}
          >
            <img src={thungxop} alt="" className="w-52" />
          </div>
        )}
      </div>
      <Modal
        title="Đố vui có thưởng!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <p>A. Là cây thông</p>
          <p>B. Là ông già Noel</p>
          <p>C. Là cái gì?</p>
        </div>
        <div className="mt-3">
          <Form onFinish={onFinish}>
            <Form.Item
              name="answer"
              rules={[
                { required: true, message: "Vui lòng nhập câu trả lời!" },
              ]}
            >
              <Input placeholder="Nhập câu trả lời" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Send</Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default App;
