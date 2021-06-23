import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss'

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #123455667788</span>
        </button>
    )
}