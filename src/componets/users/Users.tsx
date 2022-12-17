import React from 'react';
import {v1} from 'uuid';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css'


export let Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://cdns-images.dzcdn.net/images/artist/cef0a39a577eb31908cf34f3016d3856/264x264.jpg',
                name: 'Ruslan',
                followed: true,
                status: 'I am looking for a job...',
                address: {
                    country: 'Belarus', city: 'Bobruisk'
                }
            },
            {
                id: v1(),
                photoUrl: 'https://img5tv.cdnvideo.ru/webp/shared/files/202210/1_1592599.jpg',
                name: 'Dmitry',
                followed: true,
                status: 'I like football!!!',
                address: {
                    country: 'Belarus', city: 'Minsk'
                }
            },
            {
                id: v1(),
                photoUrl: 'https://resizer.mail.ru/p/2c455782-ad3c-5b70-a6eb-911cbe1a6314/AAACQtvbhgxuvEqyOLobpsj2q5MZG-UGbs-Xe_rVLHtKaGBcvRNQAeTeE5gHITEWFEHU6dHwTbAoOoHIZp7iiy9H-7Y.jpg',
                name: 'Evgeny',
                followed: true,
                status: 'I am free to help you with JS and CSS',
                address: {
                    country: 'Belarus', city: 'Bobruisk'
                }

            },
            {
                id: v1(),
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vladimir_Sterzhakov_2.jpg/280px-Vladimir_Sterzhakov_2.jpg',
                name: 'Volodya',
                followed: false,
                status: 'I am a loser',
                address: {
                    country: 'Russia', city: 'Moscow'
                }
            },
            {
                id: v1(),
                photoUrl: 'https://cdn.7days.ru/upload/images/a3e/99d8a46002bd1e70f3fe603850f74.jpg',
                name: 'Nika',
                followed: true,
                status: 'Hello kitty',
                address: {
                    country: 'Ukraine', city: 'Odessa'
                }
            },
        ])
    }


    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto} alt="ava"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.address.country}</div>
                    <div>{u.address.city}</div>
                </span>
            </div>)
        }
    </div>
}



