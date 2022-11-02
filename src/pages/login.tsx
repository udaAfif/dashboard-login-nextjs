import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap'
import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const login = (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()

    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      router.push('/')
    }, 2000)
  }

  return (
    <div className="bg-primary min-vh-100 d-flex flex-row align-items-center dark:bg-transparent ">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={5}>
            <div className="bg-light p-5 rounded-5">
              <h1>Login</h1>
              <p className="text-black-50">Sign In to your account</p>

              <form onSubmit={login}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faUser}
                      fixedWidth
                    />
                  </InputGroup.Text>
                  <Form.Control
                    name="username"
                    required
                    disabled={submitting}
                    placeholder="Username"
                    aria-label="Username"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faLock}
                      fixedWidth
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    disabled={submitting}
                    placeholder="Password"
                    aria-label="Password"
                  />
                </InputGroup>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check type="checkbox" id={`default-${type}`} label="remember me" />
                    </div>
                  ))}
                </Form>
                <Row>
                  <Col xs={6}>
                    <Button className="px-4" variant="primary" type="submit" disabled={submitting}>Login</Button>
                  </Col>
                  <Col xs={6} className="text-end">
                    <Button className="px-0 font" variant="link" type="submit">
                      Forgot password?
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
