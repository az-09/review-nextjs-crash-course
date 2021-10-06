import { useRef } from "react";
import Card from '../ui/Card'
import style from './NewMeetupForm.module.css'


export default function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function submitHandler(event) {
        event.preventDetail()

        const meetupData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value

        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={style.form} onSubmit={submitHandler}>
                <div className={style.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef} />
                </div>
                <div className={style.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )


}