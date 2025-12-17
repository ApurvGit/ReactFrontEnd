import React from 'react'

const UserCard = ({ user, mode, onClickStatus, acceptBtnLabel, ignoreBtnLabel }) => {
    const { firstName, lastName, age, photoUrl, emailId, city, _id } = user
    console.log(_id)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="Player Image"
                    width={300}
                    height={300}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{age}</p>
                <p>{emailId}</p>
                <p>{city}</p>

                {mode !== 'connection' && <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => onClickStatus('Rejected', _id)}>{ignoreBtnLabel}</button>
                    <button className="btn btn-primary" onClick={() => onClickStatus('Accepted', _id)}>{acceptBtnLabel}</button>
                </div>}
            </div>
        </div>
    )
}

export default UserCard