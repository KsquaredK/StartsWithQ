import React, { useRef } from "react"
import { Link, useHistory  } from "react-router-dom"
import "./login.css"
import logo from "../auth/Qlogo.png";


export const Login = props => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
       return fetch(`http://localhost:8088/users?email=${email.current.value}`)
           .then(res => res.json())
           .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("startswithq_user", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main>
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section className="login-container">
            <header>     
          <div className="login-header">
            <img src={logo} alt="Starts With Q logo"/>
          </div>
        </header>
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Please sign in</h2>
                    <fieldset className="login-email">
                        <input ref={email} type="email"
                            id="email"
                            size="22"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit" className="login-submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
                <p></p>
                <p></p>
                <h6 className="login-register"><Link to="/register">Not a member yet?</Link></h6>  
            </section>
            <section className="register" >
              
            </section>
        </main>
    )
}
