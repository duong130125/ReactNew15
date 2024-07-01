import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="gradient-custom flex flex-col items-center justify-center h-screen">
      <div className="flex shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block w-1/2 lg:w-1/3">
          <img
            src="https://didongviet.vn/dchannel/wp-content/uploads/2023/08/hinh-nen-3d-hinh-nen-iphone-dep-3d-didongviet@2x-576x1024.jpg"
            alt="Canyon"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="flex justify-between items-center mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#" className="text-blue-500">
                Forgot password?
              </a>
            </div>
            <Button variant="primary" type="submit" className="w-full mb-3">
              Login
            </Button>
            <div className="text-center">
              <span>or</span>
            </div>
            <Button variant="secondary" className="w-full mt-3">
              Register now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
