import {useEffect, useState} from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
	{
		id: 'm1',
		title: 'first meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address, some city',
		description: 'This is a first meetup'
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address, some city',
		description: 'This is a second meetup'
	},
	{
		id: 'm3',
		title: 'third meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address, some city',
		description: 'This is a third meetup'
	}
]

function HomePage() {
	const [loadedMeetups, setLoadedMeetups] = useState([])


	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUP)
	}, [])

	return (
			<MeetupList meetups={loadedMeetups} />
		)
}

export default HomePage;