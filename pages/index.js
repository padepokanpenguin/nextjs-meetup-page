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

function HomePage(props) {

	return (
			<MeetupList meetups={props.meetups} />
		)
}

// export async function getServerSideProps(context) {
	
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUP
// 		},
// 	};
// }

export async function getStaticProps() {
	return {
		props: {
			meetups: DUMMY_MEETUP
		},
		revalidate: 10
	}
}

export default HomePage;