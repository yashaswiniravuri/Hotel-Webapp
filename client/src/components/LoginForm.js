const LoginForm = (props) =>(
    <form onSubmit={props.handleSubmit} className="mx-7 mt-5">
        
        <div className="form-group mb-3" >
            <label className="form-label">Email address</label>
            <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
            />
        </div>

        <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
            />
        </div>
        <button disabled={!props.email||!props.password} className="btn btn-primary" type="submit">
            Submit
        </button>
    </form>
)
export default LoginForm;