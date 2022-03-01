import React, {useState} from 'react';
import './addFriend.css';

export default function AddFriend(props) {
    const [friend, setFriend] = useState("");

    function handleChange(event) {
        setFriend(event.target.value);
    }

    const [friends, setFriends] = useState([]);
    function handleClick(event) {
        event.preventDefault();

        setFriends([...friends, friend]);
        //Post to external array of friends
    }

    return (
        <>
        <h1>Your friends</h1>
        <form className="form">
            <input name="name"
                    type="text"
                    placeholder="Friend's name"
                    value={friend}
                    onChange={handleChange}
            />
            <i className="fa fa-plus" onClick={handleClick} ></i>
        </form>
        <div className="max">Max 5 friends</div>
        <div className="friendsList">
            {friends.map(friend => 
            <p className="list">{friend}</p>
            )}
        </div>
        
        </>
    )
}