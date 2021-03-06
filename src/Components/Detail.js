let Detail = ({ email, first_name, last_name, avatar }) => {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={avatar} alt="Avatar" />
                 <div className="card-block">
                    <h3 className="card-text">
                        <span className="name">{first_name + ' ' + last_name}</span>
                        <p className='email'>{email}</p>
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default Detail;
