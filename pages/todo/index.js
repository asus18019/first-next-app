import Head from "next/head";
import styles from '../../styles/todo.module.css';
import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import useSWR from 'swr';


export const getStaticProps = async () => {
    const res = await fetch('https://express-todo-app.vercel.app/api/')
    const data = await res.json();

    return{
        props: {
            todos: data
        },
        revalidate: 1
    }
}


const fetcher = (url) => fetch(url).then(res => res.json())

const Index = ({todos}) => {
    const initialData = todos;
    const { data } = useSWR('https://express-todo-app.vercel.app/api/', fetcher, { initialData })

    const [nickname, setNickname] = useState('');
    const [text, setText] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState(false);

    const Save = async () => {
        let config = {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'
            }
        }

        const body = {
            nickname: nickname,
            text: text,
            comment: comment
        }

        const response = await fetch('https://express-todo-app.vercel.app/api/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'mode': 'no-cors'},
            // credentials: 'include',
            body: new URLSearchParams(body)

        });
        const content = await response.json();
        if(response.status === 400){
            alert("Errors");
        } else if(response.status === 200) {
            alert("Added")
        } else {
            alert("unhandled error: " + response.status);
        }
    }

    const Delete = async (id) => {
        const idObj = {
            id: id,
        }
        const response = await fetch('https://express-todo-app.vercel.app/api/remove', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'mode': 'no-cors'},
            body: new URLSearchParams(idObj),
        });
        alert('deleted');
    }

    return(
    <>
        <Head>
            <title>Fishes | Index</title>
            <meta name="keyword" content="Index" />
        </Head>
        {
            message ? <div><h3>Success</h3></div> : false
        }
        <div className={styles.container}>
            <div>
                <h3>Your nickname</h3>
                <input type="text" className={styles.formField} placeholder="nickname" onChange={e => setNickname(e.target.value)} required/>
            </div>
            <div>
                <h3>Text</h3>
                <textarea className={styles.textarea} placeholder="text" onChange={e => setText(e.target.value)} required/>
            </div>
            <div>
                <h3>Comment</h3>
                <input type="email" className={styles.formField} placeholder="comment" onChange={e => setComment(e.target.value)} required/>
            </div>
        </div>
        {/*<Link href="/todo">*/}
            <a className={styles.btn} onClick={Save}>Index list</a>
        {/*</Link>*/}
        {
            data.map(todo =>
                <div className={styles.itemContainer} key={todo.id}>
                    <a className={styles.single}>
                        <h3>{ todo.nickname }</h3>
                        <p>{ todo.date }</p>
                        <h3>{ todo.text }</h3>
                        <button onClick={() => Delete(todo._id)}>delete</button>
                    </a>
                </div>
            )
        }
    </>
    )
}

export default Index;